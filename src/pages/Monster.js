import React from "react";
import Actionblog5 from "../components/Helper/Actionblog5";
import Actionblog2 from "../components/Helper/Actionblog2";
// import Banner from "../components/Helper/Banner";
import Blog from "../components/Helper/Blog";
import Companyinfo from "../components/Helper/Companyinfo";
// import Footer from "../components/Layout/Footer";
import Challenge from "../components/Helper/Challenge";
import Musicplayer from "../components/Helper/Musicplayer";
// import Navbar from "../components/Layout/Navbar";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Services1 from "../components/Helper/Services1";
import Team from "../components/Home/Team";
import Carousel from "../components/Helper/Carousel";

const Monster = () => {
  return (
    <div className="royal_preloader">
      {/* Nav and Logo
	==================================================  */}
      {/* <Navbar /> */}

      {/* Hero Block
	==================================================  */}
      <Carousel />

      {/* <Banner title="Monsters" img="parallax-hero-4.png" /> */}

      {/* Call To Action Block
	==================================================  */}

      <Actionblog5
        title="Let’s Connect, Engage, And Hunt"
        subtitle="Join The Fight "
        bgtext="MENA"
      />

      <Musicplayer />

      {/* Separator Line
	==================================================  */}

      <Separatorline />

      {/* Services & Call To Action Block
	==================================================  */}

      <Challenge
        bgtext="Connect And Hunt"
        title="It’s Time To Sharp Your Weapons"
        subtitle="We Have Many Live Hunts For Your Skills"
        img="img/Car.png"
      />

      {/* Testimonials & Facts Block
	================================================== */}

      <Companyinfo img="img/Mask-Group-2.png" />

      {/* Call To Action Block
	==================================================  */}

      <Actionblog2 />

      {/* Team Block
	==================================================  */}

      <Team
        title="See The Latest Monsters Joined Us"
        subtitle="Where Creative Monsters Lives"
        bgtext="Best Monsters"
      />

      {/* Services Block
	================================================== */}

      <Services1 />

      {/* Portfolio Block
	==================================================  */}
      <Blog />

      {/* Separator Line
	==================================================  */}

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

export default Monster;
