import React from "react";

const Actionblog = ({ title, subtitle }) => {
  return (
    <div>
      {/* Call To Action Block
	==================================================  */}

      <div className="section padding-top-bottom-smaller background-white z-bigger-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-box-4 text-center">
                <h3 className="mb-2">{title}</h3>
                <a
                  href="#scroll-top"
                  className="btn btn-primary btn-round btn-long mt-4 scroll"
                >
                  {subtitle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionblog;
