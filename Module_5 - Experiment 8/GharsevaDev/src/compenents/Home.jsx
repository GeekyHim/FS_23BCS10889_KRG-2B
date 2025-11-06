import React, { useEffect, useMemo, useState } from "react";
import { fetchProperties } from "../services/properties";
import { isLoggedIn, logout } from "../services/auth";
import { Link } from "react-router-dom";  // ✅ Added

const Home = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const dummyProperties = [
    {
      id: "dummy-1",
      title: "Modern 2BHK Apartment",
      address: "Sector 22",
      city: "Chandigarh",
      pricePerMonth: 15000,
      imageUrls: [
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60"
      ],
    },
    {
      id: "dummy-2",
      title: "Luxury Villa with Pool",
      address: "DLF Phase 3",
      city: "Gurugram",
      pricePerMonth: 45000,
      imageUrls: [
        "https://images.unsplash.com/photo-1572120360610-d971b9c79809?auto=format&fit=crop&w=800&q=60"
      ],
    },
    {
      id: "dummy-3",
      title: "Cozy Studio Apartment",
      address: "MG Road",
      city: "Bengaluru",
      pricePerMonth: 10000,
      imageUrls: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
      ],
    },
  ];

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const data = await fetchProperties();
        if (isMounted) {
          const fetched = Array.isArray(data) ? data : [];
          setItems([...dummyProperties, ...fetched]);
        }
      } catch (e) {
        if (isMounted) {
          setError(e.message || "Failed to load properties");
          setItems(dummyProperties);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProperties = useMemo(() => {
    const q = search.toLowerCase();
    return items.filter((p) =>
      (p.title || "").toLowerCase().includes(q) ||
      (p.address || "").toLowerCase().includes(q) ||
      (p.city || "").toLowerCase().includes(q)
    );
  }, [items, search]);

  return (
    <div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-blue-600">🏠 Available Properties</h1>
          {isLoggedIn() && (
            <button
              onClick={() => { logout(); window.location.assign('/'); }}
              className="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Logout
            </button>
          )}
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title, location or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-6 focus:outline-blue-500"
        />

        {/* Property Grid */}
        {loading ? (
          <p className="text-gray-500">Loading properties...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProperties.length === 0 ? (
              <p className="text-gray-500 col-span-3">No properties match your search.</p>
            ) : (
              filteredProperties.map((p) => {
                const image =
                  Array.isArray(p.imageUrls) && p.imageUrls.length > 0
                    ? p.imageUrls[0]
                    : "https://via.placeholder.com/400x250";
                return (
                  <Link
                    to="/propertylist"
                    key={p.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition block"
                  >
                    <img
                      src={image}
                      alt={p.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold">{p.title}</h2>
                      <p className="text-gray-600">
                        {p.address}
                        {p.city ? `, ${p.city}` : ""}
                      </p>
                      {typeof p.pricePerMonth === "number" && (
                        <p className="text-green-600 font-bold mt-2">
                          ₹{p.pricePerMonth}/mo
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        )}

        {error && (
          <p className="text-yellow-600 mt-4 italic">
            ⚠️ Some data could not be loaded — showing demo listings instead.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
