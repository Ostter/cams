import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import classnames from "classnames";

import styles from "./index.module.css";

const LeftSidebar = () => {
  return (
    <nav className={styles.menu}>
      <div className={classnames(styles.button, styles.text)}>
        <NavLink activeClassName={styles.active} to={`/admin/cams`}>
          Cams
        </NavLink>
      </div>
      <div className={classnames(styles.button, styles.text)}>
        <NavLink activeClassName={styles.active} to={`/admin/users`}>
          Users
        </NavLink>
      </div>
      <div className={classnames(styles.button, styles.text)}>
        <NavLink activeClassName={styles.active} to={`/admin/services`}>
          Services
        </NavLink>
      </div>
      <div className={classnames(styles.button, styles.text)}>
        <NavLink activeClassName={styles.active} to={`/admin/settings`}>
          Settings
        </NavLink>
      </div>
      <div className={classnames(styles.button, styles.text)}>
        <NavLink activeClassName={styles.active} to={`/admin/schemes`}>
          Schemes
        </NavLink>
      </div>
      <div className={classnames(styles.button, styles.text)}>
        <NavLink activeClassName={styles.active} to={`/admin/integration`}>
          Integration
        </NavLink>
      </div>
      <div className={classnames(styles.button, styles.text)}>
        <NavLink activeClassName={styles.active} to={`/admin/log`}>
          Log
        </NavLink>
      </div>
    </nav>
  );
};

export default withRouter(LeftSidebar);
