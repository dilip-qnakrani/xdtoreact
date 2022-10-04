import React from "react";

const Actionblog3 = ({ title, subtitle }) => {
  return (
    <div>
      {/* Call To Action Block
	==================================================  */}

      <div className="section padding-top-bottom-smaller m-shadow background-white z-bigger-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className=" text-center">
                <h3 className="my-3 p-title">{title}</h3>
                <p className="p-subtitle">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionblog3;
