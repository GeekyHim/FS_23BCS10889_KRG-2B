import React from "react";
import { Link } from "react-router-dom";

const PropertyList = () => {
  // ✅ Dummy Single Property Data
  const property = {
    id: "dummy-1",
    title: "Modern 2BHK Apartment",
    address: "Sector 22",
    city: "Chandigarh",
    pricePerMonth: 15000,
    description:
      "Experience modern living in this spacious 2BHK apartment located in the heart of Chandigarh. The apartment offers a beautiful living space with natural light, modular kitchen, wooden flooring, and 24/7 security. Perfect for families or working professionals.",
    imageUrls: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=60",
    ],
    details: {
      bedrooms: 2,
      bathrooms: 2,
      area: "1250 sq.ft",
      furnishing: "Semi-Furnished",
      parking: "1 Car Parking",
      availability: "Immediate",
    },
  };

  // ✅ Dummy Reviews
  const reviews = [
    {
      id: 1,
      name: "Aman Sharma",
      rating: 5,
      comment:
        "Loved staying here! The apartment is spacious and well-lit. The neighborhood is calm and safe. Highly recommended!",
      date: "October 12, 2025",
    },
    {
      id: 2,
      name: "Priya Verma",
      rating: 4,
      comment:
        "Good experience overall. The interiors are nice, and the landlord is cooperative. Only downside was parking space.",
      date: "September 28, 2025",
    },
    {
      id: 3,
      name: "Rohit Gupta",
      rating: 5,
      comment:
        "Excellent location! Close to markets and public transport. Would definitely rent again.",
      date: "August 30, 2025",
    },
  ];

  const image =
    Array.isArray(property.imageUrls) && property.imageUrls.length > 0
      ? property.imageUrls[0]
      : "https://via.placeholder.com/800x450";

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-600">🏡 Property Details</h1>
        <Link
          to="/"
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
        >
          ⬅ Back to Home
        </Link>
      </div>

      {/* Property Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto mb-10">
        {/* Image */}
        <img src={image} alt={property.title} className="w-full h-80 object-cover" />

        {/* Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{property.title}</h2>
          <p className="text-gray-600 text-lg">
            {property.address}, {property.city}
          </p>
          <p className="text-green-600 text-xl font-semibold mt-3">
            ₹{property.pricePerMonth}/month
          </p>

          <hr className="my-4" />

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{property.description}</p>

          {/* Property Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Bedrooms</p>
              <p className="font-semibold">{property.details.bedrooms}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Bathrooms</p>
              <p className="font-semibold">{property.details.bathrooms}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Area</p>
              <p className="font-semibold">{property.details.area}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Furnishing</p>
              <p className="font-semibold">{property.details.furnishing}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Parking</p>
              <p className="font-semibold">{property.details.parking}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Availability</p>
              <p className="font-semibold">{property.details.availability}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
              📞 Contact Owner
            </button>

            {/* Review Button */}
            <Link
              to="/review"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium"
            >
              ✍️ Write a Review
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Reviews Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">⭐ Reviews</h2>

        {reviews.map((r) => (
          <div
            key={r.id}
            className="border-b border-gray-200 pb-4 mb-4 last:border-none last:mb-0"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-lg text-gray-800">{r.name}</h3>
              <p className="text-sm text-gray-500">{r.date}</p>
            </div>

            {/* Stars */}
            <div className="text-yellow-400 mb-1">
              {"★".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </div>

            {/* Comment */}
            <p className="text-gray-700">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
