"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../image/logo.png";
import { signOut } from "next-auth/react";
import Link from "next/link";

const logout = () => {
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-between items-end p-10 shadow-sm">
      <div className=" flex space-x-2 items-center">
        <Image src={logo} width={50} height={10} alt="logo" />

        <p className="text-blue-400">welcome to Messenger</p>
      </div>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </Link>
    </header>
  );
};

export default logout;
