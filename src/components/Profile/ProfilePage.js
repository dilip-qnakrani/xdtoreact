import React from "react";
const ProfilePage = ({ img }) => {
  return (
    <div>
      <div className="m-container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row  justify-content-between">
              <div className="col-lg-4 col-md-6">
                <div className="row">
                  <div className="col-lg-4 col-md-4 text-lg-left text-center">
                    <img
                      style={{
                        backgroundImage: `url('img/${img}')`,
                        height: 100,
                        width: 100,
                        backgroundRepeat: "round",
                      }}
                      alt=""
                      className="img-fluid rounded-circle-1"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6  mt-3">
                    <h4 className="text-center">Birdie Barnett</h4>
                    <p className="text-center">Chief analytics officer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mt-4 text-lg-right text-center">
                <div className="section clearfix ml-2">
                  <ul className="post-social">
                    <li className="twitter">
                      <a href="/">Tw</a>
                    </li>
                    <li className="facebook">
                      <a href="/">Fb</a>
                    </li>
                    <li className="google">
                      <a href="/">G+</a>
                    </li>
                    <li className="vimeo">
                      <a href="/">Vm</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="separator-wrap pt-4 pb-4">
              <span className="separator">
                <span className="separator-line dashed"></span>
              </span>
            </div>
            <p className="text-left">
              Birdie Barnett connects online brands to their target audiences
              for the perfect marketing experience. At the University of
              California, Davis, Birdie Barnett learned the importance of
              applying classic marketing techniques to modern brand strategies
              from experts in the field, including her Communications professor,
              Dr. Martin Mitchell. Recently she finished a research paper on
              customer conversion and participated in a group project on
              improving SEO. Birdie Barnett is currently finishing her Bachelor
              of Arts in Communications and hopes to intern in an online
              marketing department in the near future.
            </p>
            <h3>My Projects</h3>
            <textarea
              className="form-control text-area-placeholder"
              rows="15"
              style={{ width: "inherit", border: "1px solid #C4C4C4" }}
              placeholder="Hmm… Looks Like You Don’t Have Participated For Any Combat Yet.!"
            ></textarea>
            <div className="deep_box mt-5 text-center">
              <img
                style={{
                  backgroundImage: `url('img/deep.png')`,
                  backgroundRepeat: "none",
                }}
                alt=""
                className="deep_img"
              />
              <div className="deep_title">Deep Dive Inside Out </div>
              <div className="deep_description">
                Explore your mind in metaverse and travel to the depths of
                identity by exploring the body and physical being
              </div>
              <div className="deep_topic">
                beingIllustration, Animation, 3D and AR
              </div>
              <div className="deep_day_box text-center">
                <p className="deep_day_box_numer">54</p>
                <br />
                <p className="deep_day_box_days"> DAYS LEFT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
