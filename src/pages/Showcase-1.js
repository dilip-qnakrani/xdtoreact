import React from "react";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Counternumb from "../components/Helper/Counternumb";
import ShowcaseText from "../components/Showcase/ShowcaseText";
import ShowcaseBanner from "../components/Showcase/ShowcaseBanner";
import ShowcaseForm1 from "../components/Showcase/ShowcaseForm1";
import Bannershowcase from "../components/Showcase/Bannershowcase";

const Showcase1 = () => {
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

      <ShowcaseForm1 />

      <Separatorline />
      <Scrolltotop />
    </div>
  );
};

export default Showcase1;
