import React from "react";
import create from "../../images/create-image.jpg";
import { ReactComponent as Create } from "../../images/create.svg";
import s from "./CreateImage.module.scss";

export const CreateImage = () => {
  return (
    <div className={s.create_container}>
      {/* <img className={s.create_image} src={create} alt="" /> */}
      <Create className={s.create_mask}/>
    </div>
  );
};
