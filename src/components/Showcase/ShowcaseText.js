import React from "react";

const ShowcaseText = ({ bgtext, title, subtitle }) => {
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
                  <span className="">Engage Monsters For&nbsp;</span>
                  <span className="main-title-div-span  m-color">
                    Quality Creative Solutions
                  </span>
                </div>
                <p className="main-title-p">
                  MENAMONSTERS is committed to protecting and respecting your
                  privacy, and we’ll only use your personal information to
                  provide the products and services you requested from us. From
                  time to time, we would like to contact you about our products
                  and services, as well as other content that may be of interest
                  to you. If you consent to us contacting you for this purpose,
                  please tick below to say how you would like us to contact you:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseText;
