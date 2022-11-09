import React from "react";
import { useParams } from "react-router-dom";
import {
  removeProduct,
  selectedProduct,
} from "../redux/actions/product-actions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const productSelected = useSelector((state) => state.selectedProduct);
  const { id, category, description, price, image, title } = productSelected;
  const dispatch = useDispatch();
  const params = useParams();
  const fetchSingleProd = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.productID}`
      );

      const data = await response.json();
      dispatch(selectedProduct(data));
    } catch (error) {
      console.log("error", error);
    }
  };
  React.useEffect(() => {
    fetchSingleProd();
    return () => {
      dispatch(removeProduct());
    };
  }, [params.productID]);

  return (
    <>
      <h1 style={{ display: "flex" }}>ProductDetails</h1>
      <section className="details">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt="prodImage" className="prodImage" />
        <h4>{price}</h4>
        <h1>{category}</h1>
      </section>
    </>
  );
};

export default ProductDetails;
