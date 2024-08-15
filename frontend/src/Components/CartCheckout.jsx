import React from "react";

const CartCheckout = ({ totalAmount, amount, delivery, message, handlechekcout }) => {
  return (
    <div className="flex justify-center">
      <div className="md:flex mt-8 md:-mx-4 w-1/2 shadow-lg shadow-indigo-500/40">
        <div className="bg-opacity-50 h-full m-auto">
          <div className="mt-5 px-10 max-w-xl flex justify-between">
            <h5 className="text-xl text-black font-bold">Total Price: </h5>
            <p className="text-black text-xl">{amount}</p>
          </div>
          <div className="mt-5 mb-5 px-10 max-w-xl flex justify-between">
            <h5 className="text-xl text-black font-bold">Delivery Charge: </h5>
            <p className="text-black text-xl">{delivery}</p>
          </div>
          <p className="text-center text-blue-600 font-semibold">{message}</p>
          <hr />
          <div className="mt-5 px-10 max-w-xl flex justify-between">
            <h5 className="text-xl text-black font-bold">Total Amount: </h5>
            <p className="text-black text-xl">{totalAmount}/-</p>
          </div>
          <button className="w-full mt-6 mb-2 p-1 text-white text-2xl bg-indigo-500 rounded-lg" onClick={handlechekcout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
