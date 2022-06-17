import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import "./deal.css";
const Deals = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-3"><h1 className="font-weight-bold">Limited-Time Deals</h1></div>
        <div className="row my-5">
        <div className="col-lg-2  col-md-4 col-sm-6 p-2">
              <div className="card">
                <img src="https://ak1.ostkcdn.com/img/mxc/05302022_HB_DOMESTIC_1_20_off.svg?imwidth=1920" alt="" />
              </div>
              <Link to="/rugs"><h6 className="text text-center py-3">Select Rugs</h6></Link>
            </div>
            <div className="col-lg-2  col-md-4 col-sm-6 p-2">
              <div className="card">
                <img src="https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_2_pt_3.svg?imwidth=1920" alt="" />
              </div>
              <Link to="/furniture/living"><h6 className="text text-center py-3">Select Living Room Furniture</h6></Link>
            </div>
            <div className="col-lg-2  col-md-4 col-sm-6 p-2">
              <div className="card">
                <img src="https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_3_pt_3.svg?imwidth=1920" alt="" />
              </div>
              <Link to="/furniture/living"><h6 className="text text-center py-3">Select Dining Room Furniture</h6></Link>
            </div>
            <div className="col-lg-2  col-md-4 col-sm-6 p-2">
              <div className="card">
                <img src="https://ak1.ostkcdn.com/img/mxc/06102022_HB_DOMESTIC_6.svg?imwidth=1920" alt="" />
              </div>
              <Link to="/lighting"><h6 className="text text-center py-3">Select Lighting & Ceiling Fans
</h6></Link>
            </div>
            <div className="col-lg-2  col-md-4 col-sm-6 p-2">
              <div className="card">
                <img src="https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_5_pt_3.svg?imwidth=1920" alt="" />
              </div>
              <Link to="/decor"><h6 className="text text-center py-3">Select Home Decor</h6></Link>
            </div>
            <div className="col-lg-2  col-md-4 col-sm-6 p-2">
              <div className="card">
                <img src="https://ak1.ostkcdn.com/img/mxc/05302022_HB_DOMESTIC_6.svg?imwidth=1920" alt="" />
              </div>
              <Link to="/furniture"><h6 className="text text-center py-3">Save on Top-Rated Items</h6></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
