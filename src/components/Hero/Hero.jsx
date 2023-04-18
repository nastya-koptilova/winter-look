import React from "react";
import { CreateImage } from "../CreateImage/CreateImage";
import { AppAviable } from "../App/AppAviable";
import s from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.hero__wrapper}>
        <AppAviable />
        <h1 className={s.hero__title}>
          CHOOSE YOUR
          <br /> WINTER <span className={s.hero__title_look}>LOOK</span> <br />
          APPAREL
        </h1>
        <CreateImage />
      </div>
    </section>
  );
};
