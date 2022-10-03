import React from "react";
import Actionblog6 from "../components/Helper/Actionblog6";
import Banner from "../components/Helper/Banner";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Card from "../components/Blog/Card";

const Blogs = () => {
  return (
    <div className="royal_preloader">
      {/* Hero Block
	==================================================  */}

      <Banner title="The Blog" img="Mask-Group-3.png" />

      {/* Call To Action Block
	==================================================  */}

      <Actionblog6
        title="Unlimited Design News"
        subtitle="That Never Stops"
        bgtext="On The Blog"
      />

      <Musicplayer />

      {/* Blogs Block
	================================================== */}

      <Card />

      {/* Scroll To Top
	==================================================  */}
      <Scrolltotop />
    </div>
  );
};

export default Blogs;
