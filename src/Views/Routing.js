import React from "react";
import ReactDOM from "react-dom";
import { UIRouter, UIView, UISref } from "@uirouter/react";
import {
  pushStateLocationPlugin,
  servicesPlugin,
  trace,
  UIRouterReact
} from "@uirouter/react";

//
// Views
//

const RocketList = ({ transition }) => (
  <div>
    <h3>Rockets (page No {transition.params().pageNumber}):</h3>
    <UISref to="rockets.item" params={{ name: "saturn" }}>
      <a>Saturn</a>
    </UISref>
    ,
    <UISref to="rockets.item" params={{ name: "soyuz" }}>
      <a>Soyuz</a>
    </UISref>
  </div>
);

const RocketItem = ({ transition }) => (
  <div>
    <p>Rocket {transition.params().name}</p>
    <UISref to="rockets">
      <a>Go back to rockets list</a>
    </UISref>
  </div>
);

const states = [
  {
    name: "rockets",
    url: "/rockets?pageNumber",
    views: {
      "!$default": RocketList //Это безымянный <UIView> верхнего уровня
    }
  },

  {
    name: "rockets.item",
    url: "/:name",
    views: {
      "!$default": RocketItem
    }
  }
];

//
// Router config
//

const router = new UIRouterReact();

router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

for (let state of states) {
  router.stateRegistry.register(state);
}

router.urlRouter.otherwise("/rockets?pageNumber=1");

//
// Main
//

const App = () => (
  <UIRouter router={router}>
    <UIView />
  </UIRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
