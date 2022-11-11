import React from "react";
import { useSelector } from "react-redux";

const Search = (props) => {
  const details = useSelector((state) => state.allProducts.products);
  const [search, setSearch] = React.useState("");

  //   const filterProduct = props.renderedLists.filter((prod) => {
  //     const newProd = prod.category.toLowerCase().includes(search);
  //   });
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  React.useEffect(() => {});
  return (
    <main
      style={{
        maxWidth: "80%",
        backgroundColor: "rgba(255, 68, 0, 0.925)",
        padding: "1rem",
      }}
    >
      <input
        type="search"
        placeholder="Search Product..."
        style={{
          lineHeight: "30px",
          padding: "1px 3rem",
          border: "none",
        }}
        value={search}
        onChange={handleSearch}
      />
    </main>
  );
};

export default Search;
