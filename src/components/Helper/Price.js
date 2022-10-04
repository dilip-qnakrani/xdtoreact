import React from "react";

const Price = ({ bgtext, title, subtitle }) => {
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
                <p className="main-title-p">
                  We work with you to redefine your brand by identifying goals
                  and directing your image to reach your target audience. Every
                  company has a story that makes them unique, and that story
                  should be articulated in a clear and intelligent manner. Our
                  reputation is one of excellent customer service and
                  exceptional branding and much more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 text-center">
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="pricing ">
                <h3>Onset</h3>
                <div className="pricing-sub mb-4">
                  This approach is ideal for startup companies
                </div>
                <div className="pricing-per mt-2">starting from</div>
                <div className="pricing-price mt-3">
                  <sup>US$</sup>10,000
                </div>
                <ul className="list-style mt-4 text-left">
                  <li>
                    <i className="fa fa-check-circle-o"></i>Creative Concept
                    Briefing
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Rewrite Of Content
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Data And File
                    Storage
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Logo Showcase
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Email Marketing
                    (Fight)
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Promo Across Web, &
                    Social
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Campaign Reporting
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>One Job Advert For
                    Free
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 ">
              <div className="pricing pricing-active">
                <h3 className="m-color">Discovery</h3>
                <div className="pricing-sub mb-4">
                  If you’re interested in bringing your ideas to life
                </div>
                <div className="pricing-per mt-2">starting from</div>
                <div className="pricing-price mt-3">
                  <sup>US$</sup>25,000
                </div>

                <ul className="list-style mt-4 text-left">
                  <li>
                    <i className="fa fa-check-circle-o"></i>Creative Concept
                    Briefing
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>New Content Creation
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Data And File
                    Storage
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Custom Artwork (One)
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Branding Showcase
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Email Marketing
                    (Fight)
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Paid Across Web, &
                    Social
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Campaign Reporting
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Three Job Advert For
                    Free
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4">
              <div className="pricing">
                <h3>Patronage</h3>
                <div className="pricing-sub mb-4">
                  For brands that lives up to the hype
                </div>
                <div className="pricing-per mt-2">starting from</div>
                <div className="pricing-price mt-3 ">
                  <sup>US$</sup>50,000
                </div>

                <ul className="list-style mt-4 text-left">
                  <li>
                    <i className="fa fa-check-circle-o"></i>Powerful Concept
                    Briefing
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Creative Content
                    Creation
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Data And File
                    Storage
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Custom Fight
                    Character
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Branding & Design
                    Showcase
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Ad & News In Our (M)
                    Website
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Five Job Advert For
                    Free
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Email Marketing
                    (Fight)
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Paid Across Web, &
                    Social
                  </li>
                  <li>
                    <i className="fa fa-check-circle-o"></i>Custom Campaign
                    Reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row price-bottom">
            <div className="col-md-8 price-bottom-text">
              <div>
                <h5>
                  Inspiring <span className="m-color"> New Ideas</span>
                </h5>
              </div>
              <div>
                <p>
                  We’d love to showcase what our creatives monsters can do for
                  your brand.
                </p>
              </div>
            </div>
            <div className="col-md-3 price-bottom-button m-auto text-center ">
              <button className="btn text-capitalize btn-primary btn-round mt-md-4  mt-lg-0 btn-long scroll">
                Let’s Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
