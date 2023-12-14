const MoreGift = () => {
  return (
    <div>
      <div className="px-10 py-10">
        <h1 className="text-left p-3 py-6 text-2xl font-semibold">
          Encore plus d'idées cadeaux
        </h1>
        <div className="flex gap-2 scrollbar-none  py-6">
          <div className="relative">
            <img src="images/4.webp" alt="" srcset="" />
            <button className="absolute bottom-16 left-16 bg-white px-5 py-2 rounded-full font-bold">
              Femme
            </button>
          </div>
          <div className="relative">
            <img src="images/5.webp" alt="" srcset="" />
            <button className="absolute bottom-16 left-16 bg-white px-5 py-2 rounded-full font-bold">
              Homme
            </button>
          </div>
          <div className="relative">
            <img className=" " src="images/4.webp" alt="" srcset="" />
            <button className="absolute bottom-16 left-16 bg-white px-5 py-2 rounded-full font-bold">
              Enfant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreGift;
