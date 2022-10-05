import React from "react";
import Banner3 from "../components/Helper/Banner3";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Job from "../components/Jobs/Job";
import Actionblog8 from "../components/Helper/Actionblog8";

const Jobs = () => {
  return (
    <div className="royal_preloader">
      {/* Hero Block
	==================================================  */}

      <Banner3
        title="YOU ARE EITHER A SHARK 
OR A FISH IN THE MARKET"
        img="banner3-1.png"
        subtitle="Discover top creative and design jobs..."
      />

      <Musicplayer />

      <Actionblog8
        bgtext="Connect And Hunt"
        title="Connect And Hunt Today"
        subtitle="We Have Many Live Hunts For Your Skills"
        description="We Have Many Live Hunts For Your Skills Join us for changing opportunities, discover great fights and connect with emerging monsters from around the MENA region countries.  A leading resource for the design community, with an extensive network of recruiters and hiring companies"
      />

      {/* Jobs Block
	================================================== */}
      <Job />

      {/* Scroll To Top
	==================================================  */}
      <Scrolltotop />
    </div>
  );
};

export default Jobs;
