import React from "react";

const Founder = ({ bgtext, title, subtitle }) => {
  return (
    <div>
      {/* Services & Call To Action Block
	==================================================  */}

      <div
        className="section padding-top-bottom-info background-white over-hide"
        id="scroll-top"
      >
        <div className="big-fade-title on-light text-center">{bgtext}</div>
        <div className="m-container z-bigger">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className=" mb-5 text-center">
                {/* <div className="main-subtitle-top mb-4">welcome</div> */}
                <h3 className="big-fade-title-h3">{title}</h3>
                <div className="main-subtitle-bottom ">{subtitle}</div>
              </div>
            </div>
            <div className="clear"></div>
            <div className="col-md-12">
              <div className=" text-center">
                <p className="main-title-p">
                  Shadi Al Hroub has over 17 years of experience in design and
                  communications, including over 11 years of research in
                  branding and advertising. He won more than 29 international
                  awards at the prestige level around the world.
                </p>
                <p className="main-title-p mt-3">
                  His experience ranges from creative direction, packaging,
                  branding, and Multimedia (both traditional and digital). Shadi
                  worked as a professor in creative design in various American
                  universities and creative consultant at Leo Burnett, Hilton
                  Worldwide, Jordan Aviation, Royal Falcon, Jordan Duty-Free,
                  Samsung, Macdonald, G2000, Hublot, The One, and various
                  international NGOs such as UNRWA, International Trade Center
                  (UN), Global Health Development, and USAID.
                </p>
                <p className="main-title-p mt-3">
                  He was a final judge for the Stevie Awards for Creative
                  Communications & International Business Awards where he
                  evaluated DHL, Nivea, Pepsi, Coca-Cola, and more big names, Al
                  Hroub was a final judge for Future Ideas Amsterdam, Adobe
                  Achievements Awards 2014 - present, the A’ design awards, and
                  Grand Jury Panel at Vega Digital Awards where he evaluated
                  Porsche campaign, McCann Stockholm, FOX Networks Group Spain,
                  BBC, Jaguar, eBay, Sony Pictures, Nike and more.
                </p>
                <p className="main-title-p mt-3">
                  Shadi was the chair of the Media Awards Judging Committee of
                  our 2020 (17th annual) Stevie Awards for Women in Business,
                  And team facilitator to the World Design Challenge on
                  Sustainable Packaging that tackles the UN SDG 12: Responsible
                  Consumption and Production. A judge of the next creative
                  leader the USA 2021 (On club for creativity), Biennial
                  exhibition 2022 Jury member and Peer reviewer of the Journal
                  for Artistic Research.
                </p>
                <div className="mt-5">
                  <p className="main-title-p " style={{ display: "contents" }}>
                    For additional information :
                    <span className="m-color"> shadialhroub</span>
                  </p>
                  <ul className="founder-social m-0 ml-3">
                    <li className="facebook">
                      <a href="/">Fb</a>
                    </li>
                    <li className="twitter">
                      <a href="/">Tw</a>
                    </li>
                    <li className="google">
                      <a href="/">G+</a>
                    </li>
                    <li className="vimeo">
                      <a href="/">Vm</a>
                    </li>
                  </ul>
                </div>
                <div className="founder-detail d-lg-flex d-md-flex mt-5 justify-content-center">
                  <p>
                    Jury for Next Creative <br /> Leaders 2022
                  </p>
                  <img src="img/founder.png" className="mx-3" alt="" />
                  <img src="img/icons/Group250.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
