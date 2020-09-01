import React, { useCallback, useState, SyntheticEvent } from "react";

import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/x.svg";

import styles from "./Filter.module.scss";

const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState<string>();

  const toggleOpen = useCallback(() => {
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

  const handleClose = useCallback(
    (event: SyntheticEvent) => {
      event.stopPropagation();
      setOption((null as unknown) as string);
    },
    [setOption]
  );

  return (
    <div className={styles.container}>
      <div className={styles.filter} onClick={toggleOpen}>
        <div className={styles.content}>
          {option ? option : "Filter by Region"}
        </div>
        <div className={styles.icon}>
          <span>
            {option && !isOpen ? (
              <CloseIcon onClick={handleClose} />
            ) : (
              <ChevronIcon
                style={isOpen ? { transform: "rotate(180deg)" } : {}}
              />
            )}
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
