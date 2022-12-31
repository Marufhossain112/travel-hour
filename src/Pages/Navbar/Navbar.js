import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.jpeg";
import { MyContext } from "../../Contexts/AuthProvider/AuthProvider";
import "./Navbar.css"
const Navbar = () => {
  const { user, logOut } = useContext(MyContext);

  const navItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user?.email && (
        <>
          <li>
            <Link to="/reviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/addservice">Add Service</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  const handlelogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <Link to={"/"}>
            <div className="w-10 rounded-full">
              <img src={logo} alt="logo" />
            </div>
          </Link>
        </label>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Travel Hour
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div>
          {user?.email ? (
            <>
              <button
                onClick={handlelogOut}
                className="btn btn-outline text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="hidden lg:block">
              <Link className="mx-2 " to="/login">
                <button className="btn  btn-outline text-white">Log in</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline text-white">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
