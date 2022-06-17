import React from "react";
import kitchens from "./kitchens.json";
const Kitchen = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-5 my-5">
          <div className="row my-5">
            <div className="col-md-3 col-sm-12 ">
              <h1 className="text list1">Kitchen & Dining</h1>
              <h3 className="text list2">Featured Categories</h3>
              <div className="text  list">
                <h6>Kitchen & Dining Furniture</h6>
                <h6>Small Appliances</h6>
                <h6>Kitchen Storage</h6>
                <h6>Major Appliances</h6>
                <h6>Cookware & Bakeware</h6>
                <h6>Kitchen & Table Lines</h6>
                <h6>Serveware</h6>
                <h6>Glassware & Drinkware</h6>
                <h6>Outdoor Cooking</h6>
                <h6>Cutlery & Accessories</h6>
                <h6>Bar & Wine</h6>
                <h6>Flatware Sets</h6>
                <h6 style={{ color: "red" }}>Shop Kitchen & Dining </h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div>
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_KITCHEN_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750"
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
                    src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_KITCHEN_MM_022.png?imwidth=320&impolicy=medium?imwidth=384"
                    alt=""
                  />
                  <h4 className="text text-center list3">Small but Mighty</h4>
                  <h1 className="text text-center list4">Appliances</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*kitchens kitchendinning */}

        <div className="container-fluid px-5 ">
          <div className="row">
            <h2>Popular Kitchen & Dining Categories</h2>
          </div>
          <div className="row ">
            {kitchens.kitchendinning.map((el) => (
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
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_KITCHEN_BG1.jpg?imwidth=1024&impolicy=medium"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
            <div className="col-lg-6 px-5">
              <div>
                <h2 className="text py-3">Bar Stools Buying Guide</h2>
              </div>
              <div>
                <h6 className="text ">
                  It's often the final step in completing your home bar, and one
                  of the most important: choosing your bar stools. With so many
                  bar stool styles and heights out there, how do you choose a
                  set that will keep your guests comfortable and eager to visit
                  again and again? These tips will help you confidently choose
                  stylish bar stools for your kitchen or home bar.
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
                  Best Kitchen & Dining Sets for Small Spaces
                </h2>
              </div>
              <div>
                <h6 className="text ">
                  If you have a small kitchen or dining room, there are three
                  things to consider when choosing a table: height,
                  adaptability, and shape. Read on to learn how to choose small
                  dining tables and chairs that will make the most of your
                  limited space.
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
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_KITCHEN_BG2.jpg?imwidth=1024&impolicy=medium"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
          </div>
        </div>

        {/* {display} */}

        <div className="container-fluid p-5 ">
          <div className="row">
            <h2>Shop More Kitchen & Dining</h2>
          </div>
          <div className="row ">
            {kitchens.shopmorekitchen.map((el) => (
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

export default Kitchen;
