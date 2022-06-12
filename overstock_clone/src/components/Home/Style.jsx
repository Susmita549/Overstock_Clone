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
              <div class="card" >
                <img class="card-img-top" src={el.image} alt="Card image cap" />
                <div class="card-body">
                  <h4 class="card-title">{el.title}</h4>
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
  )
}

export default Style