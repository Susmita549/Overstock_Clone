import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import livingfurniture from './livingfurniture.json'
const Living = () => {

  const[data,setData]=useState(livingfurniture)
  const [initData, setInitData] = useState(livingfurniture);

  const handleFilter = (e) => {
    if (e.target.value === "livingroom") {
      let res = initData.filter((item) => item.category === "livingroom");
      setData([...res]);
    }
    if (e.target.value === "homeoffice") {
      let res = initData.filter((item) => item.category === "homeoffice");
      setData([...res]);
    }
    if (e.target.value === "smallspace") {
      let res = initData.filter((item) => item.category === "smallspace");
      setData([...res]);
    }
    if (e.target.value === "patio") {
      let res = initData.filter((item) => item.category === "patio");
      setData([...res]);
    }
    if (e.target.value === "dinning") {
      let res = initData.filter((item) => item.category === "dinning");
      setData([...res]);
    }
    if (e.target.value === "kitchen") {
      let res = initData.filter((item) => item.category === "kitchen");
      setData([...res]);
    }
    if (e.target.value === "bathroom") {
      let res = initData.filter((item) => item.category === "bathroom");
      setData([...res]);
    }
    if (e.target.value === "gym") {
      let res = initData.filter((item) => item.category === "gym");
      setData([...res]);
    }
    if (e.target.value === "kids") {
      let res = initData.filter((item) => item.category === "kids");
      setData([...res]);
    }
    if (e.target.value === "mattresses") {
      let res = initData.filter((item) => item.category === "mattresses");
      setData([...res]);
    }
    if (e.target.value === "entryway") {
      let res = initData.filter((item) => item.category === "entryway");
      setData([...res]);
    }
    if (e.target.value === "bedroom") {
      let res = initData.filter((item) => item.category === "bedroom");
      setData([...res]);
    }
    
  };

  // const handlePrice = (e) => {
  // console.log("clicked");
  //   if (e.target.value === "h2l") {
  //     let newItem = [...initData];
  //     newItem.sort((a, b) => b.price - a.price);
  //     setInitData([...newItem]);
  //   } else if (e.target.value === "l2h") {
  //     let newItem = [...initData];
  //     newItem.sort((a, b) => a.price - b.price);
  //     setInitData([...newItem]);
  //   }
  // };
  
  return (
    <>
        

        <div className="container pt-5 mt-5 ">
          <br />
          <br />
          <br />
          <br />
          <select onChange={handleFilter}>
            <option value="">Filter By</option>
            <option value="livingroom">Living Room Furniture</option>
            <option value="homeoffice">HomeOffice Furniture</option>
            <option value="smallspace">Small Space Furniture</option>
            <option value="patio">Patio Furniture</option>
            <option value="dinning"> Dinning Furniture</option>
            <option value="kitchen"> Kitchen Furniture</option>
            <option value="bathroom"> Bathroom Furniture</option>
            <option value="gym"> Home Gym Furniture</option>
            <option value="kids"> Kids & Toddler Furniture</option>
            <option value="mattresses"> Mattresses</option>
            <option value="entryway"> Entryway Furniture</option>
            <option value="bedroom"> Bedroom Furniture</option>
           
          </select>

         

        </div>
        <div className="container-fluid p-5 ">
          <div className="row">
            <h2>Shop More Furniture</h2>
          </div>
          <div className="row ">
            {data.map((el) => (
              <div className="col-lg-3 col-sm-6 col-md-4 my-3" key={el.title}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={el.image}
                    alt={el.title}
                  />
                  <div className="card-body">
                    <p className="card-title">{el.title}</p>
                    <p className="card-title">Price:{el.price}</p>
                    <Link className="btn btn-primary"to={`/furniture/living/${el.id}`}>Buy Now</Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

    </>
  )
}

export default Living