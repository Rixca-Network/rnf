import React from "react";
import CardLayout from "../layout/card.layout";
import AboutnftComponent from "./aboutnft.component";
import AboutrixcaComponent from "./aboutrixca.component";
import IntroComponent from "./intro.component.jsx"
import WhyrxcaComponent from "./whyrxca.component";

function HomeComponent() {
  return (
    <>
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
      <div id="why-rixca" className="mb-4">
        <CardLayout>
          <WhyrxcaComponent />
        </CardLayout>
      </div>
      <div className="mb-6"></div>
    </>
  );
}

export default HomeComponent;
