import React from "react";

const Musicplayer = () => {
  return (
    <div>
      <div className="Player">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="60"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `71%` }}
          ></div>
        </div>
        <div className="Base">
          <div className="container">
            <div className="row player-style">
              <div className="col-md-6 col-sm-3 col-lg-3 ">
                <div className="Group_36 justify-content-center">
                  <div className="Group_35">
                    <img
                      className="player-img"
                      alt="monsters"
                      src="img/Mask_Group_3.png"
                    />
                  </div>
                  <div className="player-text-1 mt-1">
                    <span>You Are Free</span>
                  </div>
                  <div className="player-text-2 mt-1">
                    <span>Bailey Wonger</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-3 col-lg-3">
                <div className="Group_36-2 justify-content-center">
                  <div className="Group_35">
                    <img
                      className="player-img-2"
                      alt="monsters"
                      src="img/Mask_Group_3.png"
                    />
                  </div>
                  <div className="player-text-1 mt-1">
                    <span>Next : Tune For Road</span>
                  </div>
                  <div className="player-text-2 mt-1">
                    <span>Ingredia Nutrisha</span>
                  </div>
                </div>
              </div>

              {/* <div className="w-100"></div> */}
              <div className="col-md-6 col-sm-3 col-lg-3 justify-content-center">
                <p className="pop-text m-0 ">
                  Hit The Beat &nbsp;
                  <span className="pop-text-span">New Best Weekly</span>
                </p>
              </div>
              <div className="col-md-6 col-sm-3 col-lg-3">
                <div className="Play_Icons">
                  <img
                    className="Play_Icon-1"
                    src="img/icons/Group9.png"
                    alt=""
                  />
                  <img
                    className="Play_Icon-2 mx-3"
                    src="img/icons/Play.png"
                    alt=""
                  />
                  <img
                    className="Play_Icon-3"
                    src="img/icons/Group8.png"
                    alt=""
                  />
                  <img
                    className="Play_Icon-4 ml-5"
                    src="img/icons/icon.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicplayer;
