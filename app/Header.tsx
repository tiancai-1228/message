import React from "react";
import Image from "next/image";
import logo from "../image/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className=" flex space-x-2 items-center">
          <Image src={logo} width={50} height={10} alt="logo" />

          <p className="text-blue-400">welcome to Messenger</p>
        </div>
        <Link
          href={"/auth/signIn"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
