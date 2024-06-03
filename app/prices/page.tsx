import React from "react";
import { PRICES } from "@/constants";

const Prices = () => {
  return (
    <section className="py-8 px-10 bg-gray-900" 
    >
      <h2 className="bold-32 text-center mb-10 text-pink-500">Priser</h2>
      {PRICES.map((category) => (
        <div key={category.id} className="mb-8">
          <h3 className="bold-20 mb-4 text-pink-500">{category.category}</h3>
          <div className="space-y-4">
            {category.services.map((service, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-lg flex justify-between items-center"
              >
                <div>
                  <h4 className="bold-20">{service.title}</h4>
                  <p className="text-gray-600">{service.duration}</p>
                </div>
                <div className="text-right">
                  <p className="bold-20 text-gray-800">{service.price}</p>
                  <button className="mt-4  text-blue-600 hover:underline">Boka</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Prices;
