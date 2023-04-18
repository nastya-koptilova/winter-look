import React from "react";
import { Carousel } from "../Carousel/Carousel";
import s from "./About.module.scss";

export const About = () => {
  return (
    <section className={s.about}>
      <div className={s.about__wrapper}>
        <h2 className={s.about__title}>CHOOSE LOOKS</h2>
        <Carousel />
        <h2 className={s.about__title}>MORE ABOUT US</h2>
        <p className={s.about__descr}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim
          sed libero commodo efficitur. Suspendisse et lorem ac neque dictum
          pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium.
          Vivamus ornare mauris non ligula egestas, accumsan faucibus quam
          sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis,
          porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices
          justo in pulvinar convallis. Curabitur dapibus ut tellus eu
          condimentum. Morbi vitae convallis purus, ac finibus ipsum.
        </p>
        <p className={s.about__descr}>
          Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam
          pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu eu,
          eleifend vestibulum tortor. Duis facilisis, est et aliquam dapibus,
          urna mauris sagittis mi, et mattis metus magna vel tellus. Phasellus
          sit amet volutpat ante, ut condimentum lorem. Quisque auctor
          sollicitudin dui, vitae egestas nunc suscipit et. Nullam eu quam sem.
          Donec a nibh molestie, aliquam libero maximus, feugiat velit.
          Curabitur ac accumsan velit. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
};
