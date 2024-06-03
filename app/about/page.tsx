import React from "react";

const About = () => {
  return (
    <section className="padding-container py-10 bg-gray-900">
      <h2 className="bold-20 text-center mb-6 text-pink-500">Beauty Salon </h2>
      <div className="flex flex-col items-center">
        <p className="regular-16 text-white max-w-prose text-center">
          <span className="text-pink-500 text-lg">Beauty Salon</span> har varit din skönhetsdestination sedan 2023. Med vårt professionella team av erfarna stylister och terapeuter strävar vi efter att ge dig den bästa möjliga upplevelsen. Vi specialiserar oss på naglar, fransar, massage och vaxning för att hjälpa dig att känna dig vacker både inuti och utanpå.
        </p>
        <p className="regular-16 text-white max-w-prose text-center mt-4">
          Adress: Kungens Gata 25
          <br />
          Telefon: 079-322-24-55
        </p>
        <p className="regular-16 text-white max-w-prose text-center mt-4">
          Följ oss på sociala medier:
          <br />
          <a href="[LÄNK TILL FACEBOOK]" className="text-blue-500 hover:underline text-lg">Facebook</a> | <a href="[LÄNK TILL INSTAGRAM]" className="text-blue-500 hover:underline text-lg">Instagram</a>
        </p>
      </div>
    </section>
  );
};

export default About;
