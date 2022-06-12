import React from 'react'
import data from "./data.json";
import styles from './category.module.css'
const Category = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-3">
          <h1>Fresh Finds In Each Category</h1>
        </div>
        <div className="row">
          {data.category.map((el)=>(
            <div className='col-lg-2 col-md-4 col-sm-6 p-2 my-2'>
             <div className="card"><img src={el.image} alt="category{el.title}" /></div>
             <p className={styles.text}>{el.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category