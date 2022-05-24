const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("../cake/cakeSlice").cakeActions;

const initialState = {
  numOfIcecream: 20,
};

const iceSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderedIcecream: (state, action) => {
      state.numOfIcecream -= action.payload;
    },
    restockedIcecream: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numOfIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

module.exports = iceSlice.reducer;
module.exports.icecreamActions = iceSlice.actions;
