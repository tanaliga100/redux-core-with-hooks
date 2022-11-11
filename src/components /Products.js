import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/product-actions";
import { Link } from "react-router-dom";
import Search from "./Search";
import Card from "./Card";

const Products = () => {
  const listRef = useRef();

  const onHover = () => {
    listRef.current.style.opacity = "0.1";
  };
  const products = useSelector((state) => state.allProducts.products);
  const renderedLists = products?.map(
    ({
      id,
      image,
      price,
      category,
      description,
      rating,
      rate,
      title = "sample",
    }) => {
      return (
        <Link to={`/product/${id}`} key={id} className="">
          <section className="bg-white  mw5 ba b--black-10 mv4 ">
            <div className="pv2 ph3">
              <p className="f6 ttu tracked red">{title}</p>
            </div>
            <img
              src={image}
              className="w-100 db"
              style={{ height: "80px", width: "80px", margin: "auto" }}
            />
            <div className="pa3">
              <span href="#" className="link gray lh-title">
                {description.slice(0, 40).concat("...")}
              </span>
              <p className="orange db pv2">
                {price} || <time className="blue">{category}</time>
              </p>
            </div>
          </section>
        </Link>
      );
    }
  );

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
    <section>
      <article className=" br2 ">
        <div className="dt-ns dt--fixed-ns w-100">
          <div className="dtc-ns v-mid "></div>
          <Search renderedLists={renderedLists} />
        </div>
      </article>
      <Card style={{}}>{renderedLists}</Card>
    </section>
  );
};

export default Products;
