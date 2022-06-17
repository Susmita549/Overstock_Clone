import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const Navbar = () => {
  const dispatch = useDispatch()
   const users = useSelector(state => state.users)

  const state=useSelector((state)=>state.addItems)
  return (
    <div className="header">
      <div>
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          className="menupng"
        ></div>

        <div className="overstocklogo">
          <Link to="/">
            <img
              className="overstockIndex"
              src="https://i.postimg.cc/0yCKC2SV/svgexport-1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="class-input">
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <img src="https://i.postimg.cc/tgWqzB8p/Search-1.png" alt="" />
          </div>
        </div>
        <div id="account1" className="class-account class-account-common">
          <img src="https://i.postimg.cc/RCb3PDNz/User.png" alt="" />

          <div>
            <Link to="/register"> Account</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content">
            <div>My Account</div>
            <div>My Orders</div>
            <div>My Reviews</div>
            <div>Gift Cards</div>
            <div>Help</div>
            <Link to="/register"><div  onClick={()=>{
                  dispatch({
                    type:'LOGOUT'
                  })
                }}>Sign Out</div></Link>
          </div>
        </div>
        <div className="class-account class-account-common">
          <div>
            <img src="https://i.postimg.cc/B6TrjykP/Heart.png" alt="" />
          </div>
          <div>Lists</div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div
            className="account-dropdown-content"
            style={{ right: -100 + "%" }}
          >
            <div>Favorites</div>
            <div>Save for Later</div>
            <div>View All My Lists</div>
            <div>Find a List</div>
          </div>
        </div>
        <div className="class-account">
          <div className="Cart__Icon-Image">
          {/* <div >{state.length}</div> */}
            <Link to="/cart"><img src="https://i.postimg.cc/DyZNh8vX/Cart-Empty.png" alt="" /></Link>
            
          </div>
          <p style={{ margin: "auto" }}></p>
          <div>Cart({state.length})</div>
        </div>
      </div>
      <div className="section-div">
        <div id="account1" className="class-account class-account-common" >
          <div></div>
          <div>
            <Link to="furniture"> Furniture</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content " style={{width:"20vw",margin:"auto"}}>
            <div><a href="furniture/living">living Room Furniture</a></div>
            <div><a href="furniture/living">Dining Room Furniture</a></div>
            <div><a href="furniture/living">Bedroom Furniture</a></div>
            <div><a href="furniture/living">Patio Furniture</a></div>
            <div><a href="furniture/living">Kitchen Furniture</a></div>
            <div><a href="furniture/living">Entryway Furniture</a></div>
            <div><a href="furniture/living">Home Office Furniture</a></div>
            <div><a href="furniture/living">Small Space Furniture</a></div>
            <div><a href="furniture/living">Bathroom Furniture</a></div>
            <div><a href="furniture/living">Mattresses</a></div>
            <div><a href="furniture/living">Recreation Room</a></div>
            <div><a href="furniture/living">Kids & Toddler Furniture</a></div>
            <div><a href="furniture/living">Home Gym</a></div>
          </div>
        </div>
        
        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="rugs"> Rugs</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw",margin:"auto"}}>
          <h6  >living Room Furniture</h6>
                <div  >Dining Room Furniture</div>
                <div  >Bedroom Furniture</div>
                <div  >Patio Furniture</div>
                <div  >Kitchen Furniture</div>
                <div  >Entryway Furniture</div>
                <div  >Home Office Furniture</div>
                <div  >Small Space Furniture</div>
                <div  >Bathroom Furniture</div>
                <div  >Mattresses</div>
                <div  >Recreation Room</div>
                <div  >Kids & Toddler Furniture</div>
                <div  >Home Gym</div>
          </div>
        </div>

        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="decor"> Decor</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw",margin:"auto"}}>
                <div >Fireplaces</div>
                <div >Window Treatments</div>
                <div >Mirrors</div>
                <div >Wall Art</div>
                <div >Wall Decor</div>
                <div >Throw Pillows</div>
                <div >Decorative Accessories</div>
                <div >Accent Pieces</div>
                <div >Lighting</div>
                <div >Doormats</div>
                <div >Outdoor Decor</div>
                <div >Rugs</div>
                <div >Slipcovers & Furniture Covers</div>
          </div>
        </div>
            
        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="bedding"> Bedding</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw",margin:"auto"}}>
          <div  >living Room Furniture</div>
                <div  >Dining Room Furniture</div>
                <div  >Bedroom Furniture</div>
                <div  >Patio Furniture</div>
                <div  >Kitchen Furniture</div>
                <div  >Entryway Furniture</div>
                <div  >Home Office Furniture</div>
                <div  >Small Space Furniture</div>
                <div  >Bathroom Furniture</div>
                <div  >Mattresses</div>
                <div  >Recreation Room</div>
                <div  >Kids & Toddler Furniture</div>
                <div  >Home Gym</div>
          </div>
        </div>
        
        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="homeimprovement"> HomeImprovement</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw",margin:"auto"}}>
          <h6  >living Room Furniture</h6>
                <div  >Dining Room Furniture</div>
                <div  >Bedroom Furniture</div>
                <div  >Patio Furniture</div>
                <div  >Kitchen Furniture</div>
                <div  >Entryway Furniture</div>
                <div  >Home Office Furniture</div>
                <div  >Small Space Furniture</div>
                <div  >Bathroom Furniture</div>
                <div  >Mattresses</div>
                <div  >Recreation Room</div>
                <div  >Kids & Toddler Furniture</div>
                <div  >Home Gym</div>
          </div>
        </div>
        
        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="kitchen"> Kitchen</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw",margin:"auto"}}>
          <h6>Kitchen & Dining Furniture</h6>
                <div>Small Appliances</div>
                <div>Kitchen Storage</div>
                <div>Major Appliances</div>
                <div>Cookware & Bakeware</div>
                <div>Kitchen & Table Lines</div>
                <div>Serveware</div>
                <div>Glassware & Drinkware</div>
                <div>Outdoor Cooking</div>
                <div>Cutlery & Accessories</div>
                <div>Bar & Wine</div>
                <div>Flatware Sets</div>
                <div style={{ color: "red" }}>Shop Kitchen & Dining </div>
          </div>
        </div>
        
        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="outdoor"> Outdoor</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw",margin:"auto"}}>
          <h6>Patio Furniture</h6>
                <div>Outdoor Decor</div>
                <div>Outdoor Rugs</div>
                <div>Garden Accents</div>
                <div>Fire Pits & Chimineas</div>
                <div>Patio Umbrellas & Shades</div>
                <div>Gardening & Yard Care</div>
                <div>Outdoor Storage</div>
                <div>Swing Sets</div>
                <div>Grills & Outdoor Cooking</div>
                <div>Hot Tubs, Spas & Accessories</div>
                <div>Swimming Pools & Accessories</div>
                <div>Lawn Games</div>
                <div>Trampolines</div>
          </div>
        </div>
      
        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="lighting"> Lighting</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw"}}>
          
           <div>
           <h6>Ceiling Lighting</h6>
                <div>Lamps & Lamp Shades</div>
                <div>Kitchen & Bath Lighting</div>
                <div>Fandeliers</div>
                <div>Wall Lighting</div>
                <div>Ceiling Fans & Accessories</div>
                <div>Outdoor Lighting</div>
                <div>Specialty Lighting</div>
                <div>Kids Lighting</div>
                <div>Light Bulbs & Lighting Accessories</div>
                <div>Recreation Room</div>
                <div style={{ color: "red" }}>Shop All Lighting </div>
           </div>
           
            
          </div>
        </div>

        <div id="account1" className="class-account class-account-common">
          <div></div>

          <div>
            <Link to="kidsbaby"> Kids & Baby</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" style={{width:"20vw",margin:"auto"}}>
          <h6>Baby & Nursery</h6>
                <div>Kids & Toddler Furniture</div>
                <div>Kids Toys</div>
                <div>Kids Outdoor Play</div>
                <div>Gifts for Kids</div>
          </div>
        </div>

        
        <div id="account1" className="class-account class-account-common" >
          <div></div>

          <div>
            <Link to="more"> More</Link>
          </div>
          <div className="chevronup">
            <img src="https://i.postimg.cc/DZHpvK2K/Chevron-Up.png" alt="" />
          </div>
          <div className="account-dropdown-content" >
           
          </div>
        </div>
      </div>
    </div>
  );
};
