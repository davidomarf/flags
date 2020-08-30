import React from "react";

import { ReactComponent as MoonLight } from "../../assets/icons/moon-light.svg";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <div className={styles.header}>
    <Link to="/">Where in the world?</Link>
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
