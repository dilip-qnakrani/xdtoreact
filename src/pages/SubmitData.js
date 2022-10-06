import React from "react";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Musicplayer from "../components/Helper/Musicplayer";
import Banner5 from "../components/SubmitData/Banner5";
import SubmitDataForm from "../components/SubmitData/SubmitDataForm";
const SubmitData = () => {
  return (
    <div className="royal_preloader">
      <Banner5
        title="YOU ARE EITHER A SHARK 
OR A FISH IN THE MARKET"
        img="Group274.png"
        subtitle="Discover top creative and design jobs..."
      />

      <Musicplayer />

      <SubmitDataForm />

      <Separatorline />
      <Scrolltotop />
    </div>
  );
};

export default SubmitData;
