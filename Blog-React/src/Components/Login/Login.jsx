import React from "react";
import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
function Login() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const gotoregister = () => {
    navigate("/register");
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("success true");
    setLoading(true);
    //call back end
    await axios
      .post("https://react-blog-back-p4qi.onrender.com/v1/users/sign-in", login)
      .then((res) => {
        localStorage.setItem("access_token", res.data.data.access_token);
        toast(`welcome back ${res.data.data.user.username}`);
        navigate("/home", { replace: true });
      })
      .catch((e) => {
        console.log("error");
        setLoading(true);
        toast("invalid Email or Password");
      })
      .finally(() => setLoading(false));
  };

  const handlechange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login">
        <div className="loginform">
          <form onSubmit={handlesubmit}>
            <span className="logo">
              <i className="fa-solid fa-blog"></i>
            </span>
            <span className="text-log">log in</span>
            <div className="email">
              <input
                type="email"
                placeholder="USERNAME"
                value={login.email}
                name="email"
                onChange={handlechange}
                required
              />
              <i className="louser fa-solid fa-user"></i>
              <span className="data"></span>
            </div>

            <div className="password">
              <input
                type="password"
                placeholder="PASSWORD"
                value={login.password}
                name="password"
                onChange={handlechange}
                required
              />
              <i className="louser fa-solid fa-lock"></i>
              <span className="data"></span>
            </div>

            <div className="btnlogin">
              <button disabled={loading} className="btn btn-active btn-primary btnlog">
              {!loading ? <span>Sign-in</span> : <Loader />}
              </button>

              <span>Are you havent Account </span>
              <span
                className="cursor-pointer font-bold text-black  "
                onClick={gotoregister}
              >
                Create Account
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
