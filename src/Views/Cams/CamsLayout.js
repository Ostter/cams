import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Panel from "../../Components/Panel";
import { PageHeaderTabs, Tab } from "../../Components/Header/PageHeaderTabs";
import List from "../CamList/List";

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

const AuthenticationLayout = ({ match }) => {
  return (
    <Fragment>
      <PageHeaderTabs>
        <Tab to={`${match.url}/camslist`}>Cams</Tab>
        <Tab to={`${match.url}/autodetective`}>Autodetective</Tab>
        <Tab to={`${match.url}/addcams`}>Add cam </Tab>
      </PageHeaderTabs>
      {/*<Panel>*/}
      <Switch>
        <Route path={`${match.path}/camslist`} component={List} />
        <Route
          path={`${match.path}/autodetective`}
          component={EmptyComponent}
        />
        <Route path={`${match.path}/addcams`} component={EmptyComponent} />
        <Redirect to={`${match.url}/camslist`} />
      </Switch>
      {/*</Panel>*/}
    </Fragment>
  );
};

export default AuthenticationLayout;
