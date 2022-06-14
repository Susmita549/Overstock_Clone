import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data.json";

const Carousal = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    focusOnSelect: true,
  };
  return (
    <>
      <div className="container-fluid p-5">
      <div className="row my-3"><h1>New Ways to Bring Home Spring</h1></div>
        
        <div className="row">
          <Slider {...settings}>
            {data.Home_spring.map((item) => (
              <div key={item.title} className="col-lg-3 p-3">
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
