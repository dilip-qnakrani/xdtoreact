import React from "react";
import Banner from "../components/Helper/Banner";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Actionblog6 from "../components/Helper/Actionblog6";
import Actionblog7 from "../components/Helper/Actionblog7";
import Budget from "../components/Helper/Budget";
import Businessview from "../components/Helper/Businessview";
import Founder from "../components/Helper/Founder";

const Support = () => {
  return (
    <div className="royal_preloader">
      {/* <div id="royal_preloader"></div> */}

      {/* Nav and Logo
	==================================================  */}
      {/* <Navbar /> */}

      {/* Hero Block
	==================================================  */}

      <Banner title="STUDIO" img="parallax-hero-6.png" />

      {/* Call To Action Block
	==================================================  */}

      <Actionblog6
        bgtext="Creative Challenge"
        title="An Exciting Partnership"
        subtitle="With Famous International Creative"
      />

      <Separatorline />

      <Actionblog7 />

      <Musicplayer />

      {/* Services & Call To Action Block
	==================================================  */}

      <Budget bgtext="Monsters Den" title="Fire Up Your Brand" subtitle="" />

      <Separatorline />

      <Businessview />

      <Founder
        bgtext="Monster Father"
        title="Meet The Founder"
        subtitle="Shadi Al Hroub"
      />

      <Separatorline />

      {/* Footer Light Block
	==================================================  */}

      {/* <Footer /> */}

      {/* Scroll To Top
	==================================================  */}
      <Scrolltotop />
    </div>
  );
};

export default Support;
