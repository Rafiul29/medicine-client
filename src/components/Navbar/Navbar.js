import { Link } from "react-router-dom";

import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

import { BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/slices/users/usersSlice";

const Navbar = () => {
  // dispatch
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  // get login user from localStorage
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const isLoggedIn = user?.token ? true : false;

  const logoutHandler = () => {
    dispatch(logoutAction());
    //reload
    window.location.reload();
  };

  return (
    <header className="w-full h-20 border-b border-cyan flex items-center bg-white/90 backdrop-blur-2xl fixed z-50 top-0 right-0 left-0 ">
      <nav className="wrapper flex justify-between items-center">
        {/* nav logo */}
        <h2 className="logo">
          <Link className="text-md font-semibold" to="/">
            Me<span className="text-cyan-500 text-xl">di</span>cine St
            <span className="text-cyan-500 text-xl">o</span>re
          </Link>
        </h2>

        {/* nav middle */}
        <div className="hidden sm:block">
          <div className="flex gap-5 ">
            <Link to="/" className="link-item ">
              Home
            </Link>
            <Link to="/medicines" className="link-item ">
              Medicine
            </Link>
            <Link to="/about" className="link-item ">
              About
            </Link>
            <Link to="/contact" className="link-item ">
              Contact
            </Link>
          </div>
        </div>

        {/* nav right */}
        <div className="hidden sm:block">
          <div className="flex gap-5 justify-center items-center space-x-3">
            {user && (
              <Link to="/cart">
                <span className="cart-icons relative">
                  <BsCart3 className="text-xl" />
                  <span className="cart-counter absolute -top-3 -right-3 text-x5 bg-orange-600 h-5 w-5 rounded-full flex items-center justify-center font-medium">
                    {cartItems.length}
                  </span>
                </span>
              </Link>
            )}

            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  className="bg-cyan-600/90 text-cyan-50 text-md px-5 py-2 rounded-md hover:bg-cyan-500/75
            shadow-lg hover:shadow-md hover:shadow-cyan-500/40 duration-700"
                >
                  sign in
                </Link>
              </>
            )}

            {isLoggedIn && (
              <div className="flex items-center space-x-3">
                {user?.userFound?.isAdmin && (
                  <Link
                    to="/admin"
                    className="inline-block rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Admin Dashboard
                  </Link>
                )}

                <Link
                  to="/customer-profile"
                  className="inline-block -m-2 p-2 mr-2 text-cyan-400 hover:text-cyan-600 font-semibold text-2xl"
                >
                  <BiUser />
                </Link>
                {/* logout */}
                <button onClick={logoutHandler} className="text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-2xl"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* open and close button */}
        <div
          className="md:hidden text-3xl z-[99] cursor-pointer duration-700"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <span>
              <AiOutlineClose />
            </span>
          ) : (
            <span>
              <AiOutlineMenu />
            </span>
          )}
        </div>
      </nav>

      {/*mobile navbar*/}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`md:hidden  absolute w-full h-[23rem] bottom-0 left-0 right-0 top-[5rem] pl-8 duration-500 bg-cyan-400  py-10  z-[20] shadow-md  shadow-cyan-300/80 ${
          open ? "left-0" : "left-[-120%]"
        }`}
      >
        <div className="flex flex-col gap-5 z-30">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link
            className=" text-xl flex justify-start items-center gap-1"
            to="/cart"
          >
            <AiOutlineShoppingCart /> Cart
          </Link>
          <Link
            to="/"
            className="self-start text-cyan-600/90 bg-cyan-100 text-md  px-5 py-3 rounded-xl font text-xl  hover:bg-cyan-100/80 hover:shadow-md hover:shadow-white/40 duration-700"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
