import React from "react";

const Actionblog5 = ({ title, subtitle, bgtext }) => {
  return (
    <div>
      {/* Call To Action Block
	==================================================  */}

      <div className="section padding-top-bottom-smaller background-white z-bigger-2">
        <div className="big-fade-title on-light text-center">{bgtext}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-box-4 text-center">
                <h3 className="mb-1">{title}</h3>
                <a
                  href="#scroll-top"
                  className="btn btn-primary btn-round btn-long mt-3 scroll mb-5"
                >
                  {subtitle}
                </a>
                <p>
                  We Have Many Live Hunts For Your Skills Join us for changing
                  opportunities, discover great fights and connect with emerging
                  monsters from around the MENA region countries. Get your
                  artwork seen by big brands and creatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionblog5;
