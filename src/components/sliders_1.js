import { Carousel } from "react-bootstrap";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"

export default function Sliders() {
  return (
    <Carousel className="myslider">
      {/* <Carousel.Item>
        <img
          className="d-block w-100 slider_img"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider_img"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider_img"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100 slider_img"
          src={img4}
          alt="Third slide"
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider_img"
          src={img5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider_img"
          src={img6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

