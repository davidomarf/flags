import React from "react";

import styles from "./Filter.module.scss";

const Filter = () => <div className={styles.filter}>
  <div className={styles.content}>Filter by Region</div>
  <div className={styles.icon}>
    <span> > </span>
  </div>
</div>;

export default Filter;
