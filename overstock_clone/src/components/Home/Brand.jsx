import React from "react";
import data from "./data.json";
const Brand = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>Overstock Featured Brands</h1>
        </div>
        <div className="row">
          {data.brands.map((el) => (
            <div className="col-lg-3 col-sm-6 ">
              <div class="card" >
                <img class="card-img-top" src={el.image} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{el.title}</h5>
                  <p class="card-text">
                   {el.desc}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
