import React from "react";

const Companyinfo = ({ img }) => {
  return (
    <div>
      {/* Testimonials & Facts Block
	================================================== */}

      <div className="section padding-top-bottom">
        <div
          className="parallax-1"
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
        <div className="grey-fade-over"></div>
        <div className="container z-bigger">
          <div className="row justify-content-center">
            <div className="col-md-11">
              <div className="testimonials-1-slider-wrap">
                <div className=" owl-theme">
                  <div className="item">
                    <div className="testimonials-box-2 text-center">
                      <h5 className="color-white">Deep Dive Inside Out</h5>
                      <h4 className="color-white">
                        Explore your mind in metaverse and travel to the depths
                        of identity by exploring the body and physical being
                      </h4>
                      <p className="mt-2">Illustration, Animation, 3D and AR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 padding-top-bottom-small">
              {/* <div className="separator-wrap">
                <span className="separator">
                  <span className="separator-line dashed opacity-40"></span>
                </span>
              </div> */}
            </div>
            <div className="col-md-3">
              <div className="counter-wrap dark">
                <p>
                  <span className="counter-numb small-2">8.819</span>
                </p>
                <h6>lines of code</h6>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div className="counter-wrap dark">
                <p>
                  <span className="counter-numb small-2">4.768</span>
                </p>
                <h6>projects finished</h6>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div className="counter-wrap dark">
                <p>
                  <span className="counter-numb small-2">7.307</span>
                </p>
                <h6>coups of coffee</h6>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div className="counter-wrap dark">
                <p>
                  <span className="counter-numb small-2">5.921</span>
                </p>
                <h6>working hours</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companyinfo;
