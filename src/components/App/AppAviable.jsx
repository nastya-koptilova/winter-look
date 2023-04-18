import React from "react";
import { motion } from 'framer-motion';
import s from "./AppAviable.module.scss";

export const AppAviable = () => {
  return (
    <div className={s.app}>
      <div className={s.app_apple}></div>
      <div className={s.app_android}></div>
      <p className={s.app_description}>App available</p>
    </div>
  );
};
