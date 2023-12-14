const NavBar = () => {
  return ( 
          // fixed w-full -top-6 z-10
    <div className="bg-slate-100  h-40 py-10 ">
      <div className=" flex h-1/5 justify-between px-8 items-center ">
        <div className="flex space-x-6 ">
          <div className="">
            <img src="images/logo1.png" alt="" srcset="" />
          </div>
          <div className="">
            <img src="images/logo2.png" alt="" srcset="" />
          </div>
        </div>
        <div className="flex text-xs py-1  ">
          <ul className="flex w-full space-x-6 font-semibold ">
            <li className="">Trouver un magasin</li>
            <li className="border-l-2 border-black px-3">Aide</li>
            <li className="border-l-2 border-black px-3">Nous rejoindre</li>
            <li className="border-l-2 border-black px-3">S'identifier</li>
          </ul>
        </div>
      </div>
      <div className="bg-white flex justify-between h-2/5 items-center px-8 ">
        <div className="">
          <img src="images/logo3.png" alt="" srcset="" />
        </div>
        <div className="">
          <ul className=" flex space-x-6 font-semibold">
            <li>Nouveutes</li>
            <li>Homme</li>
            <li>Femme</li>
            <li>Enfant</li>
            <li>Offres</li>
          </ul>
        </div>
        <div className="flex items-center ">
          <ul className="flex space-x-6 items-center ">
            <li className="flex items-center  space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute ml-7 text-gray-500 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

              <input
                type="search"
                name=""
                id=""
                placeholder="Rechercher"
                className="bg-slate-100 p-2 rounded-full pl-11"
              />{" "}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-2/5  w-auto px-8">
      </div>
    </div>
  );
};

export default NavBar;
