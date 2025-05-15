import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'

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
        <NavLink>Contact</NavLink>
      </li>
    </>
  );
  return (
    <section className="w-11/12 mx-auto">
      <div className="flex justify-between items-center bg-base-100 shadow-sm">
        <div className="">
            <img src={logo} alt="" />
         
        </div>

        <div className="flex gap-2 items-center">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="btn m-1">
                <IoMdMenu />
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
