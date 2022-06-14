
import "./Navbar.css";
import { Link } from 'react-router-dom';


export const Navbar = () => {

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

                <div className="overstocklogo" >
                    <Link to="/"><img
                        className="overstockIndex"
                        src="https://i.postimg.cc/0yCKC2SV/svgexport-1.png"
                        alt=""
                    /></Link>
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
               
                    <div >
                        Account
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
                        <div>Sign Out</div>
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
                <div  className="class-account">
                    <div className="Cart__Icon-Image">
                        <img src="https://i.postimg.cc/DyZNh8vX/Cart-Empty.png" alt="" />
                    </div>
                    <p style={{margin : "auto"}}></p>
                    <div>Cart</div>
                </div>
            </div>
            <div className="section-div">
                <div>
                    <Link to="furniture">Furniture</Link>
                </div>
                <div>
                    <Link to="rugs">Rugs</Link>
                </div>
                <div>
                    <Link to="decor">Decor</Link>
                </div>
                <div>
                    <Link to="bedding">Bedding</Link>
                </div>
                <div>
                    <Link to="homeimprovement">Home Improvement</Link>
                </div>
                <div>
                    <Link to="kitchen">Kitchen</Link>
                </div>
                <div>
                    <Link to="outdoor">Outdoor</Link>
                </div>
                
                <div>
                    <Link to="lighting">Lighting</Link>
                </div>
                <div>
                    <Link to="kidsbaby">Kids & Baby</Link>
                </div>
                <div>
                    <Link to="more">More</Link>
                </div>
               
                
            </div>
            
        </div>
    );
};


