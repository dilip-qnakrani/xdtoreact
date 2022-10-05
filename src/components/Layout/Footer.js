import React, { useMemo } from "react";
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

const Footer = () => {
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
      {/* Footer Light Block
	==================================================  */}
      <div className="section padding-top-smaller over-hide footer-1">
        <div className="m-container mb-5">
          <div className="row">
            <div className="col-lg-4  col-md-6">
              <ul className="list-style">
                <li className="mb-4">
                  <img src="/img/logo-black.png" alt="" />
                </li>
                <li className="footer-text">
                  <p>
                    Is an enterprising firm which improves people’s lives
                    through the use of design. We celebrate, advocate and
                    actively pursue purposeful design for public benefit.
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-3  col-md-6 mt-4 ">
              <div id="Group_78">
                <div id="Quick_Links">
                  <div id="QUICK_LINKS">
                    <span>QUICK LINKS</span>
                  </div>
                  <div id="About_us_Privacy">
                    <span>
                      <a
                        href="/"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#Modal-aboutus"
                      >
                        About us
                      </a>
                      <br />
                      <a
                        href="/"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#Modal-privacy"
                      >
                        Privacy
                      </a>
                    </span>
                  </div>
                  <div id="Careers_Terms">
                    <span>
                      <a
                        href="/"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#Modal-careers"
                      >
                        Careers
                      </a>
                      <br />
                      <a
                        href="/"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#Modal-terms"
                      >
                        Terms
                      </a>
                    </span>
                  </div>
                  <div id="Contact_FAQs">
                    <span>
                      <a
                        href="/"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#Modal-contact"
                      >
                        Contact
                      </a>
                      <br />
                      <a
                        href="/"
                        data-toggle="modal"
                        data-dismiss="modal"
                        data-target="#Modal-faqs"
                      >
                        FAQ’s
                      </a>
                    </span>
                  </div>
                </div>
                <svg className="Line_jl">
                  <rect
                    id="Line_jl"
                    rx="0"
                    ry="0"
                    x="0"
                    y="0"
                    width="270"
                    height="1"
                  ></rect>
                </svg>
                <svg className="Line_jm">
                  <rect
                    id="Line_jm"
                    rx="0"
                    ry="0"
                    x="0"
                    y="0"
                    width="270"
                    height="1"
                  ></rect>
                </svg>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 mt-4 ">
              <h6>Newsletter</h6>
              <p className="mt-1">
                <small>
                  We promise that we won't spam you, <strong>Never!</strong>
                </small>
              </p>
              <div className="subscribe-wrap">
                <input
                  type="text"
                  placeholder="Email address"
                  className="rounded-form-control form-control"
                  onChange={(e) => console.log(e.target.value)}
                />
                <button
                  className="btn btn-round btn-primary btn-icon subscribe-footer"
                  type="submit"
                  value=""
                >
                  SEND
                </button>
              </div>
            </div>
            <div className="col-lg-2  col-md-6 mt-4  text-lg-center">
              <h6>Download</h6>
              <ul className="list-style">
                <li>
                  <img src="/img/icons/playstore.png" alt="" />
                </li>
                <li>
                  <img src="/img/icons/appstore.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section background-black over-hide footer-1 dark">
        <div className="container scd-foot pt-4 pb-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="footer-con">
                <p className="mb-0">
                  Copyrights © 2022 All Rights Reserved by &nbsp;
                  <a href="/" target="_blank">
                    MENAMONSTERS
                  </a>
                </p>
                <ul className="footer-social m-0 ml-2">
                  <li className="twitter">
                    <a href="/">Tw</a>
                  </li>
                  <li className="facebook">
                    <a href="/">Fb</a>
                  </li>
                  <li className="google">
                    <a href="/">G+</a>
                  </li>
                  <li className="vimeo">
                    <a href="/">Vm</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal-faqs */}
      <div
        className="modal fade default search-modal"
        id="Modal-faqs"
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
                      <h5 className="text-white footer-text-title">
                        Moving Forward FAQ’s
                      </h5>
                      <p className="text-white footer-text-subtitle mb-2">
                        Answers To Common Questions
                      </p>
                      <div className="footer-text-p">
                        <p className="mb-1 m-color">What is MENAMONSTERS?</p>
                        <p>
                          MENAMONSTERS is a new breed of talent agency operating
                          in the Middle East and North Africa region, connecting
                          local and international brands, agencies, and creative
                          minds to grow their businesses. We offer branding,
                          social media, interactive and digital marketing
                          services to make prospects reality.
                        </p>
                        <p className="mb-1 m-color">
                          What is the story behind the name ?
                        </p>
                        <p>
                          The name “Monsters” stems from a metaphor used in the
                          Middle East and North Africa to describe talented and
                          professional designers, who are described as monsters
                          in design when they are talented or experienced in
                          their field. This company aims is to empower and to
                          highlight the best designers in the region.
                        </p>
                        <p className="mb-1 m-color">
                          What services do you provide?
                        </p>
                        <p>
                          We help by constructing bridges that connect people
                          together, thereby creating a support system for
                          creativity, encouraging the input of new people and
                          groups, and supporting innovation. We develop unique
                          brands, design experiences, content strategies,
                          digital marketing, social media campaigns and more.
                        </p>
                        <p className="mb-1 m-color">What is co-creation?</p>
                        <p>
                          Is when people come together to share their skills and
                          knowledge in order to create new ideas that benefit
                          everyone involved. In order to become a global
                          success, you’ll need to build a network of contacts in
                          the business. By providing distribution and marketing
                          support as well as community building, we help brands
                          and designers reach their full potential.
                        </p>
                        <p>
                          If you have an unanswered question, We are always glad
                          to hear from you:&nbsp;
                          <a
                            href="mailto:support@menamonsters.com"
                            className="m-color"
                          >
                            support@menamonsters.com
                          </a>
                        </p>
                      </div>
                      <div className="text-right mt-5">
                        <img src="img/icons/Group431.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal-terms */}
      <div
        className="modal fade default search-modal"
        id="Modal-terms"
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
                      <h5 className="text-white footer-text-title">
                        Site Usage Agreement
                      </h5>
                      <p className="text-white footer-text-subtitle mb-2">
                        Terms And Conditions
                      </p>
                      <div className="footer-text-p">
                        <p>
                          Prior to using MENAMONSTERS Website, the User must
                          accept the Site Usage Agreement when opening a User
                          account and when uploading each Submission. Once the
                          User has accepted the Site Usage Agreement, he must
                          abide by its provisions. If he does not agree with the
                          content of the Site Usage Agreement and if the User
                          does not accept the conditions and obligations set
                          forth in this agreement, he should not use the
                          MENAMONSTERS Service.
                        </p>
                        <p>
                          The User represents that he has the capacity to enter
                          into this Agreement. If the User is below the age of
                          18, he must have been authorized to use MENAMONSTERS
                          Website by his parents or guardian. All individuals
                          and legal entities, acting alone or representing third
                          parties, may use the MENA Monsters Website, regardless
                          of whether they perform a professional, commercial or
                          other activity. If the User is acting in the name and
                          on behalf of his employer, he must have been granted
                          the relevant authority or power.
                        </p>
                        <p>
                          The purpose of the Contests is to enable Users to make
                          Submissions complying with the guidelines defined in
                          the Rules in order to be uploaded onto the
                          MENAMONSTERS Website, selected by the Client, and then
                          be used by this Client in the conditions defined in
                          the Rules. Conditions of participation, notably the
                          guidelines regarding accepted Submissions are defined
                          in the Rules issued for each Contest.
                        </p>
                        <p>
                          Before participating in a Contest, the User undertakes
                          to carefully read the Rules of participation and
                          undertakes to abide by these Rules for the whole
                          duration of his/her participation. The winners are
                          responsible for the declaration of these payments to
                          their tax authorities and for the payment of all taxes
                          at applicable rates which may be due as a result of
                          receiving these prizes, where and to the extent
                          applicable.
                        </p>
                        <p>
                          In case a User account is suspended, the User may no
                          longer upload Submissions onto MENAMONSTERS Website.
                          However, the User may access his personal details, his
                          User account and the Submissions uploaded to his User
                          account. The illicit content will be removed from the
                          MENA Monsters Website and will no longer be
                          accessible.
                        </p>
                        <p>
                          The personal details required to create a User account
                          on the MENAMONSTERS Website and those provided
                          afterwards by the User in his User account are
                          processed by MENAMONSTERS Website.
                        </p>
                      </div>
                      <div className="text-right mt-5">
                        <img src="img/icons/Group431.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal-privacy */}
      <div
        className="modal fade default search-modal"
        id="Modal-privacy"
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
                      <h5 className="text-white footer-text-title">
                        Rules Are Not Scary… Principles Are!
                      </h5>
                      <p className="text-white footer-text-subtitle mb-2">
                        Privacy Policy
                      </p>
                      <div className="footer-text-p">
                        <p>
                          MENAMONSTERS implements digital, organizational,
                          technical, software and physical security measures in
                          accordance with state of the art technology in order
                          to protect personal data against accidental or
                          unlawful unauthorized loss, destruction, alteration
                          and access.
                        </p>
                        <p>
                          Menamonsters service including the organization of
                          crowdsourcing contests on the menamonsters website,
                          and all services provided by menamonsters on its
                          website, in order to carry out the management of the
                          users, to identify the users, for user support
                          purposes, to communicate with the users, and to pay
                          the winners of the contests. Such processing is
                          necessary for the performance of the contract setting
                          forth the terms and conditions of the menamonsters
                          website binding menamonsters and the users. To
                          communicate via email with the users about the
                          contests organized on the menamonsters website.
                        </p>
                        <p>
                          The purpose of the contests is to enable users to make
                          submissions complying with the guidelines defined in
                          the rules in order to be uploaded onto the mena
                          monsters website, selected by the client, and then be
                          used by this client in the conditions defined in the
                          rules. Conditions of participation, notably the
                          guidelines regarding accepted submissions are defined
                          in the rules issued for each contest.
                        </p>
                        <p>
                          Before participating in a contest, the user undertakes
                          to carefully read the rules of participation and
                          undertakes to abide by these rules for the whole
                          duration of his/her participation. The winners are
                          responsible for the declaration of these payments to
                          their tax authorities and for the payment of all taxes
                          at applicable rates which may be due as a result of
                          receiving these prizes, where and to the extent
                          applicable. The personal details required to create a
                          user account on the mena monsters website and those
                          provided afterwards by the user in his user account
                          are processed by monsters website.
                        </p>
                        <p>
                          Data are stored for a maximum period of one (1) year
                          upon the closing of the account by the user, provided
                          it is not necessary information for the execution of
                          the transfer of rights agreement. We empower people to
                          shape the sustainable future of brands. If you have
                          the same desire to make a positive difference, come
                          and join us!
                        </p>
                      </div>
                      <div className="text-right mt-5">
                        <img src="img/icons/Group431.png" alt="" />
                      </div>
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
        id="Modal-aboutus"
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
                      <h5 className="text-white footer-text-title">
                        Who We Are
                      </h5>
                      <p className="text-white footer-text-subtitle mb-2">
                        Destination
                      </p>
                      <div className="footer-text-p">
                        <p>
                          The world is demanding innovation in complex systems
                          in almost every sector of the economy. This demand for
                          innovation and creativity should met with the hope
                          that people will think their way into new solutions on
                          their own, but with an emphasis on teaching and
                          learning tactical tools and processes. Human-Centered
                          Design is one of these processes; mastery of its
                          methods leads to improvement and innovation.
                        </p>
                        <p>
                          Our purpose is to make life better by design. We are
                          independent firm advisor on design. Our vision is a
                          world where the role and value of design is recognized
                          as a fundamental creator of value, enabling happier,
                          healthier and safer lives for all. Through the power
                          of design, we make better places, better products,
                          better processes and better performance.
                        </p>
                        <p>
                          MENAMONSTERS is an enterprising firm which improves
                          people’s lives through the use of design. We
                          celebrate, advocate and actively pursue purposeful
                          design for public benefit.
                        </p>
                        <p>
                          Leading business by design is our research, we looking
                          at the evolving role of design in some of the world’s
                          leading businesses. Design has moved beyond the
                          sketchpad and into the boardroom, where it is being
                          used at a strategic level to drive innovation. We
                          build a smooth mechanism and channels of international
                          cooperation, promoting exchange of knowledge in the
                          Design Industry.
                        </p>
                        <p>
                          We have a community of creative people who are
                          constantly looking to put their creative brains to
                          solve some of the most challenging problems in the
                          world.
                        </p>
                        <p>
                          With our of expertise in campaigns, outreach, and
                          creative solutions, we have a unique perspective for
                          developing best practices and custom-fit solutions for
                          organizations so your staff can stay focused on what
                          really matters - changing lives.
                        </p>
                      </div>
                      <div className="text-right mt-5">
                        <img src="img/icons/Group431.png" alt="" />
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
        id="Modal-careers"
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
                                id="Accepttermofcareer"
                                name="remember_token"
                              />
                              <label
                                htmlFor="Accepttermofcareer"
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
                                id="rememberMefooter"
                                name="remember_token"
                              />
                              <label
                                htmlFor="rememberMefooter"
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

      {/* Modal-careers-Received  */}
      <div
        className="modal fade default search-modal"
        id="Modal-Received"
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
                    <div className="col-md-4 budget-m">
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
                          We received your application and thank you, again, for{" "}
                          <br />
                          your interest in our company. We do appreciate the
                          <br />
                          time that you invested in this application
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

      {/* Modal-contact */}
      <div
        className="modal fade default search-modal footer-careers-cont-u"
        id="Modal-contact"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content ">
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
                  <div className="row footer-careers-cont">
                    <div className="col-md-12">
                      <h5 className="text-white footer-text-title">
                        Get In Touch With Us
                      </h5>
                      <p className="text-white footer-text-subtitle mb-4">
                        We Provide A Complete Services For Creative Industry
                      </p>

                      <form className="userAuthForm">
                        <div className="row">
                          <div className="subscribe-box-1 mb-3 col-lg-6 col-12">
                            <label htmlFor="">Name</label>
                            <input
                              type="text"
                              name="lname"
                              placeholder="Last Name"
                              className="form-control"
                            />
                          </div>
                          <div className="subscribe-box-1 mb-3 col-lg-6 col-12">
                            <label htmlFor="">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="subscribe-box-1 mb-3">
                          <textarea
                            name="message"
                            className="form-control  font-light"
                            rows="8"
                            placeholder="Please describe your Message in details"
                          ></textarea>
                        </div>
                        <div className="row mb-2">
                          <div className="col-12">
                            <div className="checkbox primary line-icon on-light">
                              <input
                                type="checkbox"
                                id="Accepttermofcontact"
                                name="remember_token"
                              />
                              <label
                                htmlFor="Accepttermofcontact"
                                className="text-white"
                              >
                                I Agree To The Privacy Policy
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
                              data-target="#Modal-Received-contact"
                            >
                              <input
                                type="submit"
                                value="Send"
                                className="btn btn-primary rounded-0 btn-round font-black  footer-modal-btn mt-1 scroll "
                              ></input>
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="text-right mt-5">
                    <img src="img/icons/Group431.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal-contact-Received  */}
      <div
        className="modal fade default search-modal"
        id="Modal-Received-contact"
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

export default Footer;
