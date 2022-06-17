import React from 'react'
import Deals from './Deals'
import Category from './Category';
import Brand from './Brand';
import Style from './Style';
import Carousal from './Carousal';
import './home.css'
import LastGrid from './LastGrid';
const Home = () => {
  return (
    <div >
        <div className="container-fluid my-5 pt-5">
            <div className="container-fluid px-5 ">
            <div className="walpaper1">
            
                <img className="img-fluid" src="https://ak1.ostkcdn.com/img/mxc/05302022-HP-A1-INTL-1400x550.svg" alt="banner" />
            </div>
            </div>
        </div>
        <div>
            <Deals/>
        </div>
        <div className="container-fluid my-5">
            <div  className="walpaper2">
            <img className="img-fluid" src="https://ak1.ostkcdn.com/img/mxc/05302022_BedroomFurniture_Desktopv2.svg?imwidth=3840" alt="banner" />
            </div>
        </div>
        <div>
        <Category/>
        </div>
        <div><Carousal/></div>
        <div className="container-fluid my-5">
            <div  className="walpaper3">
            <img className="img-fluid" src="https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.svg?imwidth=1920" alt="banner" />
            </div>
        </div>
        <div><Brand/></div>
        <div><Style/></div>
        <div><LastGrid/></div>
    </div>
  )
}

export default Home