import React, { useState, useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { ReactComponent as MoonLight } from "../../assets/icons/moon-light.svg";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const DARK_CLASS = "dark";

const Header = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)"
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );

  const [isDark, setIsDark] = useState(systemPrefersDark);

  const toggleDark = useCallback(() => {
    setIsDark((e) => !e);
  }, [setIsDark]);

  useEffect(() => {
    console.log(isDark);
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  return (
    <div className={styles.header}>
      <Link to="/">Where in the world?</Link>
      <div>
        <button onClick={toggleDark}>
          <span>
            <MoonLight />
          </span>
          Dark Mode
        </button>
      </div>
    </div>
  );
};
export default Header;
