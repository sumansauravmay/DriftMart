import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartdata = useSelector((store) => store.cartReducer.cart);
  // console.log("cart In Navbar", cartdata);

  let username = JSON.parse(localStorage.getItem("username")) || "";
  // console.log("name", username);

  const handleloginfunc = () => {
    if (username.length > 0) {
      localStorage.removeItem("username");
      alert("Logout done!");
      window.location.reload();
    } else {
      navigate("/login");
    }
  };

  const handlesignupfunc = () => {
    if (username.length > 0) {
      window.location.reload();
    } else {
      navigate("/register");
    }
  };

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link to="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>MYIndiaa</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <Link
                      to="/"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      Products
                    </Link>

                    <div
                      onClick={handlesignupfunc}
                      // to="/register"
                      className="cursor-pointer w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {username ? username : "Signup"}
                    </div>

                    <div
                      onClick={handleloginfunc}
                      // to="/login"
                      className="cursor-pointer w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {username ? "Logout" : "Login"}
                    </div>

                    <Link
                      to="/cart"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Go to Cart ({cartdata.length > 0 ? cartdata.length : 0})
                     
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link
                to="/"
                className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                Product
              </Link>
            </li>

            <li className="mr-3 nav__item">
              <div
                onClick={handlesignupfunc}
                // to="/register"
                className="cursor-pointer inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                {username ? username : "Signup"}
              </div>
            </li>

            <li className="mr-3 nav__item">
              <div
                onClick={handleloginfunc}
                className="cursor-pointer inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                {username ? "Logout" : "Login"}
              </div>
            </li>
          </ul>
        </div>

        <div className="hidden m-3 space-x-4 lg:flex nav__item">
          <Link
            to="/cart"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5 flex space-x-1"
          >
            <FaShoppingCart />
            <p className="-mt-1">({cartdata.length > 0 ? cartdata.length : 0})</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
