import React from "react";
import furniture from "./furnituree.json";
import "./Furniture.css";
const Furniture = () => {
  return (
    <>
      <div>
        <div className="container ">
          <div className="row my-5">
            <div className="col-lg-3 ">
              <h2 className="text">Featured Categories</h2>
              <div className="text py-3 list">
                <h6 className="text py-2" >living Room Furniture</h6>
                <h6 className="text py-2" >Dining Room Furniture</h6>
                <h6 className="text py-2" >Bedroom Furniture</h6>
                <h6 className="text py-2" >Patio Furniture</h6>
                <h6 className="text py-2" >Kitchen Furniture</h6>
                <h6 className="text py-2" >Entryway Furniture</h6>
                <h6 className="text py-2" >Home Office Furniture</h6>
                <h6 className="text py-2" >Small Space Furniture</h6>
                <h6 className="text py-2" >Bathroom Furniture</h6>
                <h6 className="text py-2" >Mattresses</h6>
                <h6 className="text py-2" >Recreation Room</h6>
                <h6 className="text py-2" >Kids & Toddler Furniture</h6>
                <h6 className="text py-2" >Home Gym</h6>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750"
                  class="img-fluid"
                  alt="furniture"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row ">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <img
                    src="https://ak1.ostkcdn.com/img/mxc/2022-04-12-temporary-virtual-showcase.png?imwidth=384"
                    alt=""
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  <img
                    src="https://ak1.ostkcdn.com/img/mxc/2022-04-12-temporary-virtual-showcase.png?imwidth=384"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid p-5 ">
          <div className="row">
            <h2>Popular Furniture Categories</h2>
          </div>
          <div className="row ">
            {furniture.popular_furniture.map((el) => (
              <div className="col-lg-3 col-sm-6 col-md-4 my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={el.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container-fluid  p-3">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_688x444_BG01.jpg?imwidth=1024&impolicy=medium"
                class="img-fluid"
                alt="Responsive"
              />
            </div>
            <div className="col-lg-6 px-5">
              <div>
                <h2 className="text py-3">
                  How to Decorate With a Chaise Lounge
                </h2>
              </div>
              <div>
                <h6 className="text ">
                  Self-indulgent and relaxing chaise lounge chairs embody the
                  mantra, treat yourself! You may picture old Hollywood glamor
                  or Victorian parlors when you think of chaise lounges. But
                  these luxurious long chairs can neatly fit into any decor
                  scheme, be it mid-mod or farmhouse chic. Whether for the foot
                  of your bed or a reading nook in the living room, these tips
                  will help you find a trendy chaise lounge for your home.
                </h6>
              </div>
              <div className="py-3">
                <button type="button" className="btn btn-outline-dark">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid  p-3">
          <div className="row">
            <div className="col-lg-6 px-5">
              <div>
                <h2 className="text py-3">Home Office Ideas on a Budget</h2>
              </div>
              <div>
                <h6 className="text ">
                  Many of us are working from home for the foreseeable future -
                  and looking to keep some cash in reserve. The privacy, the
                  productivity…we’re all missing a few perks of the professional
                  workspace. These office decor tips will help you set up a
                  productive home office without breaking the bank
                </h6>
              </div>
              <div className="py-3">
                <button type="button" className="btn btn-outline-dark">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-lg-6 py-3">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_FURNI_688x444_BG02.jpg?imwidth=1024&impolicy=medium"
                class="img-fluid"
                alt="Responsive"
              />
            </div>
          </div>
        </div>
        
        <div className="container-fluid p-5 ">
          <div className="row">
            <h2>Shop More Furniture</h2>
          </div>
          <div className="row ">
            {furniture.shopmore_furniture.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={el.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Furniture;
