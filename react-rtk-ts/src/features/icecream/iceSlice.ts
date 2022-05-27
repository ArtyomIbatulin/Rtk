import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
  numOfIcecreams : number
}

const initialState : InitialState = {
  numOfIcecreams: 20,
};

const iceSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderedIcecream: (state) => {
      state.numOfIcecreams--;
    },
    restockedIcecream: (state, action : PayloadAction<number>) => {
      state.numOfIcecreams += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default iceSlice.reducer;
export const { orderedIcecream, restockedIcecream } = iceSlice.actions;
