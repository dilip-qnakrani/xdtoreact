import React from "react";

const Actionblog6 = ({ title, subtitle, bgtext }) => {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionblog6;
