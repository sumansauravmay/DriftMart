const express = require("express");
const { ProductModel } = require("../models/product.model");
const productRouter = express.Router();

productRouter.post("/product/add_newproducts", async (req, res) => {
  const payload = req.body;
  try {
    let new_post = new ProductModel(payload);
    await new_post.save();
    res.status(200).send({ msg: "Product Added!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err });
  }
});

productRouter.get("/product/get_allproducts", async (req, res) => {
  try {
    let data = await ProductModel.find();
    res.status(200).send({ msg: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});

productRouter.delete("/product/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.status(200).send({ msg: "Product Deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Can not be deleted" });
  }
});

module.exports = { productRouter };
