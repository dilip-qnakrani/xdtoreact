import React from "react";

const ProfileEditPage = ({ img }) => {
  return (
    <div>
      <div className="m-container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row  justify-content-between">
              <div className="col-lg-4 col-md-6">
                <div className="row">
                  <div className="col-lg-4 col-md-4 text-lg-left text-center">
                    <img
                      style={{
                        backgroundImage: `url('img/${img}')`,
                        height: 100,
                        width: 100,
                        backgroundRepeat: "round",
                      }}
                      alt=""
                      className="img-fluid rounded-circle-1"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6  mt-3">
                    <h4 className="text-center">Birdie Barnett</h4>
                    <p className="text-center">Chief analytics officer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mt-4 text-lg-right text-center">
                <button className="btn-line-dark">Edit Your Avatar</button>
              </div>
            </div>
            <div className="separator-wrap pt-4 pb-4">
              <span className="separator">
                <span className="separator-line dashed"></span>
              </span>
            </div>
            <form method="post">
              <div className="row  d-flex mb-3">
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
              <div className="row  d-flex mb-3">
                <div className="col-12 col-md-6">
                  <label className="font-light ">
                    Profession <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control  font-light"
                    placeholder="Input Your Position Name"
                  />
                  <div className=".errorTxt"></div>{" "}
                </div>
                <div className="col-12 col-md-6">
                  <label className="font-light ">
                    Number Phone <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control  font-light"
                    placeholder="Input Your Mobile Number"
                  />
                  <div className=".errorTxt"></div>
                </div>
              </div>
              <div className="row  d-flex mb-3">
                <div className="col-12 col-md-6">
                  <label className="font-light ">
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="form-control  font-light"
                    placeholder="Input Your Email Address"
                  />
                  <div className=".errorTxt m-color">*verification purpose</div>
                </div>
                <div className="col-12 col-md-6">
                  <label className="font-light ">
                    Your Country <span>*</span>
                  </label>
                  <select name="company_size" className="form-control ">
                    <option value="" hidden disabled="">
                      Select One Country
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
                    <option value="20">Yemen &amp; More</option>
                  </select>
                  <div className=".errorTxt m-color">*verification purpose</div>
                </div>
              </div>
              <div className="row  mb-3">
                <div className="col-12">
                  <label className="font-light ">Who Are You?</label>
                  <textarea
                    name="message"
                    className="form-control  font-light"
                    rows="10"
                    placeholder="Professional Description level / short bio"
                  ></textarea>
                </div>
              </div>
              <div className="row  mb-3">
                <div className="col-12 ">
                  <label className="font-light">
                    Where Can We Find Your Wreck?
                  </label>
                  <input
                    type="email"
                    name="funtional_titile"
                    className="form-control  font-light mb-3"
                    placeholder="Facebook"
                  />
                  <div className=".errorTxt"></div>{" "}
                  <input
                    type="email"
                    name="funtional_titile"
                    className="form-control  font-light mb-3"
                    placeholder="Instagram"
                  />
                  <div className=".errorTxt"></div>{" "}
                  <input
                    type="email"
                    name="funtional_titile"
                    className="form-control  font-light mb-3"
                    placeholder="Linkedin "
                  />
                  <div className=".errorTxt"></div>{" "}
                  <input
                    type="email"
                    name="funtional_titile"
                    className="form-control  font-light mb-3"
                    placeholder="Behance"
                  />
                  <div className=".errorTxt"></div>{" "}
                  <input
                    type="email"
                    name="funtional_titile"
                    className="form-control  font-light mb-3"
                    placeholder="Website"
                  />
                  <div className=".errorTxt"></div>{" "}
                </div>
              </div>
              <div className="row  mb-3">
                <div className="col-12 text-right">
                  <div className="ctaStrip justify-content-start">
                    <input
                      type="submit"
                      id="submit"
                      className="btn   btn-primary-pink   btn-round font-semibold rounded-0 btn-long text-white"
                      value="Save"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h5>Change Password</h5>
                  <p className="font-left-p mt-3">
                    Changing your passwords to something different and unique to
                    each account will make it so that even if someone does guess
                    one password, he cannot use it for anything else.
                  </p>
                  <div className="ctaStrip justify-content-start">
                    <input
                      type="submit"
                      id="submit"
                      className=" btn-profile btn-round font-semibold rounded-0 mb-4"
                      value="Forgot Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row  mb-3">
                    <div className="col-12 ">
                      <label className="font-light ">
                        Current Password<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="funtional_titile"
                        className="form-control  font-light"
                        placeholder="Input current password"
                      />
                      <div className=".errorTxt"></div>{" "}
                    </div>
                  </div>
                  <div className="row  mb-3">
                    <div className="col-12 ">
                      <label className="font-light ">
                        New Password<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="funtional_titile"
                        className="form-control  font-light"
                        placeholder="Input new password"
                      />
                      <div className=".errorTxt"></div>{" "}
                    </div>
                  </div>
                  <div className="row  mb-3">
                    <div className="col-12 ">
                      <label className="font-light ">
                        Confirm New Password<span>*</span>
                      </label>
                      <input
                        type="text"
                        name="funtional_titile"
                        className="form-control  font-light"
                        placeholder="Input new password"
                      />
                      <div className=".errorTxt"></div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row  my-3">
                <div className="col-12 text-right">
                  <div className="ctaStrip justify-content-start">
                    <input
                      type="submit"
                      id="submit"
                      className="btn btn-round font-semibold rounded-0 btn-long text-white "
                      value="Update Password"
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-between">
                <div className="col-md-4">
                  <h5>Delete Your Account</h5>
                  <p className="font-left-p mt-3">
                    When you delete your account, your profile, photos, and
                    previous participation will be permanently removed.
                  </p>
                </div>
                <div className="col-md-4 mt-4 text-right">
                  <button className="btn-line-dark">Delete Account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditPage;
