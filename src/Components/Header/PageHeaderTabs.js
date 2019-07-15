import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export const PageHeaderTabs = ({ children }) => (
  <div className={styles.header}>{children}</div>
);

// Just a wrapper around NavLink
export const Tab = ({ ...rest }) => (
  <NavLink activeClassName={styles.active} className={styles.text} {...rest} />
);
