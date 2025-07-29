import Link from 'next/link';
import React from 'react';

export default function ServiceDetailsPage({ params }) {
  // Sample data
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

  const id = params.id;
  const serviceData = data.find(service => service._id === id);

  // If not found, show a message
  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-red-500 mb-2">Service Not Found</h2>
          <p className="text-gray-600">Sorry, we couldn't find the service you are looking for.</p>
          <Link className="btn-primary p-2 rounded-2xl text-black bg-amber-50" href="/">Go back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-md w-full">
        <img
          src={serviceData.service_image}
          alt={serviceData.service_name}
          className="w-full h-48 object-cover rounded-md mb-6"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">{serviceData.service_name}</h1>
        <p className="text-gray-500 mb-4 text-sm sm:text-base">
          <span className="font-semibold">Service ID:</span> <span className="font-mono">{id}</span>
        </p>
        <p className="text-gray-700 text-base sm:text-lg">{serviceData.service_description}</p>
      </div>
    </div>
  );
}