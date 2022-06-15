import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black" ,display: "block", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Carousal = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive:[
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
    ]
  };
  return (
    <>
      <div className="container-fluid p-5">
      <div className="row my-3"><h1>New Ways to Bring Home Spring</h1></div>
        
        <div className="row">
          <Slider {...settings}>
            {data.Home_spring.map((item) => (
              <div key={item.title} className="col-lg-3 col-md-4 col-sm-6 col-12 p-3">
                <div className="card" >
                  <img className="card-img-top" src={item.image} alt="Card image cap" />
                  <div className="card-body">
                    <div><h3 className="card-title ">{item.title}</h3></div>
                    <h6 className="card-text" >
                      {item.desc}
                    </h6>
                    
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousal;
