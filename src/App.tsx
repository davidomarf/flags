import React from "react";
import classnames from "classnames/bind";

import styles from "./App.module.scss";

const cx = classnames.bind(styles);

function App() {
  return <div className={cx("App")}>Hey</div>;
}

export default App;
