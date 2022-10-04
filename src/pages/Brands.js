import React from "react";

import HowweWork from "../components/Helper/HowweWork";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Banner2 from "../components/Helper/Banner2";
import Info from "../components/Helper/Info";
import Opportunities from "../components/Helper/Opportunities";
import Price from "../components/Helper/Price";

const DATA = [
  {
    title: "Collaborative",
    subtitle: "Discover great fights and connect with emerging monsters.",
  },
  {
    title: "Directory",
    subtitle:
      "Comprehensive database of best designers, artists, and resources.",
  },
  {
    title: "Newsletter",
    subtitle:
      "Monthly roundup of design news, events for creatives of all kinds.",
  },
  {
    title: "Awards",
    subtitle: "From the biggest brands in the world to win fame and fortune.",
  },
];

const Brands = () => {
  return (
    <div className="royal_preloader">
      <Banner2
        title="the best way to predict the future is to"
        subtitle="Request A Showcase"
        img="parallax-hero-5.png"
      />

      <Musicplayer />

      <HowweWork
        bgtext="FOCUSED ON"
        title="Engage For Quality Placement Solutions"
        subtitle="Where Creative Monsters Lives"
        data={DATA}
        img="img/Group109.png"
      />

      <Separatorline />

      <Info
        bgtext="Empowering People"
        title="Design For Education"
        subtitle="Let’s Connect"
      />

      <Separatorline />

      <Opportunities
        bgtext="Deep Dive"
        title="Discover Opportunities"
        subtitle="Let’s Talk"
      />

      <Separatorline />

      <Price
        bgtext="Fire Up Your Brand"
        title="Exclusive Packages"
        subtitle="We Help Brands Become More Visible!"
      />

      <Separatorline />
      <Scrolltotop />
    </div>
  );
};

export default Brands;
