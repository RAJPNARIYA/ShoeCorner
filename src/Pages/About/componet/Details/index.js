import React from "react";
import logo from "../../../../asset/images/cosys.png";
import "../../../../asset/css/style.css";

export default function Details() {
  return (
    <>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-2  div-center">
            <div className="swing ">
              <img
                src={logo}
                className="img-fluid rounded-start img-center "
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">ShoeCorner</h5>
              <p className="card-text">
                We possess within us two minds. So far I have written only of
                the conscious mind.We further know that the subconscious has
                recorded every event. This is just perfect theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
