"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Login from "./component/Header/login";
import Logout from "./component/Header/logout";
// import { session } from "next-auth/react";

const Header: React.FC = ({}) => {
  const { data: session, status } = useSession();

  if (session) return <Logout />;

  return <Login />;
};

export default Header;
