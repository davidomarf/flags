import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";

import style from "./BackButton.module.scss";

const BackButton = () => (
  <Link to="/" className={style.button}>
    <span>
      <ArrowLeft />
    </span>
    Back
  </Link>
);

export default BackButton;
