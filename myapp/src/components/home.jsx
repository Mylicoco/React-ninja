import react from "react";

const Home = () => {
  return (
    <div className="relative">
      <div className="py-12">
        <img src="images/nike-just-do-it.jpg" alt="" srcset="" />
      </div>
      <div className="absolute bottom-24 px-8 space-y-8 text-left">
        <h1 className="text-5xl font-bold text-white ">OFFRE LE MEILLEUR</h1>
        <h2 className="text-white font-bold text-xl">le cadeau ideal, c'est celui qui nous fait bouger.</h2>
        <div className="space-x-2 text-lg">
          <button className="bg-white px-5 py-1 font-semibold  rounded-full">Acheter</button>
          <button className="bg-white px-5 py-1 font-semibold  rounded-full">Enfant</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
