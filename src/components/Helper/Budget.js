import React from "react";

const Budget = ({ bgtext, title, subtitle }) => {
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
              <div className="mb-5 text-center">
                {/* <div className="main-subtitle-top mb-4">welcome</div> */}
                <h3 className="big-fade-title-h3">{title}</h3>
                <div className="main-subtitle-bottom ">{subtitle}</div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="col-md-12">
              <div className=" text-center">
                <div className="main-title-div mb-4">
                  <span className="main-title-div-span m-color">
                    Advertising&nbsp;
                  </span>
                  <span className="">Budget</span>
                </div>
                <p className="main-title-p">
                  Our interactive platform is expanding steadily, with more than
                  5000 people across MENA regions registered and 15% of those
                  joining each month. We provide multiple spaces for job
                  advertisements, as well as news and classified listings. If
                  you would like to be featured in our interactive hub, find out
                  more about our secret fees.
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="budget-left text-center ml-auto ">
                <img src="img/icons/Group205.png" alt="" />
                <div className="budget-price">
                  <sup>US$</sup>2500
                </div>
                <p className="budget-price-p">
                  One&nbsp;
                  <span className="m-color budget-price-p-span">
                    Creative Advert&nbsp;
                  </span>
                  Design, One&nbsp;
                  <span className="m-color budget-price-p-span">
                    Job Advert
                  </span>
                  &nbsp; For Creative One Grasping Of Your&nbsp;
                  <span className="m-color budget-price-p-span">
                    News & Rewrite
                  </span>
                  &nbsp; Of News Content
                </p>

                <a
                  href="/"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#Modal-budget"
                >
                  <button className="btn budget-price-button text-capitalize btn-primary btn-round mt-md-4  mt-lg-0  scroll">
                    Order Now
                  </button>
                </a>
              </div>
            </div>
            <div className="col-md-6 budget-right ">
              <img src="img/Group203.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Modal-budget  */}
      <div
        className="modal fade default search-modal"
        id="Modal-budget"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <div className="hero-center-wrap move-top budget-move-top">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-4 budget-m">
                      <div className="m-color-bg-white box-modal budget-box-modal text-center modal-form-budget  ">
                        <p className="mb-3 mt-lg-5 ">
                          Get Best Ways To <br />
                          <span className="m-color">Grow Your Business</span>
                        </p>
                        <form className="userAuthForm budget-form">
                          <div className="row text-right ">
                            <div className="subscribe-box-1 mb-3 col-10">
                              <input
                                type="text"
                                name="fname"
                                placeholder="Your Name"
                                className="form-control"
                              />
                            </div>
                            <div className="subscribe-box-1 mb-3 col-10">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="form-control"
                              />
                            </div>
                            <div className="subscribe-box-1 mb-3 col-10">
                              <input
                                type="text"
                                name="Phone"
                                placeholder="Phone Number"
                                className="form-control"
                              />
                            </div>
                            <div className="subscribe-box-1 mb-3 col-10">
                              <a
                                href="/"
                                data-toggle="modal"
                                data-dismiss="modal"
                                data-target="#Modal-Received-budget"
                              >
                                <button
                                  type="button"
                                  value="Order Now"
                                  className=" form-control btn budget-form-button budget-price-button text-capitalize btn-primary btn-round mt-md-4  mt-lg-0  scroll"
                                >
                                  Order Now
                                </button>
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal-budget-Received */}
      <div
        className="modal fade default search-modal"
        id="Modal-Received-budget"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="hero-center-wrap move-top budget-move-top">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-4 budget-m ">
                      <div className="m-bg-color box-modal budget-box-modal text-center ">
                        <div className="modal-header justify-content-end">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true"></span>
                          </button>
                        </div>
                        <img
                          className="box-modal-img"
                          src="img/icons/emailbox.png"
                          alt=""
                        />
                        <p className="box-modal-title my-3">Thank you</p>
                        <p className="box-modal-subtitle">
                          We received your message and we will try to contact
                          <br />
                          you as soon as possible.
                        </p>
                      </div>
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

export default Budget;
