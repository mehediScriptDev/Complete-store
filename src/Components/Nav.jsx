import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'
import { PiSignInBold } from "react-icons/pi";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>F.A.Q</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
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

          <div className="flex items-center">
            <a className="hover:text-bidcl text-travelcl md:text-2xl" href=""><PiSignInBold /></a>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                <IoMdMenu className="md:text-2xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
