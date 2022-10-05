import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px",
  borderWidth: 1,
  borderRadius: 1,
  borderColor: "#ffffff4d",
  borderStyle: "double",
  // backgroundColor: "#fafafa",
  // color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const BannerData = [
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
  { title: "Adidas Is Hiring", subTitle: "Graphic Designer" },
];

const Job = () => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div>
      {/* <!-- Post Block
================================================== --> */}

      <div className="section padding-top background-grey over-hide">
        <div className="p-container">
          <div className="row justify-content-start">
            <div className="col-lg-9">
              <div className=" row ">
                {BannerData.map((data, i) => (
                  <div key={i} className="col-md-6">
                    <div className=" float-inline quarter mb-4  drop-shadow rounded">
                      <div className="blog-box-1 blog-home card-background-dark-3 over-hide">
                        <div className="card-add-box-3 text-center">
                          <h1 className="mt-5 mb-4 card-add-box-text-3">
                            {data.title}
                          </h1>
                          <p className="card-add-box-desc-3 mb-4">
                            {data.subTitle}
                          </p>
                          <a
                            href="/"
                            data-toggle="modal"
                            data-dismiss="modal"
                            // data-target="#Modal-jobs"
                            data-target="#Modal-careers2"
                          >
                            <button className="card-add-box-btn-3">
                              Reveal
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-md-12 text-center my-5">
                  <button className="btn-load-more">Load More Jobs</button>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar-box rounded">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-lg-12">
                    <div className=" float-inline quarter mb-4  drop-shadow rounded">
                      <div className="blog-box-1 blog-home background-dark-3 over-hide">
                        <div className="card-add-box-3 text-center">
                          <h1 className="mt-2 mb-2 card-add-box-text-3">
                            Get Your Message Out Here!
                          </h1>
                          {/* <p className="card-add-box-price-2 pb-0 mb-0">1000</p> */}
                          <div className="card-add-box-price-3 mt-3">
                            <sup>US$</sup>500
                          </div>
                          <p className="card-add-box-desc-3">
                            Weekly | Static Advertise
                          </p>
                          <button className="card-add-btn">Order Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12  col-lg-12">
                    <h6 className="mb-3">LATEST DESIGN NEWS</h6>
                    <div className=" float-inline quarter  mb-4   drop-shadow rounded">
                      <div className="blog-box-1 blog-home background-white over-hide">
                        <img
                          src="img/blog-img-3.png"
                          alt=""
                          className="blog-home-img"
                        />
                        <div className="padding-in">
                          <Link to="/blog-details">
                            <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                          </Link>
                          <p className="mt-2 mb-4 card-text">
                            Design must reflect the practical and aesthetic in
                            business but above all... good design must primarily
                            serve people.
                          </p>
                          <Link
                            to="/blog-details"
                            className="btn-link btn-primary pl-0 mt-0"
                          >
                            read more <i className="fa fa-angle-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12  col-lg-12">
                    <div className=" float-inline quarter mb-4  drop-shadow rounded">
                      <div className="blog-box-1 blog-home background-lemon over-hide">
                        <div className="card-add-box">
                          <h1 className="mt-2 mb-2 card-add-box-text">
                            Subscribe Now to get the latest jobs update
                          </h1>
                          <input
                            className="form-control input-lemon"
                            placeholder="enter your e-mail…"
                            type="text"
                          />
                          <button className="btn-lemon">
                            ADD ME TO THE BLACKLIST
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  col-sm-12 col-lg-12">
                    <div className="text-center">
                      <h4 className="blogdetail-text">
                        Moving Boundaries Into Creative Solution
                      </h4>
                      <p>Full service design and communications</p>
                      <button className="btn-load-more">Ask For Help</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal-aboutus */}
      <div
        className="modal fade default search-modal"
        id="Modal-jobs"
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
              <div className="hero-center-wrap move-top">
                <div className="m-container">
                  <div className="row justify-content-center ">
                    <div className="col-12">
                      <h5 className="text-white footer-text-title">Addidas</h5>
                      <p className="text-white footer-text-subtitle mb-2">
                        Adidas Is Looking For A Graphic Designer
                      </p>
                      <div className="footer-text-p">
                        <p>
                          This is a fantastic opportunity to join a fast-moving,
                          growing business in a fun and dynamic team that is
                          always ready to go the extra mile. You are a brilliant
                          creative problem solver, highly skilled at turning
                          briefs into delicious, mouth-watering creations to
                          inspire and help customers with their grocery shopping
                          decisions. You know how to sell a big idea, defend
                          creative work and how to make it all stand out in a
                          world cluttered with average advertising and mediocre
                          merchandising.
                        </p>
                        <p>
                          As a junior, with over seven eight years of
                          experience, you lead teams to think about the customer
                          journey from awareness to consideration and bring it
                          all together, considering every touch point. You
                          understand composition, styling, hierarchy and are
                          excellent at managing expectations both internally and
                          externally. You thrive by bringing people together,
                          collaborating and inspiring. You are the type of
                          person who says yes to bigger thinking, loves being in
                          a team, who gets things done and is the centre of
                          change; You will set the bar with all things art
                          direction across all channels.
                        </p>
                        <p>Hese Are The Main Responsibilities Of The Role:</p>
                        <p>
                          Art direction specialism. Capable of creating
                          concepts, presenting and producing work that can live
                          across all channels and stand out in a cluttered
                          environment. Digital channel expertise. Their world is
                          digital; print and out of home is a small part of
                          their overall mix. You’ll need to understand how to
                          create brilliant social-first, digital-first,
                          mobile-first campaigns. Usability and accessibility.
                          Understand the needs of the customer and create
                          campaigns that will put them top of mind.
                        </p>
                        <p>
                          Presentation skills. Use scamps, moodboards and other
                          presentation material to present your work to
                          colleagues and/or business partners. <br />{" "}
                          Team-first. Take ownership of projects and work across
                          teams and with Leads to ensure that the concepts come
                          to life by following through on what was presented and
                          approved. <br /> Alignment. Share and align on
                          creative ideas, concepts and campaigns with team
                          members and leads before presenting them. <br /> Brand
                          guardianship. Ensure that all work adheres to their
                          brand guidelines.
                        </p>
                        <p>
                          If you are interested in this opportunity and think
                          you would be a good fit, apply today.
                        </p>
                      </div>
                      <div className=" mt-5">
                        <a
                          href="/"
                          data-toggle="modal"
                          data-dismiss="modal"
                          data-target="#Modal-careers2"
                        >
                          <input
                            type="submit"
                            value="APPLY Now"
                            className="btn btn-primary rounded-0 btn-round font-black  footer-modal-btn mt-1 scroll "
                          ></input>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal-careers */}
      <div
        className="modal fade default search-modal footer-careers-cont-u"
        id="Modal-careers2"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content m-modal-content">
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
              <div className="hero-center-wrap move-top">
                <div className="container">
                  <div className="row justify-content-center language-modal-p">
                    <div className="col-12">
                      <div className="userAuthBrand py-5">
                        <a href="/">
                          <img
                            alt=""
                            src="img/Logo2.png"
                            className="m-auto d-block nLogo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row footer-careers-cont">
                    <div className="col-md-6">
                      <h2 className="text-white font-regular">Careers</h2>
                      <p className="text-white font-regular">
                        We empower people to shape the sustainable future of
                        brands. If you have the same desire to make a positive
                        difference, come and join us!
                      </p>

                      <form className="userAuthForm">
                        <div className="subscribe-box-1 mb-3">
                          <input
                            type="text"
                            name="fname"
                            placeholder="First Name"
                            className="form-control"
                          />
                        </div>
                        <div className="subscribe-box-1 mb-3">
                          <input
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            className="form-control"
                          />
                        </div>
                        <div className="subscribe-box-1 mb-3">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>
                        <div className="subscribe-box-1 mb-3">
                          <div {...getRootProps({ style })} className="">
                            <input {...getInputProps()} />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="mb-3"
                              width="96.001"
                              height="61.939"
                              viewBox="0 0 96.001 61.939"
                            >
                              <path
                                id="Icon"
                                d="M1088.806,449.967A17.665,17.665,0,0,1,1077.9,418.3a15.2,15.2,0,0,1,15.127-15.207,14.919,14.919,0,0,1,6.317,1.4,26.813,26.813,0,0,1,50.056,1.532,22.213,22.213,0,0,1-4.467,43.942h-12.647a1.56,1.56,0,0,1,0-3.119h12.647a19.087,19.087,0,0,0,3.046-37.91l-.941-.156-.29-.913a23.732,23.732,0,0,0-45.13-.652l-.638,1.837-1.639-1.024a11.938,11.938,0,0,0-6.314-1.818,12.088,12.088,0,0,0-12.03,12.118l.077,1.3-.713.713a14.542,14.542,0,0,0,8.186,26.5l.316,0c.151,0,.31.009.461,0h16.4a1.56,1.56,0,0,1,0,3.119H1089.4c-.074.006-.166.006-.272.006Zm28.648-1.563V420.928l-13.531,13.626a1.544,1.544,0,0,1-2.189,0,1.57,1.57,0,0,1,0-2.2l16.172-16.289,0,0,1.094-1.1,1.093,1.1,0,0,16.17,16.289a1.567,1.567,0,0,1,0,2.2,1.546,1.546,0,0,1-2.19,0l-13.53-13.626V448.4a1.548,1.548,0,1,1-3.1,0Z"
                                transform="translate(-1070.999 -388.031)"
                                fill="#b13166"
                              />
                            </svg>

                            <span className="dropzone-icon-span">
                              Upload Your Resume
                            </span>
                            <span className="dropzone-icon-span">
                              (2 MB Max)
                            </span>
                          </div>
                        </div>
                        <div className="subscribe-box-1 mb-3">
                          <input
                            type="text"
                            name="plink"
                            placeholder="Portfolio Link"
                            className="form-control"
                          />
                        </div>
                        <div className="subscribe-box-1 mb-3">
                          <textarea
                            name="message"
                            className="form-control  font-light"
                            rows="5"
                            placeholder="Describe Your Interest"
                          ></textarea>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12">
                            <div className="checkbox primary line-icon on-light">
                              <input
                                type="checkbox"
                                id="Accepttermofjobscareer"
                                name="remember_token"
                              />
                              <label
                                htmlFor="Accepttermofjobscareer"
                                className="text-white"
                              >
                                I Have Read And Accept Terms & Conditions
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="checkbox primary line-icon on-light">
                              <input
                                type="checkbox"
                                id="rememberMejobs"
                                name="remember_token"
                              />
                              <label
                                htmlFor="rememberMejobs"
                                className="text-white"
                              >
                                Send Me The Newsletter
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col-12">
                            <a
                              href="/"
                              data-toggle="modal"
                              data-dismiss="modal"
                              data-target="#Modal-Received"
                            >
                              <input
                                type="submit"
                                value="Send Application"
                                className="btn btn-primary rounded-0 btn-round font-black btn-long mt-1 scroll w-100"
                              ></input>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <div className="authLogin_Art">
                        <img
                          src="img/Group426.png"
                          alt=""
                          className="d-block m-auto"
                        />
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

export default Job;
