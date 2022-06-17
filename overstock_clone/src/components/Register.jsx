import React, { useState } from "react";
import Login from "./Login";

import { useDispatch } from 'react-redux';


const Register = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const dispatch = useDispatch()
  // const users = useSelector(state => state.users)
  const register=()=>{
    dispatch({
      type:'REGISTER',
      payload:{
  
        name,email,password
      }
    })
    alert("successfully registered")
  }
  return (
    <>
      <div
        className="container w-80  p-5"
        style={{ marginTop: "7vw" }}
      >
        <div>
          <h1 style={{color:"red"}}>Create Account</h1>
          
         
        </div>
        <div className="row p-2 ">
          <div className="col-lg-6 col-md-6 col-sm-12  p-3 px-5">
            <div className="container  ">
              <div>
                <h3 style={{color:"blue"}}>Register</h3>
              </div>
              <div>
                <form>
                  <div class="form-group p-2">
                    <label><h6 className="text ">Email address</h6></label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>
                  <div class="form-group p-2">
                    <label><h6 className="text ">Name</h6></label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Name"
                      onChange={(e)=>setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                  <div class="form-group p-2">
                    <label><h6 className="text ">Password</h6></label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={(e)=>setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>

                  <div className="py-3">
                  <input type="button" className="btn btn-primary  w-100" value="Register" onClick={register}/>
                    
                 
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-5 ">
          <div className="container ">
          <div className="pt-5">
                <h3 style={{color:"green"}}>Sign-in</h3>
              </div>
              <div>
                {/* {!users ? <Login/>:
                <input type="button" className="btn btn-primary  w-100" value="logout" onClick={()=>{
                  dispatch({
                    type:'LOGOUT'
                  })
                }}/>
                }
                 */}
                 <Login/>
              </div>
          </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Register;
