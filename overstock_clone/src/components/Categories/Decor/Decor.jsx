import React from "react";
import deccor from "./deccor.json";
const Decor = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-5  my-5">
          <div className="row my-5">
            <div className="col-lg-3 ">
              <h1 className="text py-2  bold">Home decor</h1>
              <h3 className="text">Featured Categories</h3>
              <div className="text py-2 list">
                <h6 className="text py-2">Fireplaces</h6>
                <h6 className="text py-2">Window Treatments</h6>
                <h6 className="text py-2">Mirrors</h6>
                <h6 className="text py-2">Wall Art</h6>
                <h6 className="text py-2">Wall Decor</h6>
                <h6 className="text py-2">Throw Pillows</h6>
                <h6 className="text py-2">Decorative Accessories</h6>
                <h6 className="text py-2">Accent Pieces</h6>
                <h6 className="text py-2">Lighting</h6>
                <h6 className="text py-2">Doormats</h6>
                <h6 className="text py-2">Outdoor Decor</h6>
                <h6 className="text py-2">Rugs</h6>
                <h6 className="text py-2">Slipcovers & Furniture Covers</h6>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750"
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
            <h2>Popular Home Decor Categories</h2>
          </div>
          <div className="row ">
            {deccor.popularhomedecor.map((el) => (
              <div className="col-lg-3 col-sm-6 col-md-4 my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={el.image}
                    alt="decoritems"
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
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_688x444_BG01.jpg?imwidth=1024&impolicy=medium"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
            <div className="col-lg-6 px-5">
              <div>
                <h2 className="text py-3">
                  Biophilic Design: How to Restore Nature to Your Home
                </h2>
              </div>
              <div>
                <h6 className="text ">
                  If any design trend proves that your surroundings can improve
                  your well-being, it’s biophilic interior design. This
                  life-loving approach to decorating uses natural elements to
                  restore your sense of wellness. Here are 10 easy, impactful
                  ways to refresh your interior with resemblances to the great
                  outdoors.
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
                  How to Decorate with a Monochromatic Color Scheme
                </h2>
              </div>
              <div>
                <h6 className="text ">
                  With a simple color palette leading the way, monochromatic
                  design lets you get creative with textures, designs, and
                  contrast. Take a look at three different rooms where we let
                  one color take the wheel and show you how to create a
                  monochromatic design in your own home.
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
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_DECOR_688x444_BG02.jpg?imwidth=1024&impolicy=medium"
                class="img-fluid"
                alt="Responsive"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid p-5 ">
          <div className="row">
            <h2>Shop More Home Decor</h2>
          </div>
          <div className="row ">
            {deccor.shopmoredecor.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={el.image}
                    alt="decoritem"
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

export default Decor;
