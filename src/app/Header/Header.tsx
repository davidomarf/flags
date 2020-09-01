import React, { useCallback, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import createPersistedState from "use-persisted-state";
import { ReactComponent as Moon } from "../../assets/icons/moon.svg";
import { ReactComponent as Sun } from "../../assets/icons/sun.svg";
import styles from "./Header.module.scss";

const DARK_CLASS = "dark";

const useIsDarkState = createPersistedState("isDark");

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

  const [isDark, setIsDark] = useIsDarkState(systemPrefersDark);

  const toggleDark = useCallback(() => {
    setIsDark((e) => !e);
  }, [setIsDark]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Link to="/">Where in the world?</Link>
        <div>
          <button onClick={toggleDark}>
            <span>{isDark ? <Sun /> : <Moon />}</span>
            {isDark ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
