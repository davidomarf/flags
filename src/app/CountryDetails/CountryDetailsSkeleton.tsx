import React from "react";
import Skeleton from "../shared/Skeleton/Skeleton";
import styles from "./CountryDetails.module.scss";

const CountryDetailsSkeleton = () => (
  <div className={`${styles.container} ${styles.skeleton}`}>
    <div className={styles.image}></div>
    <div className={styles.info}>
      <Skeleton className={styles.name} />
      <div className={styles.details}>
        <div className={styles.column}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
        <div className={styles.column}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <Skeleton className={styles.bottomText} />
    </div>
  </div>
);

export default CountryDetailsSkeleton;
