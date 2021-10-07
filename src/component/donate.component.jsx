import React from "react";
import EthDonateComponent from "./ethdonate.component";
import CardLayout from "../layout/card.layout";

export default function DonateComponent() {
  return (
    <>
      <div className="font-bold text-center text-2xl">DONATE</div>
      <p className="text-center font-thin">
        You can help develop FiPeC by buying/investing with our NFT, or you can
        donate using the options below.
      </p>
      <div className="mt-4">
        <CardLayout>
          <EthDonateComponent />
        </CardLayout>
      </div>
    </>
  );
}
