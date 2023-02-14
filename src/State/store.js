import { configureStore, createSlice } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";

import { addtocartSlice } from "./Slice/index";

// const store = configureStore({
//   reducer: addtocartSlice.reducer,
// });

export const store = configureStore({
  reducer: addtocartSlice.reducer,
});
