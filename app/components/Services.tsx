import { SERVICES } from "@/constants";
import React from "react";

const Services = () => {
  return (
    <section className=" padding-container py-10" style={{
        backgroundImage: 'url("/marmor.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <h2 className="bold-20 text-center text-white mb-10 bg-black bg-opacity-40">Våra Tjänster</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {SERVICES && SERVICES.map((service:any) => (
          <div key={service.id} className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="bold-24 mb-2">{service.title}</h3>
              <p className="regular-16 text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

