import React from "react";

const ShowcaseForm2 = () => {
  return (
    <div>
      {/* Services & Call To Action Block
	==================================================  */}

      <div
        className="section padding-bottom-small background-white over-hide"
        id="scroll-top"
      >
        <div className="big-fade-title on-light text-center"></div>
        <div className="container showcase-form">
          <p className="showcase-form-p">
            Moving Boundaries Into&nbsp;
            <span className="m-color">Creative Solution</span>
          </p>
          <div className="row">
            <div className="col-12">
              <form>
                <div className="row subscribe-box-1 d-flex mb-3">
                  <div className="col-12 col-md-6">
                    <label className="font-light ">
                      First Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control  font-light"
                      placeholder="Enter your first name"
                    />
                    <div className=".errorTxt"></div>{" "}
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="font-light ">
                      Last Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-control  font-light"
                      placeholder="Enter your last name"
                    />
                    <div className=".errorTxt"></div>
                  </div>
                </div>
                <div className="row subscribe-box-1 d-flex mb-3">
                  <div className="col-12 col-md-6">
                    <label className="font-light ">
                      Company <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="form-control  font-light"
                      placeholder="Enter your company name"
                    />
                    <div className=".errorTxt"></div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="font-light ">
                      Company Size <span>*</span>
                    </label>
                    <select name="company_size" className="form-control ">
                      <option value="" hidden disabled="">
                        Please select your company size?
                      </option>

                      <option>0-10</option>
                      <option>10-50</option>
                      <option>50-100</option>
                      <option>100-300</option>
                      <option>300 &amp; More</option>
                    </select>
                    <div className=".errorTxt"></div>
                  </div>
                </div>
                <div className="row subscribe-box-1 mb-3">
                  <div className="col-12 ">
                    <label className="font-light">
                      Email Address<span>*</span>
                    </label>
                    <input
                      type="email"
                      name="funtional_titile"
                      className="form-control  font-light"
                      placeholder="montana@gmail.com"
                    />
                    <div className=".errorTxt"></div>{" "}
                  </div>
                </div>
                <div className="row subscribe-box-1 mb-3">
                  <div className="col-12 ">
                    <label className="font-light ">
                      Phone Number<span>*</span>
                    </label>
                    <input
                      type="text"
                      name="funtional_titile"
                      className="form-control  font-light"
                      placeholder="(+1)408-657-9007"
                    />
                    <div className=".errorTxt"></div>{" "}
                  </div>
                </div>
                <div className="row subscribe-box-1 mb-3">
                  <div className="col-12 ">
                    <label className="font-light ">Whare are you form?</label>
                    <select name="country" className="form-control  font-light">
                      <option value="" hidden disabled="">
                        Your Country?
                      </option>
                      <option value="1">Algeria</option>
                      <option value="2">Bahrain</option>
                      <option value="3">Egypt</option>
                      <option value="4">Iraq</option>
                      <option value="5">Iran</option>
                      <option value="6">Jordan</option>
                      <option value="7">Kuwait</option>
                      <option value="8">Lebanon</option>
                      <option value="9">Libya</option>
                      <option value="10">Morocco</option>
                      <option value="11">Mauritania</option>
                      <option value="12">Oman</option>
                      <option value="13">Palestine</option>
                      <option value="14">Qatar</option>
                      <option value="15">Saudi Arabia</option>
                      <option value="16">Sudan</option>
                      <option value="17">Syria</option>
                      <option value="18">Tunisia</option>
                      <option value="19">The United Arab Emirates</option>
                      <option value="20">Yemen</option>
                    </select>
                    <div className=".errorTxt"></div>
                  </div>
                </div>
                <div className="row my-4">
                  <label className="font-light col-md-12 mb-3">
                    SERVICES REQUIRED
                  </label>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio1" name="term_condition" type="radio" />

                      <label htmlFor="radio1">Logo Design</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio2" name="term_condition" type="radio" />

                      <label htmlFor="radio2">Magazine Design</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio3" name="term_condition" type="radio" />

                      <label htmlFor="radio3">Brand Identity</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio4" name="term_condition" type="radio" />

                      <label htmlFor="radio4">Design for Print</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio5" name="term_condition" type="radio" />

                      <label htmlFor="radio5">Exhibition Design</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio6" name="term_condition" type="radio" />

                      <label htmlFor="radio6">Website Design</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio7" name="term_condition" type="radio" />

                      <label htmlFor="radio7">Marketing Collateral</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="radio primary line-icon on-light">
                      <input id="radio8" name="term_condition" type="radio" />

                      <label htmlFor="radio8">Social Media</label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                </div>
                <div className="row subscribe-box-1 mb-3">
                  <div className="col-12">
                    <label className="font-light ">How Can We Help?</label>
                    <textarea
                      name="message"
                      className="form-control  font-light"
                      rows="10"
                      placeholder="Please describe your needs in details"
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <p className="font-light-p mt-3">
                      By clicking submit below, you consent to allow
                      MENAMONSTERS to store and process the personal information
                      submitted above for the purpose of providing you with
                      requested content.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-right">
                    <div className="ctaStrip justify-content-start">
                      <a
                        href="/"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#Modal-Received-showcase2"
                      >
                        <input
                          type="button"
                          className="btn bg-color-black  btn-primary showcase-form-button  btn-round font-semibold rounded-0 btn-long text-white"
                          value="Send"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal-showcase2-Received  */}
      <div
        className="modal fade default search-modal"
        id="Modal-Received-showcase2"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="m-bg-color box-modal text-center ">
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

export default ShowcaseForm2;
