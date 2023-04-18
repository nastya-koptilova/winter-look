import React from "react";
import { motion } from 'framer-motion';
import "./CarouselStyles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstSliderPhoto from "../../images/slider-foot.jpg";
import secondSliderPhoto from "../../images/slider-shirt.jpg";
import thirdSliderPhoto from "../../images/slider-forest.jpg";
import fourthSliderPhoto from "../../images/slider-girl.jpg";
import fifthSliderPhoto from "../../images/slider-shoes.jpg";
import Slider from "react-slick";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { Slide } from "./Carousel.Styled";

const sliderImages = [
  { image: firstSliderPhoto, id: "1" },
  { image: secondSliderPhoto, id: "2" },
  { image: thirdSliderPhoto, id: "3" },
  { image: fourthSliderPhoto, id: "4" },
  { image: fifthSliderPhoto, id: "5" },
];

export const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {sliderImages.map(({ image, id }) => {
          return <Slide image={image} key={id} />;
        })}
      </Slider>
    </div>
  );
};
