import React from "react";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Banner4 from "../components/Deep-Dive/Banner4";
import Musicplayer from "../components/Helper/Musicplayer";
import Deepdivecon from "../components/Deep-Dive/Deepdivecon";
const DeepDive = () => {
  return (
    <div className="royal_preloader">
      <Banner4 img="img/parallax-hero-8.png" />

      <Musicplayer />

      <Deepdivecon bgtext="Creative Challenge" title="The Creative Brief" />

      <Separatorline />
      <Scrolltotop />
    </div>
  );
};

export default DeepDive;
