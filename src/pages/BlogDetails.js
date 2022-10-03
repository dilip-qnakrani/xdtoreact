import React from "react";
import Banner from "../components/Helper/Banner";
import Musicplayer from "../components/Helper/Musicplayer";
import Scrolltotop from "../components/Layout/Scrolltotop";
import BlogDetail from "../components/Blog/BlogDetail";

const BlogDetails = () => {
  return (
    <div className="royal_preloader">
      {/* Hero Block
	==================================================  */}

      <Banner title="The Blog" img="blog-detail-2.png" />

      <Musicplayer />

      {/* Blogs Block
	================================================== */}

      <BlogDetail />

      {/* Scroll To Top
	==================================================  */}
      <Scrolltotop />
    </div>
  );
};

export default BlogDetails;
