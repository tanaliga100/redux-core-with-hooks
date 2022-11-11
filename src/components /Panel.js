import React from "react";

const Panel = () => {
  return (
    <div
      style={{
        padding: "2rem",
        height: "100vh",
        color: "crimson",
        margin: "auto",
        width: "auto",
      }}
    >
      <section
        className="tracked"
        style={{
          padding: "0 3rem",
          color: "rgba(255, 68, 0, 0.925)",
        }}
      >
        <h2 className="tracked">Categories</h2>
        <select name="" id="">
          <option value="">Men's Wear</option>
          <option value="">Women's Wear</option>
          <option value="">Kids</option>
        </select>
      </section>
      <section
        className="tracked"
        style={{
          display: "grid",
          gap: "1rem",
          color: "rgba(255, 68, 0, 0.925)",
        }}
      >
        <h2 className="tracked">Featured</h2>
        <label htmlFor="" style={{ color: "crimson" }}>
          Pants
          <input style={{ margin: "0 1rem" }} type="checkbox" name="" id="" />
        </label>
        <label htmlFor="" style={{ color: "crimson" }}>
          Shirts
          <input style={{ margin: "0 1rem" }} type="checkbox" name="" id="" />
        </label>{" "}
        <label htmlFor="" style={{ color: "crimson" }}>
          Jeans
          <input style={{ margin: "0 1rem" }} type="checkbox" name="" id="" />
        </label>{" "}
        <label htmlFor="" style={{ color: "crimson" }}>
          Shorts
          <input style={{ margin: "0 1rem" }} type="checkbox" name="" id="" />
        </label>{" "}
        <label htmlFor="" style={{ color: "crimson" }}>
          Shoes
          <input style={{ margin: "0 1rem" }} type="checkbox" name="" id="" />
        </label>
      </section>
    </div>
  );
};

export default Panel;
