import React, { PureComponent, Fragment } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import layoutStyle from "./mainLayout.module.css";

import LeftSidebar from "../Views/LeftSidebar";
import Version from "../Views/Version";
import CamsLayout from "../Views/Cams/CamsLayout";

import typography from "../Styleguide/typography.module.css";
import classnames from "classnames";

class MainLayout extends PureComponent {
  render() {
    //TODO temporary
    const EmptyComponent = () => (
      <div
        style={{
          textAlign: "center",
          color: "aliceblue",
          fontSize: "100px",
          position: "relative",
          top: "50%"
        }}
      >
        I'm empty component!
      </div>
    );
    return (
      <Fragment>
        {/* Main layout container */}
        {/*
         * ------------|------------------------------------
         * left menu   |    MAIN ZONE
         *             |
         */}

        <div
          className={classnames(layoutStyle.mainRow, typography.futuraPTBook)}
        >
          <aside className={layoutStyle.leftColumn}>
            <LeftSidebar />
            <Version />
          </aside>

          <main className={layoutStyle.container}>
            <Switch>
              <Route path="/admin/cams" component={CamsLayout} />
              <Route path="/admin/users" exact component={EmptyComponent} />
              <Route path="/admin/services" exact component={EmptyComponent} />
              <Route path="/admin/settings" component={EmptyComponent} />
              <Route path="/admin/schemes" component={EmptyComponent} />
              <Route path="/admin/integration" component={EmptyComponent} />
              <Route path="/admin/log" component={EmptyComponent} />
              <Redirect to="/admin/cams" />
            </Switch>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(MainLayout);
