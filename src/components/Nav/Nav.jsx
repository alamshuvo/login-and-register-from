import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navlink = (
    <>
      <li>
        <NavLink to={"/"} >Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/regester"}>Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 border border-sky-200  rounded-box w-52"
          >
            {navlink}
            <div className="w-full mt-4">
              <a className="btn hover:bg-sky-500 hover:text-white">Button</a>
            </div>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Connection
          <span className="text-2xl text-purple-400 font-bold">with us</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end lg:flex hidden">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Nav;
