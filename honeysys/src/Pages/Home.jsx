import React, { useState } from "react";
import { useEffect } from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import products from "../db.json";
import styles from "../Styles/Home.module.css";
const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(products);
  }, []);

  // console.log("product",product);

  return (
    <>
      <div className={styles.container}>
        <Filter product={product} />
        <ProductList product={product} />
      </div>
    </>
  );
};

export default Home;
