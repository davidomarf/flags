import React from "react";

import { ReactComponent as Expand } from "../../assets/icons/expand.svg";

import styles from "./Filter.module.scss";

const Filter = () => (
  <div className={styles.filter}>
    <div className={styles.content}>Filter by Region</div>
    <div className={styles.icon}>
      <span>
        <Expand />
      </span>
    </div>
  </div>
);

export default Filter;
