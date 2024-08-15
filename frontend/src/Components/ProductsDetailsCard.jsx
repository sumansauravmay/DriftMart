import React from "react";

const ProductsDetailsCard = ({
  image,
  title,
  description,
  rating,
  count,
  price,
  cartData,
}) => {
  return (
    <div className="md:flex mt-8 md:-mx-4 lg:mx-32 shadow-md shadow-indigo-500/40">
      <div className="w-full h-92 md:mx-4 rounded-md bg-cover bg-center md:w-1/2">
        <div className="flex items-center h-full">
          <div className="px-10 max-w-xl">
            <img className="h-[32rem]" src={image} alt="pic" />
          </div>
        </div>
      </div>

      <div className="w-full h-92 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
        <div className="bg-opacity-50 flex items-center h-full">
          <div className="px-5 max-w-xl mb-2">
            <h2 className="text-3xl text-black font-semibold">{title}</h2>
            <p className="mt-2 text-black text-xl">{description}</p>

            <div className="flex space-x-1 text-xl">
              <h5 className="mt-2 text-black">Rating: </h5>
              <h5 className="mt-2 text-black font-semibold">{rating}</h5>
              <p className="mt-2 text-black font-semibold">({count})</p>
            </div>

            <p className="mt-2 text-black text-2xl">Price: {price} ₹</p>
            <button
              className="mt-2 p-1 text-white text-2xl bg-indigo-500 rounded-lg"
              onClick={cartData}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsCard;
