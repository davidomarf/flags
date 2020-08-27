import React from "react";

import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <div>Where in the world?</div>
    <div>
      <button>
        <span>O</span>Dark Mode
      </button>
    </div>
  </div>
);

export default Header;
