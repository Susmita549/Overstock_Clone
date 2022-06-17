import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email,setemail] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector(state => state.users.users);
  const login = (e) => {
    e.preventDefault()
    const payload = users.find(
      user => user.email === email && user.password === password
    );

    if (payload) {
      dispatch({
        type: "LOGIN",
        payload
      })
      console.log("success")
      alert("successfully login");
    } else {
      alert("wrong credentials");
      console.log("failed")
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={login}>
          <div class="form-group p-2">
            <label>
              <h6 className="text ">Name</h6>
            </label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>

          <div class="form-group p-2">
            <label>
              <h6 className="text ">Password</h6>
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="py-3">
            <input type="submit" value="Login" class="btn btn-success  w-100" />
             
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
