import React from "react";
import { Link } from "react-router-dom";

const ProductsCategory = ({
  mentitle,
  mendescription,
  shop,
  womentitle,
  womendescription,
}) => {
  return (
    <div className="md:flex mt-8 md:-mx-4">
      <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 bg-man-products">
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-white font-semibold">{mentitle}</h2>
            <p className="mt-2 text-gray-400">{mendescription}</p>
            <Link to="/menproducts">
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>{shop}</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-women-products">
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-white font-semibold">{womentitle}</h2>
            <p className="mt-2 text-gray-400">{womendescription}</p>
            <Link to="/womenproducts">
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>{shop}</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
