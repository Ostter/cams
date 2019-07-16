import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import classnames from "classnames";

import styles from "./index.module.css";

const LeftSidebar = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.button}>
        <NavLink
          activeClassName={styles.active}
          className={styles.text}
          to={`/admin/cams`}
        >
          Cams
        </NavLink>
      </div>
      <div className={styles.button}>
        <NavLink
          activeClassName={styles.active}
          className={styles.text}
          to={`/admin/users`}
        >
          Users
        </NavLink>
      </div>
      <div className={styles.button}>
        <NavLink
          activeClassName={styles.active}
          className={styles.text}
          to={`/admin/services`}
        >
          Services
        </NavLink>
      </div>
      <div className={styles.button}>
        <NavLink
          activeClassName={styles.active}
          className={styles.text}
          to={`/admin/settings`}
        >
          Settings
        </NavLink>
      </div>
      <div className={styles.button}>
        <NavLink
          activeClassName={styles.active}
          className={styles.text}
          to={`/admin/schemes`}
        >
          Schemes
        </NavLink>
      </div>
      <div className={styles.button}>
        <NavLink
          activeClassName={styles.active}
          className={styles.text}
          to={`/admin/integration`}
        >
          Integration
        </NavLink>
      </div>
      <div className={styles.button}>
        <NavLink
          activeClassName={styles.active}
          className={styles.text}
          to={`/admin/log`}
        >
          Log
        </NavLink>
      </div>
    </nav>
  );
};

export default withRouter(LeftSidebar);
