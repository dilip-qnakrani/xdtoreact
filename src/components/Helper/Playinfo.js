import React from "react";

const Playinfo = () => {
  return (
    <div>
      <div className="play-info mb-0">
        <div className="play-info-con container">
          <div className="row justify-content-center">
            {/* <div className="col-4  d-sm-none d-md-block my-5">
              <img src="img/icons/icon-heart.png" alt="" />
            </div> */}

            <div className=" my-5 d-flex text-center">
              <img
                className="play-info-image"
                src="img/icons/icon-heart.png"
                alt=""
              />

              <div className="parent">
                You Are Free
                <div className="child ml-4">Bailey Wonger</div>
              </div>

              <img
                className="play-info-image"
                src="img/icons/icon-dot.png"
                alt=""
              />
            </div>
            {/* <div className="col-4 d-sm-none d-md-block my-5">
              <img src="img/icons/icon-dot.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playinfo;
