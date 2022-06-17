import React from "react";
import outdor from "./outdor.json";
const Outdoor = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-5 my-5">
          <div className="row my-5">
            <div className="col-md-3 col-sm-12 ">
              <h1 className="text list1">Furniture</h1>
              <h3 className="text list2">Featured Categories</h3>
              <div className="text  list">
                <h6>Patio Furniture</h6>
                <h6>Outdoor Decor</h6>
                <h6>Outdoor Rugs</h6>
                <h6>Garden Accents</h6>
                <h6>Fire Pits & Chimineas</h6>
                <h6>Patio Umbrellas & Shades</h6>
                <h6>Gardening & Yard Care</h6>
                <h6>Outdoor Storage</h6>
                <h6>Swing Sets</h6>
                <h6>Grills & Outdoor Cooking</h6>
                <h6>Hot Tubs, Spas & Accessories</h6>
                <h6>Swimming Pools & Accessories</h6>
                <h6>Lawn Games</h6>
                <h6>Trampolines</h6>
                <h6 style={{color:"red"}}>Shop All Outdoor</h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div>
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750"
                  class="img-fluid"
                  alt="furniture"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-12 ">
              <div className="row  " style={{ backgroundColor: "white" }}>
                <div className="col-md-12 col-sm-6  mt-4   ">
                  <h4 className="text text-center list3">Need Inspiration?</h4>
                  <h1 className="text text-center list4">Virtual Furniture</h1>
                  <img
                    className="img-fluid"
                    src="https://ak1.ostkcdn.com/img/mxc/2022-04-12-temporary-virtual-showcase.png?imwidth=384"
                    alt=""
                  />
                </div>
                <div className="col-md-12 col-sm-6  mt-4   ">
                  <img
                    className="img-fluid"
                    src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_MM_022.png?imwidth=320&impolicy=medium?imwidth=384"
                    alt=""
                  />
                  <h4 className="text text-center list3">Gorgeous</h4>
                  <h1 className="text text-center list4">Gazebos & Pergolas</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*outdor popularoutdoor */}

        <div className="container-fluid px-5 ">
          <div className="row">
            <h2>Popular Outdoor Categories</h2>
          </div>
          <div className="row ">
            {outdor.popularoutdoor.map((el) => (
              <div className="col-lg-3 col-sm-6 col-md-4 my-3" key={el.title}>
                <div className="card">
                  <img className="card-img-top" src={el.image} alt={el.title} />
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* {display} */}

        <div className="container-fluid  p-3">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_688x444_BG01.png?imwidth=1024&impolicy=medium"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
            <div className="col-lg-6 px-5">
              <div>
                <h2 className="text py-3">5 Small Outdoor Patio Ideas</h2>
              </div>
              <div>
                <h6 className="text ">
                  Having any sort of outdoor space, even a modest one, is a
                  welcome retreat as the temps start to warm up from winter. To
                  get the most from your patio, thoughtful furniture arrangement
                  and decor choices can make all the difference. Here are five
                  ideas for outdoor patio layouts to help you get started.
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
                <h2 className="text py-3">
                  Everything You Need to Know About Outdoor Rugs
                </h2>
              </div>
              <div>
                <h6 className="text ">
                  When you’re dreaming of longer days and warmer temperatures,
                  capture all of your optimism and excitement for the summer
                  season in a vibrant outdoor rug. The best outdoor rugs create
                  flow between your spaces and soften the hardy surfaces of your
                  home’s exterior. Use these helpful tips to get the most from
                  your outdoor area rugs, no matter what time of year it is.
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
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_OUTDOOR_688x444_BG02.png?imwidth=1024&impolicy=medium"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
          </div>
        </div>

        {/* {display} */}

        <div className="container-fluid p-5 ">
          <div className="row">
            <h2>Shop More Outdoor</h2>
          </div>
          <div className="row ">
            {outdor.shopmoreoutdoor.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-3" key={el.title}>
                <div className="card">
                  <img className="card-img-top" src={el.image} alt={el.title} />
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

export default Outdoor;
