import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
function Register(props) {
  const [regiester, setregister] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("success true");
    setLoading(true);
    //call back end
    await axios
      .post(
        "https://react-blog-back-p4qi.onrender.com/v1/users/sign-up",
        regiester
      )
      .then((res) => {
        localStorage.setItem("access_token", res.data.data.access_token);
        toast("Create Account succsefully");
        navigate("/home");

      })
      .catch((e) => {
        console.log("error");
        setLoading(true);
        toast("please Try again");
      }).finally(() => setLoading(false));
  };

  const handlechange = (e) => {
    setregister({ ...regiester, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login">
        <div className="loginform">
          <form onSubmit={handlesubmit}>
            <span className="logo">
              <i className="fa-solid fa-blog"></i>
            </span>
            <span className="text-log">Register</span>

            <div className="email">
              <input
               name="email"
                type="email"
                placeholder="EMAIL"
                onChange={handlechange}
                value={regiester.email}
                required
              />
              <i className="louser fa-solid fa-envelope"></i>
              <span className="data"></span>
            </div>

            <div className="email">
              <input
               name="username"
                type="text"
                placeholder="USERNAME"
                onChange={handlechange}
                value={regiester.username}
                required
              />
              <i className="louser fa-solid fa-user"></i>
              <span className="data"></span>
            </div>

            <div className="password">
              <input
              name="password"
                type="password"
                placeholder="PASSWORD"
                onChange={handlechange}
                value={regiester.password}
                required
              />
              <i className="louser fa-solid fa-lock"></i>
              <span className="data"></span>
            </div>

            <div className="password">
              <input
              name="confirm_password"
                type="password"
                placeholder="CONFIRM PASSWORD"
                onChange={handlechange}
                value={regiester.confirm_password}
                required
              />
              <i className="louser fa-solid fa-lock"></i>
              <span className="data"></span>
            </div>

            <div className="btnlogin">
            <button disabled={loading} className="btn btn-active btn-primary text-center">
              {!loading ? <span>Sign-Up</span> : <Loader />}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
