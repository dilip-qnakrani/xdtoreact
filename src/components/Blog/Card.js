import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      {/* <!-- Blog Block
	================================================== --> */}

      <div className="section py-md-5 px-md-5 py-xs-3 background-grey over-hide">
        <div className="p-container">
          <div className="row">
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-dark-3 over-hide">
                  <div className="card-add-box">
                    <h1 className="mt-2 mb-2 card-add-box-text">
                      Subscribe Now to get the latest updates
                    </h1>
                    <input
                      className="form-control input-black"
                      placeholder="enter your e-mail…"
                      type="text"
                    />
                    <a
                      href="/"
                      data-toggle="modal"
                      data-dismiss="modal"
                      data-target="#Modal-Received-blog"
                    >
                      <button className="btn btn-black">
                        ADD ME TO THE BLACKLIST
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-lg-6 mt-4">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-pink over-hide">
                  <div className="card-add-box-2 text-center">
                    <h1 className="mt-2 mb-2 card-add-box-text-2">
                      Get Your Message Out <br /> Here!
                    </h1>
                    {/* <p className="card-add-box-price-2 pb-0 mb-0">1000</p> */}
                    <div className="card-add-box-price mt-3">
                      <sup>US$</sup>1000
                    </div>
                    <p className="card-add-box-desc-2">
                      Weekly | Dynamic Advertise
                    </p>
                    <a
                      href="/"
                      data-toggle="modal"
                      data-dismiss="modal"
                      data-target="#Modal-blog"
                    >
                      <button className="btn  btn-center">Order Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-lg-3 mt-4">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-2.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
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
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-4.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-5.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-6.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-7.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
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
                    <a
                      href="/"
                      data-toggle="modal"
                      data-dismiss="modal"
                      data-target="#Modal-blog"
                    >
                      <button className="card-add-btn">Order Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-1.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-2.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
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
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-4.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-5.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-6.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
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
                    <a
                      href="/"
                      data-toggle="modal"
                      data-dismiss="modal"
                      data-target="#Modal-blog"
                    >
                      <button className="card-add-btn">Order Now</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-8.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-1.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-6  col-lg-3 mt-4 ">
              <div className=" float-inline quarter  drop-shadow rounded">
                <div className="blog-box-1 blog-home background-white over-hide">
                  <img
                    src="img/blog-img-2.png"
                    alt=""
                    className="blog-home-img"
                  />
                  <div className="padding-in">
                    <Link to="/blog-details">
                      <h5 className="pt-4 mt-0">Don’t get lost.</h5>
                    </Link>
                    <p className="mt-2 mb-4 card-text">
                      Design must reflect the practical and aesthetic in
                      business but above all... good design must primarily serve
                      people.
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
            <div className="col-md-12  col-lg-12 my-5 text-center ">
              <button type="button" className=" btn-load-more">
                Load More News
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal-budget  */}
      <div
        className="modal fade default search-modal"
        id="Modal-blog"
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
                      <div className="m-color-bg-white box-modal blog-box-modal text-center modal-form-budget  ">
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
                              <input
                                type="number"
                                name="Amount"
                                placeholder="Select An Amount"
                                className="form-control"
                              />
                            </div>
                            <div className="subscribe-box-1 mb-3 col-10">
                              <a href="/">
                                <button
                                  type="button"
                                  value="Order Now"
                                  placeholder="Last Name"
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

      {/* Modal-blog-Received */}
      <div
        className="modal fade default search-modal"
        id="Modal-Received-blog"
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
                      <div className="m-color-black box-modal budget-box-modal text-center ">
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
                        <p className="box-modal-title my-3">ONE LAST THING</p>
                        <p className="box-modal-subtitle">
                          CONFIRM YOUR SUBSCRIPTION
                          <br />
                          Check Your Email
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

export default Card;
