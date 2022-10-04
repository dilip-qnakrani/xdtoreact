import React from "react";

const Actionblog8 = ({ title, subtitle, bgtext, description }) => {
  return (
    <div>
      {/* Call To Action Block
	==================================================  */}

      <div className="section padding-top-bottom-smaller background-white z-bigger-2">
        <div className="big-fade-title on-light text-center">{bgtext}</div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className=" text-center">
                <h3 className="mt-5 p-title" style={{ fontWeight: "bold" }}>
                  {title}
                </h3>
                <p className="p-subtitle">{subtitle}</p>
                <p>
                  We Have Many Live Hunts For Your Skills Join us for changing
                  opportunities, discover great fights and connect with emerging
                  monsters from around the MENA region countries.{" "}
                  <span className="m-color">
                    A leading resource for the design community, with an
                    extensive network of recruiters and hiring companies
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionblog8;
