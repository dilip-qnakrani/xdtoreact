import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselM = () => {
  return (
    <div>
      {/* <!-- Hero Block
	================================================== --> */}

      <div className="section big-98-height over-hide background-dark">
        <div className="hero-slider-wrap">
          {/* <div className="customNavigation hero-sinc-1-2">
            <span className="prev-hero-sync-1">
              <i className="fa fa-long-arrow-left"></i>
            </span>
            <span className="next-hero-sync-1">
              <i className="fa fa-long-arrow-right"></i>
            </span>
          </div> */}
          <div id="hero-sync1" className="owl-carousel ">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              // transitionDuration={500}
              customTransition="all .01"
              containerClass="carousel-container"
              pauseOnHover={false}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              dotListClass="custom-dot-list-style"
            >
              <div
                className="item big-98-height background-image-cover"
                style={{ backgroundImage: `url('img/monsters1.png')` }}
              >
                <div className="grey-fade-over"></div>
                <div className="hero-bottom-wrap  text-center z-bigger">
                  <div className="container-fluid parallax-fade-top">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="carousel-h2">Monsters</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="item big-98-height background-image-cover"
                style={{ backgroundImage: `url('img/monsters2.png')` }}
              >
                <div className="grey-fade-over"></div>
                <div className="hero-bottom-wrap text-center z-bigger">
                  <div className="container-fluid parallax-fade-top">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="carousel-h2">Monsters</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="item big-98-height background-image-cover"
                style={{ backgroundImage: `url('img/monsters3.png')` }}
              >
                <div className="grey-fade-over"></div>
                <div className="hero-bottom-wrap text-center z-bigger">
                  <div className="container-fluid parallax-fade-top">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="carousel-h2">Monsters</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="item big-98-height background-image-cover"
                style={{ backgroundImage: `url('img/monsters4.png')` }}
              >
                <div className="grey-fade-over"></div>
                <div className="hero-bottom-wrap text-center z-bigger">
                  <div className="container-fluid parallax-fade-top">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="carousel-h2">Monsters</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselM;
