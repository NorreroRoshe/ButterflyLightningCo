import React, { useEffect } from "react";

import { SectionHero } from "./SectionHero/SectionHero";
import { LightFactory } from "./LightFactory/LightFactory";
import { Partnership } from "../../components/Partnership/Partnership";
import { LightCatalogue } from "../../components/LightCatalogue/LightCatalogue";
import { SaleBunner } from "./SaleBunner/SaleBunner";
import { useSignInMutation } from "@/Store/auth/auth.api";

const Home: React.FC = () => {
  const [signIn, {}] = useSignInMutation();

  return (
    <div className="wrapp">
      {/* <button         //Signin Данилы
        onClick={() =>
          signIn({
            email: "lightninhg-shop@outlook.com",
            password: "Cefd-21avt-pdc",
            rememberMe: true,
          })
        }
      >
        Sign in
      </button> */}
      <SectionHero />
      <LightCatalogue />
      <SaleBunner />
      <LightFactory />
      <Partnership />
    </div>
  );
};

export default Home;
