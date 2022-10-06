import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import Separatorline from "../Helper/Separatorline";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "double",
  // backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const SubmitDataForm = () => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div>
      {/* Services & Call To Action Block
	==================================================  */}

      <div
        className="section padding-top-bottom-small background-white over-hide"
        id="scroll-top"
      >
        <div className="big-fade-title on-light text-center"></div>
        <div className="container submit-form">
          <p className="submit-form-p text-center mb-5">
            Please fill out the submission form below. <br /> Once all the
            fields are completed please tick the box My submission is ready’ and
            click on <span className="m-color">‘Submit’</span>
          </p>
          <div className="row">
            <div className="col-12">
              <form method="post">
                <div className="row subscribe-box-1 d-flex mb-3">
                  <div className="col-12 ">
                    <label className="font-light ">
                      Idea Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control  font-light"
                      placeholder="Enter your first name"
                    />
                    <div className=".errorTxt"></div>{" "}
                  </div>
                </div>

                <div className="row subscribe-box-1 mb-3">
                  <div className="col-12">
                    <label className="font-light ">Idea Description</label>
                    <textarea
                      name="message"
                      className="form-control  font-light"
                      rows="10"
                      placeholder="Please describe your Idea in details"
                    ></textarea>
                  </div>
                </div>
                <div className="row subscribe-box-1 mb-3">
                  <div className="col-12">
                    <label className="font-light ">
                      How Is Your Idea Superior To What Is Already Available In
                      The Market?
                    </label>
                    <textarea
                      name="message"
                      className="form-control  font-light"
                      rows="10"
                      placeholder="Please be as precise as possible"
                    ></textarea>
                  </div>
                </div>
                <div className="row subscribe-box-1 mb-3">
                  <div className="col-12">
                    <label className="font-light ">Idea Visual</label>
                    <div {...getRootProps({ style })} className="">
                      <input {...getInputProps()} />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-3"
                        width="96.001"
                        height="61.939"
                        viewBox="0 0 96.001 61.939"
                      >
                        <path
                          id="Icon"
                          d="M1088.806,449.967A17.665,17.665,0,0,1,1077.9,418.3a15.2,15.2,0,0,1,15.127-15.207,14.919,14.919,0,0,1,6.317,1.4,26.813,26.813,0,0,1,50.056,1.532,22.213,22.213,0,0,1-4.467,43.942h-12.647a1.56,1.56,0,0,1,0-3.119h12.647a19.087,19.087,0,0,0,3.046-37.91l-.941-.156-.29-.913a23.732,23.732,0,0,0-45.13-.652l-.638,1.837-1.639-1.024a11.938,11.938,0,0,0-6.314-1.818,12.088,12.088,0,0,0-12.03,12.118l.077,1.3-.713.713a14.542,14.542,0,0,0,8.186,26.5l.316,0c.151,0,.31.009.461,0h16.4a1.56,1.56,0,0,1,0,3.119H1089.4c-.074.006-.166.006-.272.006Zm28.648-1.563V420.928l-13.531,13.626a1.544,1.544,0,0,1-2.189,0,1.57,1.57,0,0,1,0-2.2l16.172-16.289,0,0,1.094-1.1,1.093,1.1,0,0,16.17,16.289a1.567,1.567,0,0,1,0,2.2,1.546,1.546,0,0,1-2.19,0l-13.53-13.626V448.4a1.548,1.548,0,1,1-3.1,0Z"
                          transform="translate(-1070.999 -388.031)"
                          fill="#b13166"
                        />
                      </svg>

                      <p className="mb-2 dropzone-icon">
                        Drop files here or clicks to Upload
                      </p>
                      <span className="dropzone-icon-span">
                        (drag it on this page / 10 MB max)
                      </span>
                    </div>
                    <div className="dropzone-progress d-flex justify-content-center">
                      <div className="progress-container progress-dark ">
                        <div className="m-badge d-flex justify-content-between">
                          <span className="progress-badge">
                            School Concept.pdf
                          </span>
                          <span className="progress-badge-right">10 mb</span>
                        </div>
                        <div className="progress" style={{ borderRadius: 4 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "37%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-4">
                  <label className="font-light col-md-12 mb-3">
                    Legal Information
                  </label>
                  <div className="col-md-12">
                    <div className="radio primary line-icon on-light">
                      <input id="radio1" name="legal-info" type="radio" />

                      <label htmlFor="radio1">
                        Does your media contain elements that were not created
                        by you (e.g., music, images, fonts, etc.) Required
                        copyright
                      </label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="radio primary line-icon on-light">
                      <input id="radio2" name="legal-info" type="radio" />

                      <label htmlFor="radio2">
                        No, and I certify that I have created all the elements
                        incorporated in my media.
                      </label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="radio primary line-icon on-light">
                      <input id="radio3" name="legal-info" type="radio" />

                      <label htmlFor="radio3">
                        I have signed and understand the terms of the agreement.
                        Please include the required attachments with your entry
                      </label>
                      <div className=".errorTxt"></div>
                    </div>
                  </div>
                </div>
                <Separatorline />
                <div className="row text-center mt-5">
                  <div className="col-md-12">
                    <div className="radio primary line-icon on-light">
                      <input id="radio4" name="submission" type="radio" />

                      <label
                        style={{ color: "#000000" }}
                        className="font-weight-bold"
                        htmlFor="radio4"
                      >
                        My submission is ready
                      </label>
                      <div className="errorTxt"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="submit-form-button">
                      <button
                        type="submit"
                        id="submit"
                        className="btn text-capitalize btn-primary btn-round  mt-lg-3 scroll"
                      >
                        Submit Now
                      </button>
                      <button
                        type="submit"
                        id="submit"
                        className="btn text-capitalize btn-primary btn-round bg-color-black  mt-lg-3 scroll"
                      >
                        Save Draft
                      </button>
                      {/* <input
                        type="submit"
                        id="submit"
                        className="btn  btn-primary submit-form-button  btn-round font-semibold rounded-0 btn-long text-white"
                        value="Send"
                      /> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitDataForm;
