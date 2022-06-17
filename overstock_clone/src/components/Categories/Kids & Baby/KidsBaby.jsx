import React from "react";
import kids from "./kids.json";
const KidsBaby = () => {
  return (
    <>
      <div>
        <div className="container-fluid p-5 mt-5">
          <div className="row my-5">
            <div className="col-md-3 col-sm-12 ">
              <h1 className="text list1">Furniture</h1>
              <h3 className="text list2">Featured Categories</h3>
              <div className="text  list">
                <h6>Baby & Nursery</h6>
                <h6>Kids & Toddler Furniture</h6>
                <h6>Kids Toys</h6>
                <h6>Kids Outdoor Play</h6>
                <h6>Gifts for Kids</h6>
                
              </div>
            </div>
            <div className="col-md-9 col-sm-12">
              <div>
                <img
                  src="https://ak1.ostkcdn.com/img/mxc/Q3_2018_1900x950_030-KidsStore-STATIC.jpg?imwidth=1200&impolicy=custom"
                  class="img-fluid"
                  alt="furniture"
                />
              </div>
            </div>
          </div>
        </div>

        {/* kids */}

        <div className="container-fluid px-5 ">
          <div className="row" style={{fontSize:"2vw"}}>
          Kids
          </div>
          <div className="row ">
            {kids.kids.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-5" key={el.title}>
                <div className="card" style={{backgroundColor:"white"}}>
                  <img className="card-img-top" src={el.image} alt={el.title} />
                  <div className="card-body">
                    <h6 className="card-title">{el.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* baby */}
        <div className="container-fluid px-5 ">
          <div className="row" style={{fontSize:"2vw"}}>
          Baby
          </div>
          <div className="row ">
            {kids.baby.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-5" key={el.title}>
                <div className="card" style={{backgroundColor:"white"}}>
                  <img className="card-img-top" src={el.image} alt={el.title} />
                  <div className="card-body">
                    <h6 className="card-title">{el.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* toprated */}
        <div className="container-fluid px-5 ">
          <div className="row" style={{fontSize:"2vw"}}>
          Top Rated Products
          </div>
          <div className="row ">
            {kids.toprated.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-5" key={el.title}>
                <div className="card" style={{backgroundColor:"white"}}>
                  <img className="card-img-top" src={el.image} alt={el.title} />
                  <div className="card-body">
                    <h6 className="card-title">{el.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* kidsoutdoor */}
        <div className="container-fluid px-5 ">
          <div className="row" style={{fontSize:"2vw"}}>
          Kids Outdoor
          </div>
          <div className="row ">
            {kids.kidsoutdoor.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-5" key={el.title}>
                <div className="card" style={{backgroundColor:"white"}}>
                  <img className="card-img-top" src={el.image} alt={el.title} />
                  <div className="card-body">
                    <h6 className="card-title">{el.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tips */}
        <div className="container-fluid px-5 ">
          <div className="row" style={{fontSize:"2vw"}}>
          Tips & Inspirations
          </div>
          <div className="row ">
            {kids.inspiration.map((el) => (
              <div className="col-lg-2 col-sm-6 col-md-4 my-5" key={el.title}>
                <div className="card" style={{backgroundColor:"white"}}>
                  <img className="card-img-top" src={el.image} alt={el.title} />
                  <div className="card-body">
                    <h6 className="card-title">{el.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end */}
        
      </div>
    </>
  );
};

export default KidsBaby;
