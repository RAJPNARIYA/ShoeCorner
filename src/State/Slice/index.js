import { configureStore, createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux";
import sport1 from "../../asset/images/s-1.jpg";
import sport2 from "../../asset/images/sport-3.jpg";
import sport3 from "../../asset/images/sport-4.jpg";
import c1 from "../../asset/images/casual-1.jpg";
import c2 from "../../asset/images/casual-2.jpg";
import c3 from "../../asset/images/casual-3.jpg";
import h1 from "../../asset/images/h-1.jpg";
import f1 from "../../asset/images/formal-1.png";

const productList = [
  {
    product_id: 1,
    product_name: "SportShoe",
    product_img: sport1,
    product_price: "200",
  },
  {
    product_id: 2,
    product_name: "CasualShoe",
    product_img: c1,
    product_price: "200",
  },
  {
    product_id: 3,
    product_name: "formalShoe",
    product_img: f1,
    product_price: "200",
  },
  {
    product_id: 4,
    product_name: "Heels",
    product_img: h1,
    product_price: "200",
  },
  {
    product_id: 5,
    product_name: "SportShoe",
    product_img: sport2,
    product_price: "200",
  },
  {
    product_id: 6,
    product_name: "CasualShoe",
    product_img: c2,
    product_price: "200",
  },
  {
    product_id: 7,
    product_name: "SportShoe",
    product_img: sport3,
    product_price: "200",
  },
  {
    product_id: 8,
    product_name: "CasualShoe",
    product_img: c3,
    product_price: "200",
  },
];

const cartdata = [];

export const addtocartSlice = createSlice({
  name: "AddToCart",
  initialState: {
    cart: cartdata,
    product: productList,
  },
  reducers: {
    addItem: (state, actions) => {
      const data = actions.payload;
      const cartolddata = state.cart;
      console.log(cartolddata);

      let idlist = [];
      // const ids = cartolddata.map(
      //   (person1) => !data.some((person2) => person1.id === person2.id)
      // );
      // console.log(ids);
      // console.log(p.id);
      // if (data.id == p.id) {
      //   data.quantity = data.quantity + 1;
      //   state.cart = [...state.cart, data];
      // } else {
      // }
      state.cart = [...state.cart, data];
      // });
    },

    getproduct: (state) => {
      state.product = state.product;
    },
  },
});

export const { addItem } = addtocartSlice.actions;
export const { product } = addtocartSlice.actions;
export default addtocartSlice.reducer;
