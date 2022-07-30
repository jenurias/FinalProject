import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Styles/Carousel.css"

function Carosel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dogsbestlife.com/wp-content/uploads/2020/05/Groomer-bathes-corgi-scaled.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bath time fun!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.caninetofive.com/wp-content/uploads/2019/05/image-grooming5-mobile.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Fresh cut</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media-be.chewy.com/wp-content/uploads/2018/05/dog-grooming-things-you-should-never-do-brushing-x-670-440x.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Brushing</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;