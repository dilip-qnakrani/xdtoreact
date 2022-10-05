import React from "react";
import Banner4 from "../components/Helper/Banner4";
import Musicplayer from "../components/Helper/Musicplayer";
import Separatorline from "../components/Helper/Separatorline";
import Scrolltotop from "../components/Layout/Scrolltotop";
import ProfilePage from "../components/Profile/ProfilePage";

const Profile = () => {
  return (
    <div className="royal_preloader">
      {/* Hero Block
==================================================  */}

      <Banner4
        title="Jordan"
        img="profile-pic.png"
        subtitle="Are You Ready?"
        description="It's Time To Sharp Your Weapons"
      />

      <Musicplayer />

      <ProfilePage img="Image_fa.png" />
      <Separatorline />
      {/* Scroll To Top
==================================================  */}
      <Scrolltotop />
      <Separatorline />
    </div>
  );
};

export default Profile;
