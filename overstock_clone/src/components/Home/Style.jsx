import React from 'react'
import data from "./data.json";
const Style = () => {
  return (
    <div>
         <div className="container">
        <div className="row my-5"> 
          <h1>We've Got Your Style</h1>
        </div>
        <div className="row my-5">
          {data.style.map((el) => (
            <div className="col-lg-4 col-sm-6 ">
              <div className="card" >
                <img className="card-img-top" src={el.image} alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">{el.title}</h4>
                  <h6 className="card-text">
                   {el.desc}
                  </h6>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Style