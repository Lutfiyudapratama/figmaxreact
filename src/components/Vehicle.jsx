import React from "react";
import vehicle1 from '../assets/vehicle1.jpeg';
import vehicle2 from '../assets/vehicle2.jpeg';
import vehicle3 from '../assets/vehicle3.jpeg';

function BusSection() {
  const buses = [
    { id: 1, image: vehicle1, color: "brown" },
    { id: 2, image: vehicle2, color: "blue" },
    { id: 3, image: vehicle3, color: "purple" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-8">Nikmati Perjalanan dengan Kendaraan Kami</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {buses.map(bus => (
          <div key={bus.id} className={`bg-${bus.color}-500 rounded-lg overflow-hidden`}>
            <img
              src={bus.image}
              alt={`bus ${bus.id}`}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-white font-bold">Bus {bus.id}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default vehicle;