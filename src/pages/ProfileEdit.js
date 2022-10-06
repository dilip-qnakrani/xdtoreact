import React, { Fragment } from "react";
import Banner5 from "../components/Helper/Banner5";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import ProfileEditPage from "../components/Profile/ProfileEditPage";
// import ProfileNavbar from "../components/Layout/ProfileNavbar";
const ProfileEdit = () => {
  return (
    <Fragment>
      {/* <ProfileNavbar /> */}
      <div className="royal_preloader">
        {/* Hero Block
==================================================  */}

        <Banner5
          title="YOU ARE EITHER A SHARK 
OR A FISH IN THE MARKET"
          img="Group 387.png"
          subtitle="Discover top creative and design jobs..."
        />

        <Musicplayer />

        <ProfileEditPage img="Image_fa.png" />

        {/* Scroll To Top
==================================================  */}
        <Scrolltotop />
      </div>
    </Fragment>
  );
};

export default ProfileEdit;
