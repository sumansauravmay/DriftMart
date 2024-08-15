import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cart } from "../../Redux/CartReducer/action";
import Loading from "../../Components/Loading";
import { Helmet } from "react-helmet";
import ProductsDetailsCard from "../../Components/ProductsDetailsCard";

const ProductsDetails = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { product_id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://myindiaa-deployement.onrender.com/products/${product_id}`)
      .then((res) => {
        setProductDetails(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [product_id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>Product Details Page</title>
        <meta name="description" content="Product Details Page description" />
      </Helmet>
      <ProductsDetailsCard
        image={productDetails.image}
        title={productDetails.title}
        description={productDetails.description}
        price={productDetails.price}
        rating={productDetails.rating?.rate}
        count={productDetails.rating?.count}
        cartData={() => dispatch(cart(productDetails))}
      />
    </>
  );
};

export default ProductsDetails;
