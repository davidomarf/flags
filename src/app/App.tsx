import React from "react";
import classnames from "classnames/bind";

import styles from "./App.module.scss";
import Header from "./Header/Header";

const cx = classnames.bind(styles);

const App = () => (
  <div className={cx("App")}>
    <Header />
  </div>
);

export default App;
