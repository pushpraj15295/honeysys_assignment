import { Select } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Home.module.css";

const Filter = () => {

  return (
    <div className={styles.container_sidebar}>
      <div style={{ width: "80%", margin: "auto" }}>
         <Select></Select>
      </div>
    </div>
  );
};

export default Filter;
