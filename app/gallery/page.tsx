import React from "react";
import { GALLERY_IMAGES } from "@/constants";

const Gallery = () => {
  return (
    <section className="padding-container py-10 bg-gray-900"
    style={{
        backgroundImage: 'url("/whitemarmor.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <h2 className="bold-40  text-center mb-6">Galleri</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {GALLERY_IMAGES && GALLERY_IMAGES.map((item:any) => (
          <div key={item.id} className="w-full md:w-1/3 lg:w-1/4 p-4 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <img src={item.image} alt={item.category} className="w-full h-48 object-cover rounded-t-lg" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

