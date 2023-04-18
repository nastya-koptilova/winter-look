import React from "react";
import { motion } from 'framer-motion';
import s from "./AppAviable.module.scss";

export const AppAviable = () => {
  return (
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
    }} className={s.app}>
      <div className={s.app_apple}></div>
      <div className={s.app_android}></div>
      <p className={s.app_description}>App available</p>
    </motion.div>
  );
};
