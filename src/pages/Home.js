import React from "react";
import Actionblog1 from "../components/Helper/Actionblog1";
import Actionblog2 from "../components/Helper/Actionblog2";
import Banner from "../components/Helper/Banner";
import Blog from "../components/Helper/Blog";
import Companyinfo from "../components/Helper/Companyinfo";
// import Footer from "../components/Layout/Footer";
import HowweWork from "../components/Helper/HowweWork";
import Musicplayer from "../components/Helper/Musicplayer";
// import Navbar from "../components/Layout/Navbar";
import Scrolltotop from "../components/Layout/Scrolltotop";
import Separatorline from "../components/Helper/Separatorline";
import Services from "../components/Helper/Services";
import Team from "../components/Home/Team";
import Playinfo from "../components/Helper/Playinfo";

const DATA = [
  {
    title: "Inspiring Brief",
    subtitle:
      "We begin by helping our client develop a smart, creatively inspiring brief.",
  },
  {
    title: "Creative Monsters",
    subtitle:
      "We post the brief on our site, media channels and invite all creative monsters to participate.",
  },
  {
    title: "Evaluate & Submission",
    subtitle:
      "We evaluate every submission we receive and curate a shortlist of concepts for client review.",
  },
  {
    title: "Winners & Prizes",
    subtitle:
      "We then refine the selected ideas, involving the winners, recognition and cash prizes!",
  },
];

const index = () => {
  return (
    <div className="royal_preloader">
      {/* <div id="royal_preloader"></div> */}

      {/* Nav and Logo
	==================================================  */}
      {/* <Navbar /> */}

      {/* Hero Block
	==================================================  */}

      <Banner title="The Best" img="parallax-hero-4.png" />

      {/* Call To Action Block
	==================================================  */}

      <Actionblog1 title="Creative Monsters Fight!" subtitle="Join The Fight" />

      {/* Separator Line
	==================================================  */}

      <Separatorline />

      {/* Services & Call To Action Block
	==================================================  */}

      <HowweWork
        bgtext="Connect And Hunt"
        title="Here’s How We Work"
        subtitle="INSPIRING NEW IDEAS"
        data={DATA}
        img="img/how_we_work.png"
      />

      <Musicplayer />

      <Playinfo />

      {/* Testimonials & Facts Block
	================================================== */}

      <Companyinfo img="img/parallax-5.png" />

      {/* Call To Action Block
	==================================================  */}

      <Actionblog2 />

      {/* Team Block
	==================================================  */}

      <Team
        title="Future Monsters"
        subtitle="ONLY THE BEST"
        bgtext="Best Monsters"
      />

      {/* Services Block
	================================================== */}

      <Services />

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

export default index;
