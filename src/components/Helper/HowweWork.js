import React from "react";

const HowweWork = ({ bgtext, title, subtitle, data, img }) => {
  return (
    <div>
      {/* Services & Call To Action Block
	==================================================  */}

      <div
        className="section padding-top padding-bottom-smaller background-white over-hide"
        id="scroll-top"
        style={{ zIndex: 3000 }}
      >
        <div className="big-fade-title on-light text-center">{bgtext}</div>
        <div className="container z-bigger">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="main-title text-center">
                {/* <div className="main-subtitle-top mb-4">welcome</div> */}
                <h3 className="big-fade-title-h3">{title}</h3>
                <div className="main-subtitle-bottom ">{subtitle}</div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="col-lg-4 mt-lg-4">
              <div
                className="services-box-3 bigger-icon"
                data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s"
              >
                <h5>
                  <i className="funky-ui-icon">1</i>
                  {data[0].title}
                </h5>
                <p className="mt-3">{data[0].subtitle}</p>
              </div>
              <div
                className="services-box-3 bigger-icon mt-4 mt-lg-5"
                data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s"
              >
                <h5>
                  <i className="funky-ui-icon">3</i>
                  {data[2].title}
                </h5>
                <p className="mt-3">{data[2].subtitle}</p>
              </div>
            </div>
            <div className="col-lg-4 mt-4">
              <div
                className="services-box-3 bigger-icon"
                data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s"
              >
                <h5>
                  <i className="funky-ui-icon">2</i>
                  {data[1].title}
                </h5>
                <p className="mt-3">{data[1].subtitle}</p>
              </div>
              <div
                className="services-box-3 bigger-icon mt-4 mt-lg-5"
                data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s"
              >
                <h5>
                  <i className="funky-ui-icon">4</i>
                  {data[3].title}
                </h5>
                <p className="mt-3">{data[3].subtitle}</p>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0 text-center"
              data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s"
            >
              <img src={img} className="how_we_work" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowweWork;
