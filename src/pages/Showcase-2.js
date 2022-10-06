import React from "react";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Counternumb from "../components/Helper/Counternumb";
import ShowcaseText from "../components/Showcase/ShowcaseText";
import ShowcaseBanner from "../components/Showcase/ShowcaseBanner";
import ShowcaseForm2 from "../components/Showcase/ShowcaseForm2";
import Bannershowcase from "../components/Showcase/Bannershowcase";

const Showcase2 = () => {
  return (
    <div className="royal_preloader">
      <Bannershowcase img="parallax-hero-7.png" />
      <Musicplayer />
      <Counternumb />

      <ShowcaseText
        bgtext="Request A Showcase"
        title="Let’s Work Together"
        subtitle="In Times Of Adversity, Creativity Rises. So Can Your Business."
      />
      <Separatorline />

      <ShowcaseBanner />

      <ShowcaseForm2 />

      <Separatorline />
      <Scrolltotop />
    </div>
  );
};

export default Showcase2;
