import React from "react";

const Services = () => {
  return (
    <div>
      {/* Services Block
	================================================== */}

      <div className="section services-box  background-black">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-4 box-1-service"> */}
            <div className="col-md-5 col-lg-4 services-box-1 box-color-2 dark text-start">
              <h5 className=" color-white">Jobs Open For Hunting</h5>
              <p className="mb-3">
                The leading job board for all creative folk
              </p>
              <a href="/jobs" className="btn-link btn-primary">
                Advertise Your Job
              </a>
              <i className="fa fa-angle-right m-icon-right"></i>
            </div>
            {/* </div> */}
            <div className="col-md-5 col-lg-4 services-box-1 box-color-2 dark text-start">
              <h5 className=" color-white">Jobs Open For Hunting</h5>
              <p className="mb-3">
                The leading job board for all creative folk
              </p>
              <a href="/jobs" className="btn-link btn-primary">
                Advertise Your Job
              </a>
              <i className="fa fa-angle-right m-icon-right"></i>
            </div>
            <div className="col-md-4 col-lg-4 services-box-1 box-color-3 dark text-start">
              <img src="img/services.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
