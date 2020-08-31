import React from "react";

import styles from "./Countries.module.scss";
import TextSkeleton from "../shared/Skeleton/Skeleton";

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const CountriesSkeleton = () => (
  <div className={`${styles.container} ${styles.skeleton}`}>
    {mock.map(() => (
      <div className={styles.country}>
        <div className={styles.fullHeightContainer}>
          <div className={styles.image} />
          <div className={styles.info}>
            <TextSkeleton className={styles.name} />
            <div className={styles.details}>
              <TextSkeleton />
              <TextSkeleton />
              <TextSkeleton />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default CountriesSkeleton;
