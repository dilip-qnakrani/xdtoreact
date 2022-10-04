import React from "react";

const Info = ({ bgtext, title, subtitle }) => {
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
                <div className=" main-title-div mb-4">
                  We Build&nbsp;
                  <span className="main-title-div-span m-color">
                    Brand Personas
                  </span>
                </div>
                <p className="main-title-p">
                  Research has shown that out of every 100 people, 90 merely
                  consume content, 9 will like, share or react to what is
                  created, and only 1 will actually create something. And this
                  is no different for consumers. When innovating for the future,
                  you need to use the right people at the right time. We know
                  that 90% of people validate, 9% curate and 1% creates. Our
                  design model is to bring cutting-edge design and thinking to
                  the everyday realm of businesses. We help our clients to drive
                  innovation, transformation, and growth within the MENA region.
                </p>
                <p className="main-title-p mt-3">
                  We have a global community of designers, photographers, chefs,
                  musicians and other creative monsters looking for the next
                  challenge.
                  <br />
                  <span className="m-color">
                    Send us your design problem so can help you solve your
                    brand’s most challenging issues.
                  </span>
                </p>
                <button className="btn main-title-button text-capitalize btn-primary btn-round mt-md-4  mt-lg-0 btn-long scroll">
                  Let’s Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
