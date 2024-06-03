import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="relative padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
      style={{
        backgroundImage: 'url("/bs.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-1 flex-col bg-black bg-opacity-70 p-6 rounded-xl xl:w-1/2">
        <h1 className="bold-52 lg:bold-50 text-white">
          Välkommen till <span className="text-pink-500">Salong Beauty</span>
        </h1>
        <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
          På Salong Beauty är vi dedikerade till att ge dig den ultimata
          skönhetsupplevelsen. Vårt erfarna team av professionella erbjuder en
          rad tjänster som är utformade för att framhäva din naturliga skönhet
          och få dig att känna dig fantastisk. Oavsett om du är här för en
          avslappnande ansiktsbehandling, en stilfull klippning, eller en lyxig
          manikyr, strävar vi efter att ge dig den högsta nivån av service och
          vård. 
        </p>
        <div className="lg:flexCenter hidden">
        <Button 
        type="button"
        title="Boka Direkt!"
        variant="btn_dark_green"
        />
      </div>
      </div>
    </section>
  );
};

export default Hero;
