import React from "react";

const Mark = ({ img }) => {
  return (
    <div>
      {/* Testimonials & Facts Block
	================================================== */}

      <div className="section ">
        <img className="p-mark-box" src={img} alt="" />
      </div>
    </div>
  );
};

export default Mark;
