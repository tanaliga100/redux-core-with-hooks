import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/product-actions";
import { Link } from "react-router-dom";

const Products = () => {
  const listRef = useRef();

  const onHover = () => {
    listRef.current.style.opacity = "0.1";
    console.log("runs");
  };
  const products = useSelector((state) => state.allProducts.products);
  const renderedLists = products?.map(({ id, image, price, category }) => {
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div className="lists" onMouseEnter={onHover} ref={listRef}>
            <span>
              <img src={image} />
            </span>
            <span>$ {price}</span>
            <span>{category.toUpperCase()}</span>
          </div>
        </Link>
      </div>
    );
  });
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <span style={{ padding: "2rem" }}>{renderedLists}</span>
    </>
  );
};

export default Products;
