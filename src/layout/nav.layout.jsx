import React, { useContext } from "react";
import { AppContext } from "../App.context.jsx";

function NavLayout() {
  const ctx = useContext(AppContext);
  return (
    <div className="flex items-center justify-between w-full p-2 bg-gray-800 rounded-xl">
      <h1 className="text-2xl font-bold text-gray-400 font-space">FiPeC</h1>
      <button
        className={`flex items-center h-full text-white hover:text-gray-100 ${
          ctx.navbtnact ? "z-20" : ""
        }`}
        onClick={ctx.setNavBtn}
      >
        <span
          className={`${ctx.navbtnact ? "animate-ping" : ""} material-icons`}
        >
          {ctx.navbtnact ? "highlight_off" : "texture"}
        </span>
      </button>
    </div>
  );
}

export default NavLayout;
