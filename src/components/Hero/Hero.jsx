import React from "react";
import { motion } from "framer-motion";
import { CreateImage } from "../CreateImage/CreateImage";
import { AppAviable } from "../App/AppAviable";
import s from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <motion.div initial={{
            x: 1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0,
            duration: 1.5,
          }} className={s.hero__wrapper}>
        <AppAviable />
        <h1
          className={s.hero__title}
        >
          CHOOSE YOUR
          <br /> WINTER
          <br />{" "}
          <motion.span
            animate={{ rotate: [20, -15, 20] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={s.hero__title_look}
          >
            LOOK
          </motion.span>
          APPAREL
        </h1>
        <CreateImage />
      </motion.div>
    </section>
  );
};
