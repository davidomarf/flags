import React, { useCallback, useState, SyntheticEvent } from "react";

import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/x.svg";

import styles from "./Filter.module.scss";

const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type FilterProps = {
  setRegion: (region: string) => void;
  region?: string;
};

const Filter = ({ setRegion, region }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState<string>(region as string);

  const toggleOpen = useCallback(() => {
    setIsOpen((e) => !e);
  }, []);

  const handleOption = useCallback(
    (event: SyntheticEvent, option: string) => {
      event.stopPropagation();
      setIsOpen(false);
      setOption(option);
      setRegion(option);
    },
    [setOption, setIsOpen, setRegion]
  );

  const handleClose = useCallback(
    (event: SyntheticEvent) => {
      event.stopPropagation();
      setOption((null as unknown) as string);
      setRegion((null as unknown) as string);
    },
    [setOption, setRegion]
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
