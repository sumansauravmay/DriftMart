import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cart,
  deletecart,
  cartDataReset,
  updatecartvalue,
} from "../../Redux/CartReducer/action";
import CartCard from "../../Components/CartCard";
import Loading from "../../Components/Loading";
import CartCheckout from "../../Components/CartCheckout";
import NoCartData from "../../Components/NoCartData";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoadingCart from "../../Components/LoadingCart";
import { useToast } from "@chakra-ui/react";

const Cart = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartdata = useSelector((store) => store.cartReducer.cart);
  const loading = useSelector((state) => state.cartReducer.loading);

  useEffect(() => {
    const fetchCartData = async () => {
      await dispatch(cart());
    };
    fetchCartData();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletecart(id));
  };

  const calculateAmount = () => {
    let price = cartdata.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    localStorage.setItem("itemvalue", JSON.stringify(price));
    return price;
  };

  const calculateDeliveryCharges = () => {
    if (calculateAmount() >= 1000) {
      return "Free!";
    } else {
      return 100;
    }
  };

  let x;
  const calculateTotalAmount = () => {
    if (calculateAmount() >= 1000) {
      x = calculateAmount();
    } else {
      x = calculateAmount() + calculateDeliveryCharges();
    }
    // localStorage.setItem("cartamount", JSON.stringify(x));
    return x;
  };

  const handleMessage = () => {
    if (calculateAmount() >= 1000) {
      return "Congratulations, You got free delivery!";
    } else {
      let y = 1000 - calculateAmount();
      return `Add ${y} more to get free delivery!`;
    }
  };

  const handlechekcout = () => {
    let username = JSON.parse(localStorage.getItem("username")) || "";
    if (username) {
      navigate("/checkout");
      localStorage.removeItem("CartAmount");
    } else {
      toast({
        title: "Login First.",
        description: "Login, if you want to place order.",
        status: "warning",
        position: "top",
        duration: 6000,
        isClosable: true,
      });
      navigate("/login");
    }
  };

  if (loading) {
    return <LoadingCart />;
  }

  return (
    <>
      <Helmet>
        <title>Cart Page</title>
        <meta name="description" content="All Cart Data" />
      </Helmet>

      {cartdata.length > 0 ? (
        <>
          {cartdata.map((item) => (
            <CartCard
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price * item.quantity}
              quantity={item.quantity}
              handleDecDisable={item.quantity === 1}
              handleIncDisable={item.quantity === 5}
              handleDelete={() => handleDelete(item.id)}
              handleInc={() =>
                dispatch(
                  updatecartvalue(item.id, { quantity: item.quantity + 1 })
                )
              }
              handleDec={() =>
                dispatch(
                  updatecartvalue(item.id, { quantity: item.quantity - 1 })
                )
              }
            />
          ))}
          <CartCheckout
            amount={calculateAmount()}
            delivery={calculateDeliveryCharges()}
            totalAmount={calculateTotalAmount()}
            message={handleMessage()}
            handlechekcout={handlechekcout}
          />
        </>
      ) : (
        <NoCartData />
      )}
    </>
  );
};

export default Cart;
