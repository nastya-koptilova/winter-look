import React from "react";
import { motion } from 'framer-motion';
import { ReactComponent as Create } from "../../images/create.svg";
import s from "./CreateImage.module.scss";

export const CreateImage = () => {
  return (
    <div className={s.create_container}>
      <Create className={s.create_mask}/>
    </div>
  );
};
