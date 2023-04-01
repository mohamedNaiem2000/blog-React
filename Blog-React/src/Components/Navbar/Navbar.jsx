import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar(props) {
 
  const navigate = useNavigate();
  const gotoAddpost = () => {
    navigate("/AddPost");
  };

  return (
    <div className="container">
      <div className="navbar bg-base-100 pb-4 ">
        <div className="navbar-start">
          <Link to="/home" className="btn btn-ghost normal-case text-xl">
            React Blog
          </Link>
        </div>
        <div className="navbar-center">
          <div className="links">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="../../../public/images/Pngtree—user.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link onClick={gotoAddpost}>Add New Post</Link>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
