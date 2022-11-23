"use client";

import { getProviders, signIn } from "next-auth/react";
import React from "react";

interface prop {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const sigInComponent: React.FC<prop> = ({ providers }) => {
  return (
    <div>
      {Object.values(providers!).map((provider) => (
        <button
          key={provider.id}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          onClick={() => {
            signIn(provider.id, { callbackUrl: "http://localhost:3000" });
          }}
        >
          Sign In with facebook
        </button>
      ))}
    </div>
  );
};

export default sigInComponent;
