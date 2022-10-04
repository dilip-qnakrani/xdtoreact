import React from "react";
import Actionblog2 from "../components/Helper/Actionblog2";
import Actionblog3 from "../components/Helper/Actionblog3";
import Banner from "../components/Helper/Banner";
import Companyinfo from "../components/Helper/Companyinfo";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
// import Separatorline from "../components/Helper/Separatorline";
import Playinfo from "../components/Helper/Playinfo";
import Mark from "../components/Combat/Mark";
import Actionblog4 from "../components/Helper/Actionblog4";

const Combat = () => {
  return (
    <div className="royal_preloader">
      {/* Hero Block
	==================================================  */}

      <Banner title="COMBAT" img="combat-banner.png" />

      <Actionblog3
        title="Current Briefs Open For Combat"
        subtitle="Enjoy Hunting"
      />

      <Musicplayer />

      <Playinfo />

      {/* Testimonials & Facts Block

	================================================== */}

      <Companyinfo img="img/Mask-Group.png" />

      {/* Call To Action Block

	==================================================  */}
      <Actionblog2 />

      <Mark img="img/some-along.png" />

      <Actionblog4 />

      {/* Scroll To Top
	==================================================  */}
      <Scrolltotop />
    </div>
  );
};

export default Combat;
