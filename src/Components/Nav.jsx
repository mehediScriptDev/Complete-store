import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { PiSignInBold } from "react-icons/pi";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { p } from "framer-motion/client";


const Nav = () => {
const {user} = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allvisa"}>All Visas</NavLink>
      </li>
      <li>
        <NavLink to={"/faq"}>F.A.Q</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex justify-between items-center bg-base-100 shadow-sm">
        <div className="">
          <img className="w-28 md:w-36" src={logo} alt="" />
        </div>

        <div className="flex gap-2 lg:gap-12 items-center">
          <div className=" hidden lg:flex font-semibold">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="flex items-center gap-2">
            {user? <p>{user?.displayName}</p> :<Link
              title="Register/Login"
              className="hover:text-bidcl text-travelcl md:text-2xl"
              to={'/login'}
            >
              <PiSignInBold />
            </Link>}
            <div className="drawer z-20 drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <IoMdMenu className="md:text-3xl hover:text-bidcl" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/allvisa"}>All Visas</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/faq"}>FAQ</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
