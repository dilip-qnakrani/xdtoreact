import React from "react";

const Challenge = ({ bgtext, title, subtitle, img }) => {
  return (
    <div>
      {/* Services & Call To Action Block
==================================================  */}

      <div
        className="section padding-top-bottom background-white over-hide"
        id="scroll-top"
      >
        <div className="big-fade-title on-light text-center">{bgtext}</div>
        <div className="container z-bigger">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="main-title text-center">
                {/* <div className="main-subtitle-top mb-4">welcome</div> */}
                <h3 className="big-fade-title-h3">{title}</h3>
                <div className="main-subtitle-bottom ">{subtitle}</div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="col-lg-4 mt-lg-4">
              <div className=" bigger-icon mb-5">
                <p className="mt-3 text-center p-challenge-teaxt">
                  We have a global community of designers, photographers, chefs,
                  musicians and other creative monsters <br />
                  <span className="p-challenge-p">looking for the next.</span>
                </p>
              </div>
              <div className="bigger-icon mt-4 mt-5">
                <p className="mt-3 text-center p-challenge-desc">
                  Get your artwork seen by big brands and creatives. Submit to
                  an open brief today and check your inbox for invitations to
                  closed brief projects.
                </p>
                <p className="text-center p-challenge-desc mt-0">
                  We are the leading job hub for creatives and design jobs. We
                  provide creatives with access to the best creative jobs in the
                  industry across all design disciplines.
                </p>
              </div>
              <div className="text-center ">
                <p className="p-challenge-teaxt">
                  Are You <span className="p-challenge-p">Ready?</span> <br />{" "}
                  <span>Let’s work…</span>
                </p>
              </div>
            </div>
            <div
              className="col-lg-8 mt-4 mt-lg-0 text-center"
              data-scroll-reveal="enter bottom move 40px over 0.8s after 0.2s"
            >
              <img src={img} className="p-challenge-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
