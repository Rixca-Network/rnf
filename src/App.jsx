import React from "react";
import MainLayout from "./layout/main.layout";
import { CtxApp } from "./App.context";
import SidebarComponent from "./component/sidebar.component";

function App() {
  return (
    <CtxApp>
      <div className="w-screen h-screen relative">
        <MainLayout />
        <SidebarComponent />
      </div>
    </CtxApp>
  );
}

export default App;
