import { useState } from "react";

export default function Admin() {
  // dummy state to store properties temporarily
  const [properties, setProperties] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    type: "rent",
    imageUrl: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.location) {
      alert("Please fill all required fields!");
      return;
    }
    setProperties([form, ...properties]); // add new property to top
    setForm({ title: "", price: "", location: "", type: "rent", imageUrl: "", description: "" }); // reset form
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">🏠 GharSeva Admin Panel</h1>

        {/* Add Property Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={form.title}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-blue-500"
          />

          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={form.price}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-blue-500"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-blue-500"
          />

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-blue-500"
          >
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-lg focus:outline-blue-500 md:col-span-2"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows="3"
            className="border border-gray-300 p-2 rounded-lg focus:outline-blue-500 md:col-span-2"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition md:col-span-2"
          >
            Add Property
          </button>
        </form>
      </div>

      {/* Property Preview Section */}
      <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">📋 Added Properties</h2>

        {properties.length === 0 ? (
          <p className="text-gray-500">No properties added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={p.imageUrl || "https://via.placeholder.com/400x250"}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-600">{p.location}</p>
                  <p className="text-green-600 font-bold mt-2">₹{p.price}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2">
                    {p.type.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
