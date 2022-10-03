import React from "react";
import { Link } from "react-router-dom";

const BlogDetail = () => {
  return (
    <div>
      {/* <!-- Post Block
	================================================== --> */}

      <div className="section pt-5 background-grey over-hide">
        <div className="p-container">
          <div className="row justify-content-start">
            <div className="col-lg-9">
              <div className="section rounded">
                <div className="blog-box-2 blog-home  over-hide">
                  <div className=" ">
                    <img
                      src="img/blog-detail-3.png"
                      alt=""
                      className="blog-home-img"
                    />
                    <p className="mt-4">
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Curabitur blandit tempus porttitor. Integer posuere erat a
                      ante venenatis dapibus posuere velit aliquet. Cras justo
                      odio, dapibus ac facilisis in, egestas eget quam.
                      Vestibulum id ligula porta felis euismod semper. Donec id
                      elit non mi porta gravida at eget metus. Vestibulum id
                      ligula porta felis euismod semper.
                    </p>
                    <p>
                      Integer posuere erat a ante venenatis dapibus posuere
                      velit aliquet. Cras mattis consectetur purus sit amet
                      fermentum. Donec id elit non mi porta gravida at eget
                      metus.
                    </p>
                    <div className="separator-wrap my-3">
                      <div className="clear"></div>
                    </div>
                    <video
                      className="blog-home-video mt-5"
                      controls
                      src="img/icons/video-blog.mp4"
                    ></video>

                    <p className="mt-4">
                      For head-worn devices to remain comfortable and
                      functional, Hubert said, their developers will have to
                      solve a vexing engineering challenge. To avoid the weight
                      of a long wire and to steer clear of the heat, the
                      division decided that the shoulders would be the most
                      ideal location for the chip.
                    </p>
                    <p>
                      Viture One’s engineers have incorporated subtle and
                      innovative details. These include partially hidden dials
                      at the top of the frames that adjust the position of the
                      lenses, enabling short-sighted people to use Viture One
                      without their spectacles or contact lenses.
                    </p>
                    <p>
                      The device supports many streaming services and gaming
                      platforms, including GeForce Now, Stadia, Xbox Cloud,
                      YouTube, and Twitch. It promises a zero-lag, 60 frames per
                      second viewing experience in 1080p HD video mode.
                    </p>
                  </div>
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
                          <button className="btn-black">
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
                  <div className="col-md-6 col-sm-12 col-lg-12">
                    <div className=" float-inline quarter my-4  drop-shadow rounded">
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
                </div>
              </div>
            </div>
            {/* <ul className="founder-social mb-4 ml-2">
              <li className="mr-2 "> Share: </li>
              <li className="facebook">
                <a href="/">Fb</a>
              </li>
              <li className="twitter">
                <a href="/">In</a>
              </li>
              <li className="google">
                <a href="/">Ln</a>
              </li>
              <li className="vimeo">
                <a href="/">Yt</a>
              </li>
            </ul> */}
            <div className="section clearfix ml-2">
              <ul className="post-social">
                <li>
                  <strong>Share:</strong>
                </li>
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
            <div className="separator-wrap pt-4 pb-4">
              <span className="separator">
                <span className="separator-line dashed"></span>
              </span>
            </div>
            {/* <div className="separator-wrap mb-4">
              <span className="separator">
                <span className="separator-line dashed"></span>
              </span>
            </div> */}
          </div>
        </div>
      </div>

      {/* <!-- Nex Prev Block
	================================================== --> */}

      <div className="section padding-top-bottom   background-grey over-hide">
        <div className="p-container">
          <div className="row">
            <div className="col-md-12">
              <div className="project-nav-wrap">
                <a href="/blog-details">
                  <div
                    className="left-nav"
                    data-scroll-reveal="enter left move 60px over 0.7s after 0.1s"
                  >
                    old<div className="text-on-hover">Old Blog</div>
                  </div>
                </a>
                <a href="/blog-details">
                  <div
                    className="right-nav"
                    data-scroll-reveal="enter right move 60px over 0.7s after 0.1s"
                  >
                    new<div className="text-on-hover">New Blog</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
