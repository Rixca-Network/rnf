import React, { useContext } from "react";
import { AppContext } from "../App.context";
import { Link } from "react-router-dom";

function SidebarComponent() {
  const ctx = useContext(AppContext);
  return (
    <div
      className={`sidebar ${
        ctx.navbtnact ? "act" : "nact"
      } absolute w-screen h-screen z-10 bg-black bg-opacity-75`}
    >
      <div className="inner-sidebar w-6/12 h-full p-3 bg-gray-900">
        <div className="block text-2xl text-center font-space text-gray-50">
          FiPeC
        </div>
        <div className="mt-6">
          <Link to="/" className="block text-xl text-gray-400 m-3">
            Home
          </Link>
          <a href="https://opensea.io/assets/
fipec-treaseure" className="block text-xl text-gray-400 m-3">
            Galery
          </a>
          <a
            href="https://twitter.com/fipecnetwork"
            className="block text-xl text-gray-400 m-3"
          >
            Twitter
          </a>
          <Link to="/donate" className="block text-xl text-gray-400 m-3">
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;
