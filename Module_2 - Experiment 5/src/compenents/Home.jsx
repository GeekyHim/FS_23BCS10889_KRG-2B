import React from "react";
import Navbar from "./Navbar";

// Dummy array of properties
const properties = [
  {
    id: 1,
    title: "2BHK Apartment",
    location: "Chandigarh",
    price: "₹40,000",
    type: "rent",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    id: 2,
    title: "3BHK Villa",
    location: "Mohali",
    price: "₹75,000",
    type: "sale",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    id: 3,
    title: "1BHK Studio",
    location: "Panchkula",
    price: "₹20,000",
    type: "rent",
    imageUrl: "https://via.placeholder.com/400x250"
  }
];

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">🏠 Available Properties</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{property.title}</h2>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-green-600 font-bold mt-2">{property.price}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mt-2">
                  {property.type.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
