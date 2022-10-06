import React from "react";

const ShowcaseBanner = () => {
  return (
    <div>
      {/* Services & Call To Action Block
	==================================================  */}

      <div
        className="section padding-top-bottom-small background-white over-hide"
        id="scroll-top"
      >
        <div className="big-fade-title on-light text-center"></div>
        <div className="s-container z-bigger">
          {/* <div className="row justify-content-center">
            <div className="col-12">
              <div id="Group_173">
                <div id="Group_172">
                  <div>
                    <svg className="Shape_2">
                      <rect
                        id="Shape_2"
                        rx="0"
                        ry="0"
                        x="0"
                        y="0"
                        width="760"
                        height="322"
                      ></rect>
                    </svg>
                    <div id="We_can_help_your_brand_to_have">
                      <span>We can help your brand to have more sales</span>
                    </div>
                    <div id="Marketing__Campaigns_Creating_">
                      <span>
                        Marketing &amp; Campaigns
                        <br />
                        Creating a better world
                      </span>
                    </div>
                    <div id="Group_168">
                      <button className="btn showcase-banner-button  text-capitalize btn-primary btn-round mt-md-4  mt-lg-0  scroll">
                        Creative Monsters
                      </button>
                    </div>
                    <div id="Group_167">
                      <img id="Group_166" src="img/icons/Group166.png" />
                    </div>
                  </div>
                  <div>
                    <svg className="Shape_3">
                      <rect
                        id="Shape_3"
                        rx="0"
                        ry="0"
                        x="0"
                        y="0"
                        width="681"
                        height="322"
                      ></rect>
                    </svg>
                    <div id="Full_service_design_and_commun">
                      <span>Full service design and communications</span>
                    </div>
                    <div id="Moving_boundaries__into_creati">
                      <span>
                        Moving boundaries <br />
                        into creative solution
                      </span>
                    </div>

                    <div id="Group_171">
                      <button className="btn bg-color-black showcase-banner-button  text-capitalize btn-primary btn-round mt-md-4  mt-lg-0  scroll">
                        Ask for help
                      </button>
                    </div>
                  </div>
                  <div>
                    <svg className="Shape_1">
                      <ellipse
                        id="Shape_1"
                        rx="73.5"
                        ry="73.5"
                        cx="73.5"
                        cy="73.5"
                      ></ellipse>
                    </svg>
                    <div id="Brand_Startup">
                      <span>Brand</span>
                      <span
                        style={{ fontStyle: "normal", fontWeight: "normal" }}
                      >
                        <br />
                        Startup
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row showcase-banner">
            <div className="showcase-banner-left d-flex">
              <div>
                <img src="img/icons/Group166.png" alt="" />
              </div>
              <div className="showcase-banner-left-2">
                <h3>
                  Marketing & Campaigns <br /> Creating A Better World
                </h3>
                <p>We can help your brand to have more sales</p>
                <button className="btn text-capitalize btn-primary btn-round  mt-lg-3 scroll">
                  Creative Monsters
                </button>
              </div>
            </div>
            <div className="showcase-banner-right text-center">
              <div>
                <h3>
                  Moving boundaries <br /> into creative solution
                </h3>
                <p>Full service design and communications</p>
                <button className="btn text-capitalize btn-primary btn-round  mt-lg-3 scroll">
                  Ask for help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseBanner;
