import React, { useContext } from "react";
import { AppContext } from "../App.context";

function SidebarComponent() {
  const ctx = useContext(AppContext);
  return (
    <div
      className={`${
        ctx.navbtnact ? "" : "hidden"
      } absolute w-screen h-screen inset-0 z-10 bg-black bg-opacity-75`}
    >
      <div className="w-6/12 h-full bg-gray-900"></div>
    </div>
  );
}

export default SidebarComponent;
