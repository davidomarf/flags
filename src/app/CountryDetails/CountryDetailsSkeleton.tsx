import React from "react";
import TextSkeleton from "../shared/Skeleton/Skeleton";
import styles from "./CountryDetails.module.scss";

const CountryDetailsSkeleton = () => (
  <div className={`${styles.container} ${styles.skeleton}`}>
    <div className={styles.image}></div>
    <div className={styles.info}>
      <TextSkeleton className={styles.name} />
      <div className={styles.details}>
        <div className={styles.column}>
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
        </div>
        <div className={styles.column}>
          <TextSkeleton />
          <TextSkeleton />
          <TextSkeleton />
        </div>
      </div>
      <TextSkeleton className={styles.bottomText} />
    </div>
  </div>
);

export default CountryDetailsSkeleton;
