import React from "react";
import light from "./light.json";
const Lighting = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-5 my-5">
          <div className="row my-5">
            <div className="col-md-3 col-sm-12 ">
              <h1 className="text list1">Lighting</h1>
              <h3 className="text list2">Featured Categories</h3>
              <div className="text  list">
                <h6>Ceiling Lighting</h6>
                <h6>Lamps & Lamp Shades</h6>
                <h6>Kitchen & Bath Lighting</h6>
                <h6>Fandeliers</h6>
                <h6>Wall Lighting</h6>
                <h6>Ceiling Fans & Accessories</h6>
                <h6>Outdoor Lighting</h6>
                <h6>Specialty Lighting</h6>
                <h6>Kids Lighting</h6>
                <h6>Light Bulbs & Lighting Accessories</h6>
                <h6>Recreation Room</h6>
                <h6 style={{ color: "red" }}>Shop All Lighting </h6>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div>
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_LIGHTING_Hero_Desktop.jpg?imwidth=680&impolicy=medium?imwidth=750"
                  class="img-fluid"
                  alt="furniture"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-12 ">
              <div className="row  " style={{ backgroundColor: "white" }}>
                <div className="col-md-12 col-sm-6  mt-4   ">
                  <h4 className="text text-center list3">Chic & Modern</h4>
                  <h1 className="text text-center list4">Table Lamp Sets</h1>
                  <img
                    className="img-fluid"
                    src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_LIGHTING_MM_012.png?imwidth=320&impolicy=medium?imwidth=384"
                    alt=""
                  />
                </div>
                <div className="col-md-12 col-sm-6  mt-4   ">
                  <img
                    className="img-fluid"
                    src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_LIGHTING_MM_022.png?imwidth=320&impolicy=medium?imwidth=384"
                    alt=""
                  />
                  <h4 className="text text-center list3">Patio Cooling:</h4>
                  <h1 className="text text-center list4">
                    Outdoor Ceiling Fans
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*light poularlight */}

        <div className="container-fluid px-5 ">
          <div className="row">
            <h2>Popular Lighting Categories</h2>
          </div>
          <div className="row ">
            {light.poularlight.map((el) => (
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
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_LIGHTING_BG_1.jpg?imwidth=1024&impolicy=medium"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
            <div className="col-lg-6 px-5">
              <div>
                <h2 className="text py-3">
                  How to Add Dappled Light to Your Home
                </h2>
              </div>
              <div>
                <h6 className="text ">
                  Imagine laying under a tree on a warm sunny day. You might
                  find that your body immediately relaxes and your mind feels at
                  peace under this dappled light. Aside from the relaxed vibes,
                  there are also plenty of design benefits to working with
                  dappled lighting. Here’s how to achieve the dappled lighting
                  effect in your home.
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
                  Cool Lighting Styles to Brighten Your Home
                </h2>
              </div>
              <div>
                <h6 className="text ">
                  As you cross the threshold and flick the switch, does your
                  home's lighting style fall flat? Don't worry. There's a light
                  in the dark. From the homey glow of a rustic chandelier to the
                  sleek suspension of modern pendants, you can find stylish
                  lighting fixtures for a purposeful reflection of your story.
                  Here's how to recreate popular lighting styles for a
                  gorgeously lit home that deserves to be seen.
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
                src="https://ak1.ostkcdn.com/img/mxc/03242022_SPRING2022_LIGHTING_trendy_lighting_styles2.jpg?imwidth=1024&impolicy=medium"
                className="img-fluid"
                alt="Responsive"
              />
            </div>
          </div>
        </div>

        {/* {display} */}

        <div className="container-fluid p-5 ">
          <div className="row">
            <h2>Shop More Lighting</h2>
          </div>
          <div className="row ">
            {light.shopmorelight.map((el) => (
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

export default Lighting;
