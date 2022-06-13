import React from 'react'
import Deals from './Deals'
import styles from './home.module.css'
import Category from './Category';
import Brand from './Brand';
import Style from './Style';
import Carousal from './Carousal';
const Home = () => {
  return (
    <div>
        <div className="container-fluid my-5">
            <div className={styles.container}>
            <img className="img-fluid" src="https://ak1.ostkcdn.com/img/mxc/04252022-HP-A1-INTL-1400x550.jpg" alt="banner" />
            </div>
        </div>
        <div>
            <Deals/>
        </div>
        <div className="container-fluid my-5">
            <div className={styles.container}>
            <img className="img-fluid" src="https://ak1.ostkcdn.com/img/mxc/04252022_PatioFurnitureDeals_Desktop.jpg?imwidth=3840" alt="banner" />
            </div>
        </div>
        <div>
        <Category/>
        </div>
        <div><Carousal/></div>
        <div className="container-fluid my-5">
            <div className={styles.container}>
            <img className="img-fluid" src="https://ak1.ostkcdn.com/img/mxc/04252022_LivingRoomRefresh_Desktop.jpg?imwidth=1200" alt="banner" />
            </div>
        </div>
        <div><Brand/></div>
        <div><Style/></div>
    </div>
  )
}

export default Home