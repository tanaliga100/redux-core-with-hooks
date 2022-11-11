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
      <section className="tc bg-light-gree dib br3 pa3 ma2 grow bw2 shadow-5">
        <div className="f3 f2-m f1-l fw2 black-90 mv3">{title}</div>
        <p className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy ">{description}</p>
        <img src={image} alt="prodImage" className="br-100 h3 w3 dib" />
        <h4>{price}</h4>
        <h1 className="f6 lh-copy measure-narrow">{category}</h1>
      </section>
    </>
  );
};

export default ProductDetails;
