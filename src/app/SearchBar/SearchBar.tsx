import React, { useCallback, ChangeEvent } from "react";

import { ReactComponent as Lens } from "../../assets/icons/lens.svg";

import style from "./SearchBar.module.scss";

type SearchBarProps = {
  searchFor: (e: string) => void;
};

const SearchBar = ({ searchFor }: SearchBarProps) => {
  const search = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      searchFor(query);
    },
    [searchFor]
  );

  return (
    <div className={style.searchBar}>
      <div className={style.field}>
        <span>
          <Lens />
        </span>
        <input placeholder="Search for a country..." onChange={search}></input>
      </div>
    </div>
  );
};

export default SearchBar;
