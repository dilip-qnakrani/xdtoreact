import React from "react";

const Blog = () => {
  return (
    <div>
      {/* Portfolio Block
	==================================================  */}

      <div className="section padding-top padding-bottom-smaller background-white">
        <div className="big-fade-title on-light text-center">On The Blog</div>
        <div className="container z-bigger">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main-title text-center">
                <h3 className="big-fade-title-h3">Design Meets Business</h3>
                <div className="main-subtitle-bottom ">LATEST DESIGN NEWS</div>
              </div>
            </div>
            <div className="clear"></div>

            <div className="grid-wraper clearfix">
              <div className="grid-box float-inline half with-margin branding">
                <div className="portfolio-box-1 rounded">
                  <img src="img/portfolio/grid/1.png" alt="" />
                  {/* <div className="portfolio-mask-3 rounded"></div>
                    <h5 className="on-center text-center">
                      primarily serve people
                    </h5>
                    <p className="on-center text-center">design, motion</p> */}
                </div>
                <div className="blog-content">
                  <div className="blog-content-title">
                    <span>
                      <a href="/"> The Most Creative Music Sites in 2022</a>
                    </span>
                  </div>
                  <div className="blog-content-subtitle">
                    <span>
                      Picking music for a set can be daunting for inexperienced,{" "}
                      <br />
                      who often rely on their gut to pick tracks.
                    </span>
                  </div>
                  <div className="blog-content-learn">
                    <div>
                      <span>
                        <a href="/"> LEARN MORE </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid-box float-inline half with-margin branding">
                <div className="portfolio-box-1 rounded">
                  <img src="img/portfolio/grid/2.png" alt="" />
                  {/* <div className="portfolio-mask-3 rounded"></div>
                    <h5 className="on-center text-center">
                      primarily serve people
                    </h5>
                    <p className="on-center text-center">design, motion</p> */}
                </div>
                <div className="blog-content">
                  <div className="blog-content-title">
                    <span>
                      <a href="/"> The Most Creative Music Sites in 2022</a>
                    </span>
                  </div>
                  <div className="blog-content-subtitle">
                    <span>
                      Picking music for a set can be daunting for inexperienced,{" "}
                      <br />
                      who often rely on their gut to pick tracks.
                    </span>
                  </div>
                  <div className="blog-content-learn">
                    <div className="LEARN_MORE_h">
                      <span>
                        <a href="/"> LEARN MORE </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
