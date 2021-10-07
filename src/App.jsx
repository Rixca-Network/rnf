import React from "react";
import MainLayout from "./layout/main.layout";
import { CtxApp } from "./App.context";
import SidebarComponent from "./component/sidebar.component";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <CtxApp>
      <Router>
        <div className="w-screen h-screen relative">
          <MainLayout />
          <SidebarComponent />
        </div>
      </Router>
    </CtxApp>
  );
}

export default App;
