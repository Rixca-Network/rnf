import React from "react";
import NavLayout from "./nav.layout";
import CardLayout from "./card.layout";
import IntroComponent from "../component/intro.component";
import AboutnftComponent from "../component/aboutnft.component";
import AboutrixcaComponent from "../component/aboutrixca.component";

function MainLayout() {
  return (
    <div className="w-full h-full p-4 overflow-auto text-white bg-gray-900">
      <div className="mb-3">
        <NavLayout />
      </div>
      <div>
        <div id="intro" className="mb-4">
          <CardLayout>
            <IntroComponent />
          </CardLayout>
        </div>
        <div id="about-nft" className="mb-4">
          <CardLayout>
            <AboutnftComponent />
          </CardLayout>
        </div>
        <div id="about-nft" className="mb-4">
          <CardLayout>
            <AboutrixcaComponent />
          </CardLayout>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
