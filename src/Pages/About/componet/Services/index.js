import React from "react";
import logo from "../../../../asset/images/cosys.png";
import shipping from "../../../../asset/images/shipping.jpg";
import quality from "../../../../asset/images/quality.jpg";
import delivery from "../../../../asset/images/delivery.jpg";
import customer from "../../../../asset/images/customer_service.jpg";
import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
export default function Service() {
  return (
    <>
      <h1 class="heading text-center">
        <span>O</span>
        <span>u</span>
        <span>r</span>
        <span className="space"></span>
        <span>S</span>
        <span>e</span>
        <span>r</span>
        <span>v</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
        <span>s</span>
      </h1>

      <div class="card mb-3 mt-3 border-0" style={{ maxWidth: "740px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            {/* <FontAwesomeIcon icon="fas fa-shipping-fast" /> */}
            <img src={shipping} class="img-fluid rounded-start img-height" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">FAST DELIVERY</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3 mt-3 border-0" style={{ marginLeft: "20%" }}>
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">FOCUS ON QUALITY</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            {/* <FontAwesomeIcon icon="fas fa-shipping-fast" /> */}
            <img src={quality} class="img-fluid rounded-start img-height" />
          </div>
        </div>
      </div>

      <div class="card mb-3 mt-3 border-0" style={{ maxWidth: "740px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            {/* <FontAwesomeIcon icon="fas fa-shipping-fast" /> */}
            <img src={delivery} class="img-fluid rounded-start img-height" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">SAFE DELIVERY</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-3 mt-3 border-0" style={{ marginLeft: "20%" }}>
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">24/7 CUSTOMER SERVICES</h3>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            {/* <FontAwesomeIcon icon="fas fa-shipping-fast" /> */}
            <img src={customer} class="img-fluid rounded-start img-height" />
          </div>
        </div>
      </div>
    </>
  );
}
