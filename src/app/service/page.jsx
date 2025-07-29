import Link from 'next/link';
import React from 'react';

export default function ServicePage() {
  const data = [
    {
      _id: "60d21b4667d0d8992e610c85",
      service_name: "EcoClean",
      service_image: "/service_image_4.jpg",
      service_description: "EcoClean offers environmentally friendly cleaning services for homes and offices."
    },
    {
      _id: "60d21b4667d0d8992e610c86",
      service_name: "SparklePro",
      service_image: "/service_image_4.jpg",
      service_description: "SparklePro provides professional window and glass cleaning with streak-free shine."
    },
    {
      _id: "60d21b4667d0d8992e610c87",
      service_name: "FreshNest",
      service_image: "/service_image_4.jpg",
      service_description: "FreshNest specializes in deep cleaning and sanitization for residential properties."
    },
    {
      _id: "60d21b4667d0d8992e610c88",
      service_name: "GreenMaid",
      service_image: "/service_image_4.jpg",
      service_description: "GreenMaid uses biodegradable products to offer eco-conscious maid services."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-center text-gray-600 mb-10">Feel free to reach out with any questions or inquiries.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((d) => (
          <div key={d._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <Link href={`/service/${d._id}`}>
              <img
                src={d.service_image}
                alt={d.service_name}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl text-gray-600 font-semibold mb-2">{d.service_name}</h2>
              <p className="text-gray-600 text-sm">{d.service_description}</p>
              <Link href={`/service/${d._id}`} className="inline-block mt-4 text-blue-600 hover:underline text-sm">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
