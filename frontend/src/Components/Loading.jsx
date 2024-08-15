import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <div className="h-32 lg:w-1/4 md:w-1/2 sm:w-2/3 mt-10 shadow-lg shadow-indigo-500/40">
        <h5 className="text-xl text-black font-bold text-center">
          Wait! Data is loading.
        </h5>
        <button className="mt-5 w-full p-1 text-white text-2xl bg-indigo-500 rounded-lg">
          ...Loading
        </button>
      </div>
    </div>
  );
};

export default Loading;
