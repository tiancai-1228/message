import { getProviders, signIn } from "next-auth/react";
import Logo from "../../../image/logo.png";
import Image from "next/image";
import SigInComponent from "./sigInComponent";

async function SignInPage() {
  const providers = await getProviders();

  return (
    <div>
      <div></div>
      <SigInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
