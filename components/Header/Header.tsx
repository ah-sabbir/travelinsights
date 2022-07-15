import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import logo_img from "../../public/logo-search.png";
const Header = () => {
  return (
    <header className="top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      {/*  Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src={logo_img}
          alt="travel insight"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/*  Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Places"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        {/* Change Languages */}
        <div className="flex items-center space-x-2 ">
          <p className="text-sm md:text-md">EN</p>
          <GlobeAltIcon className="h-5 md:h-6 cursor-pointer" />
        </div>
        {/* Menus with User */}
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
