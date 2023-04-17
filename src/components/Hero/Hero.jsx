import React from "react";
import { CreateImage } from "../CreateImage/CreateImage";
import { AppAviable } from "../AppAviable/AppAviable";

export const Hero = () => {
  return (
    <section>
      <AppAviable/>
      <h1>
        CHOOSE YOUR WINTER <span>LOOK</span> APPAREL
      </h1>
      <CreateImage />
    </section>
  );
};
