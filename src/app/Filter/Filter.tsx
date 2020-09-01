import React, { useCallback, useState, useEffect, SyntheticEvent } from "react";

import { ReactComponent as ExpandIcon } from "../../assets/icons/expand.svg";

import styles from "./Filter.module.scss";

const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState<string>();

  const toggleOpen = useCallback(() => {
    console.log("toggling");
    setIsOpen((e) => !e);
  }, []);

  const handleOption = useCallback(
    (event: SyntheticEvent, option: string) => {
      event.stopPropagation();
      setIsOpen(false);
      setOption(option);
    },
    [setOption, setIsOpen]
  );

  useEffect(() => {
    console.log(option);
    console.log(isOpen);
  }, [option, isOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.filter} onClick={toggleOpen}>
        <div className={styles.content}>
          {option ? option : "Filter by Region"}
        </div>
        <div className={styles.icon}>
          <span>
            <ExpandIcon />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((e) => (
            <div
              className={styles.option}
              key={e}
              onClick={(event) => handleOption(event, e)}
            >
              {e}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Filter;
