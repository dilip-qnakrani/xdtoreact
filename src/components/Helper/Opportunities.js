import React from "react";

const Opportunities = ({ bgtext, title, subtitle }) => {
  return (
    <div>
      {/* Services & Call To Action Block
	==================================================  */}

      <div
        className="section padding-top-bottom-info background-white over-hide"
        id="scroll-top"
      >
        <div className="big-fade-title on-light text-center">{bgtext}</div>
        <div className="m-container z-bigger">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="main-title text-center">
                {/* <div className="main-subtitle-top mb-4">welcome</div> */}
                <h3 className="big-fade-title-h3">{title}</h3>
                <div className="main-subtitle-bottom ">{subtitle}</div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="col-md-12">
              <div className=" text-center">
                <div className=" main-title-div mb-4">
                  What&nbsp;
                  <span className="main-title-div-span m-color">
                    Creative Monsters&nbsp;
                  </span>
                  Can Do For Your Brand
                </div>
                <p className="main-title-p">
                  We simplify complex processes and promote clarity across
                  industries. Our dedication to user-centered design,
                  multidisciplinary approach, and attention to detail allow us
                  to build innovative solutions. We create a visual and
                  narrative identity that speaks to your audience by
                  articulating your company culture, style, and philosophy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="services-box-1 services-box-style-1  text-center">
                <h5 className="mt-3 m-color services-box-style-h5">
                  FEED YOUR BRAND DNA
                </h5>
                <p className="mt-1 mb-4 services-box-style-p">
                  Offer various Ad packages from branding to full campaigns
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="services-box-1 services-box-style-2 text-center">
                <h5 className="mt-3 services-box-style-h5">TRUSTED VOICE</h5>
                <p className="mt-1 mb-4 services-box-style-p">
                  Respected and trusted voice in the creative industries
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="services-box-1 services-box-style-3 text-center">
                <h5 className="mt-3 m-color services-box-style-h5">
                  VISIBILITY & OPPORTUNITY
                </h5>
                <p className="mt-1 mb-4 services-box-style-p">
                  Different people with a set of unique skills and competencies
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5 ">
              <div className="services-box-1 services-box-style-3 text-center">
                <h5 className="mt-3 m-color services-box-style-h5">
                  BRAND INNOVATION
                </h5>
                <p className="mt-1 mb-4 services-box-style-p">
                  Provides unique inspiration with leading brands and icons
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5 ">
              <div className="services-box-1 services-box-style-2 text-center">
                <h5 className="mt-3 services-box-style-h5">KILLER BRIEF</h5>
                <p className="mt-1 mb-4 services-box-style-p">
                  Setting up ideation contest on a solid brief to deliver
                  concepts
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="services-box-1 services-box-style-1  text-center">
                <h5 className="mt-3 m-color services-box-style-h5">
                  RESEARCH METHODOLOGY
                </h5>
                <p className="mt-1 mb-4 services-box-style-p">
                  Creatives bring the outside-in perspective to get to fresh
                  ideas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
