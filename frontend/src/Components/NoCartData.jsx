import React from "react";
import { useNavigate } from "react-router-dom";

const NoCartData = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center">
      <div className="h-32 lg:w-1/4 md:w-1/3 sm:w-2/3 mt-10 shadow-lg shadow-indigo-500/40">
        <h5 className="text-xl text-black font-bold text-center">
          No Item in the Cart
        </h5>
        <button
          className="mt-5 w-full p-1 text-white text-2xl bg-indigo-500 rounded-lg"
          onClick={handleClick}
        >
          Go To Home
        </button>
      </div>
    </div>
  );
};

export default NoCartData;
