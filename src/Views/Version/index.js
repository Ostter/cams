import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";

export default () => (
  <div className={classnames(styles.container, styles.text)}>
    <span>InSentry. Watch.Server.</span>
    <span>19.1.1.96, Версия данных: 96</span>
  </div>
);
