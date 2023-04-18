import React from "react";
import { motion } from 'framer-motion';
import { ReactComponent as Create } from "../../images/create.svg";
import s from "./CreateImage.module.scss";

export const CreateImage = () => {
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
    }} className={s.create_container}>
      <Create className={s.create_mask}/>
    </motion.div>
  );
};
