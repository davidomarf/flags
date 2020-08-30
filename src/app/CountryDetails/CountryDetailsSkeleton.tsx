import React, { memo } from "react";
import styles from "./CountryDetails.module.scss";

const CountryDetailsSkeleton = () => (
  <div className={`${styles.container} ${styles.skeleton}`}>
    <div
      className={styles.image}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.075)"
      }}
    ></div>
    <div className={styles.info}>
      <div className={styles.name}>
        <Skeleton />
      </div>
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
      <div className={styles.bottomText}>
        <Skeleton />
      </div>
    </div>
  </div>
);

export default CountryDetailsSkeleton;

const Skeleton = memo(() => (
  <div
    style={{ width: `${Math.min(Math.max(Math.random(), 0.3), 0.8) * 100}%` }}
  ></div>
));
