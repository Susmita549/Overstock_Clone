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
    if (e.target.value === "cofee") {
      let res = initData.filter((item) => item.category === "cofee");
      setData([...res]);
    }
    if (e.target.value === "beanbag") {
      let res = initData.filter((item) => item.category === "beanbag");
      setData([...res]);
    }
    if (e.target.value === "sofa") {
      let res = initData.filter((item) => item.category === "sofa");
      setData([...res]);
    }
    
  };

  const handlePrice = (e) => {
  console.log("clicked");
    if (e.target.value === "h2l") {
      let newItem = [...initData];
      newItem.sort((a, b) => b.price - a.price);
      setInitData([...newItem]);
    } else if (e.target.value === "l2h") {
      let newItem = [...initData];
      newItem.sort((a, b) => a.price - b.price);
      setInitData([...newItem]);
    }
  };
  
  return (
    <>
        

        <div className="container pt-5 mt-5 ">
          <br />
          <br />
          <br />
          <br />
          <select onChange={handleFilter}>
            <option value="">Filter By</option>
            <option value="livingroom">Living Room Chairs</option>
            <option value="coffee">Coffee,console & End Table</option>
            <option value="beanbag">Bean Bags</option>
            <option value="sofa">Sofa & couches</option>
          </select>

          <select onChange={handlePrice}>
            <option value="h2l">HIGH</option>
            <option value="l2h">LOW</option>
          
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