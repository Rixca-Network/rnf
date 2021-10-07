import React from "react";
import NavLayout from "./nav.layout";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "../component/home.component";
import DonateComponent from "../component/donate.component.jsx";

function MainLayout() {
  return (
    <div className="w-full h-full p-4 overflow-auto text-white bg-gray-900">
      <div id="navl">
        <NavLayout />
      </div>
      <div id="contl" className="py-5">
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/donate">
            <DonateComponent />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default MainLayout;
