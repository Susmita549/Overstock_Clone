import React from "react";
import data from "./data.json";
import "./deal.css";
const Deals = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-3"><h1 className="font-weight-bold">Limited-Time Deals</h1></div>
        <div className="row my-5">
          {data.deals.map((el) => (
            <div className="col-lg-2  col-md-4 col-sm-6 p-2">
              <div className="card">
                <img src={el.image} />
              </div>
              <h6 className="text text-center py-3">{el.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
