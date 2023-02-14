import React from "react";
import { createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cartDataList = useSelector((state) => state.cart);
  console.log(cartDataList);
  return (
    <>
      <div class="row g-0">
        {/* <h1>{cartData.id}</h1> */}
        <table class="table table-light table-hover text-center">
          <thead className="fs-5">
            <tr>
              <th>Product_Image</th>
              <th>Product_Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody className="fs-5">
            {cartDataList.map((i) => (
              <tr>
                <td>
                  <img src={i.img} className="cart-img" />
                </td>
                <td className="padding-top">{i.name}</td>
                <td className="padding-top">
                  <input
                    type="number"
                    class="form-control input-width"
                    value={i.quantity}
                  />
                </td>
                <td className="padding-top">
                  <i className="fa fa-dollar"></i> {i.price}
                </td>
                <td className="padding-top">
                  <i className="fa fa-dollar"></i> {i.price}
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <div class="row">
                  <div class="col-7">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Coupon"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="submit"
                      class="form-control btn btn-outline-danger"
                      value="APPLY"
                    />
                  </div>
                </div>
              </td>

              <td>
                <button class="btn btn-outline-danger" type="button">
                  UPDATE CART
                </button>
              </td>
              <td colSpan="3">
                <button class="btn btn-outline-danger" type="button">
                  PROCEED TO CHECKOUT
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export { Cart };
