import React from "react";

import { ReactComponent as MoonLight } from "../../assets/icons/moon-light.svg";

import styles from "./Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <div>Where in the world?</div>
    <div>
      <button>
        <span>
          <MoonLight />
        </span>
        Dark Mode
      </button>
    </div>
  </div>
);

export default Header;
