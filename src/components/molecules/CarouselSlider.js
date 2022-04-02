import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./../../assets/css/templates/components/carousel.scss";

import screenshot1 from "./../../assets/img/ss1.png";
import screenshot2 from "./../../assets/img/ss2.png";
import screenshot3 from "./../../assets/img/ss3.png";
import screenshot4 from "./../../assets/img/ss4.png";

export class CarouselSlider extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={775}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <h1>Los gusanos en la zona de una serpiente resbaladiza</h1>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <h1>Come todo lo que puedas y corre!</h1>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="slide-container">
              <div className="flex-wrapper margin-auto">
                <h1>Acción y diversion con los gusanos del espacio</h1>
              </div>
            </div>
          </Slide>
        </Slider>
        <div className="slider-one-arrow-container">
          <ButtonBack>&nbsp;</ButtonBack>
          <ButtonNext>&nbsp;</ButtonNext>
        </div>
      </CarouselProvider>
    );
  }
}
export const CarouselScreenshotSlider = ({
  handleImageClickSS1,
  handleImageClickSS2,
  handleImageClickSS3,
  handleImageClickSS4,
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={775}
      naturalSlideHeight={600}
      totalSlides={4}
    >
      <Slider>
        <Slide index={0}>
          <div className="slide-container-2">
            <button className="slider-button" onClick={handleImageClickSS1}>
              <Image src={screenshot1} />
            </button>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="slide-container-2">
            <button className="slider-button" onClick={handleImageClickSS2}>
              <Image src={screenshot2} />
            </button>
          </div>
        </Slide>
        <Slide index={2}>
          <div className="slide-container-2">
            <button className="slider-button" onClick={handleImageClickSS3}>
              <Image src={screenshot3} />
            </button>
          </div>
        </Slide>
        <Slide index={3}>
          <div className="slide-container-2">
            <button className="slider-button" onClick={handleImageClickSS4}>
              <Image src={screenshot4} />
            </button>
          </div>
        </Slide>
      </Slider>
      <div className="slider-two-arrow-container">
        <ButtonBack className="mr-auto">&nbsp;</ButtonBack>
        <ButtonNext className="ml-auto">&nbsp;</ButtonNext>
      </div>
    </CarouselProvider>
  );
};
export default CarouselScreenshotSlider;
