import React, { PureComponent, Fragment } from "react";
import classnames from "classnames";
import layoutStyle from "mainLayout.module.css";
import List from "../Views/CamList/List";

class MainLayout extends PureComponent {
  render() {
    return (
      <Fragment>
        {/* Main layout container */}
        {/*
         * ------------|------------------------------------
         * left menu   | user menu
         *             |------------------
         *             |         MAIN ZONE
         *             |
         */}

        <div className={layoutStyle.mainRow}>
          <div className={layoutStyle.leftColumn}>
            <LeftMenu />
          </div>

          <div className={layoutStyle.grow}>
            <div className={layoutStyle.container}>
              <CamMenu />
              <List />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainLayout;
