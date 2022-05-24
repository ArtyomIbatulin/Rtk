const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/iceSlice").icecreamActions;
const fetchUsers = require("../rtk/features/user/userSlice").fetchUsers;

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("New state", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));

// store.dispatch(icecreamActions.orderedIcecream(1));
// store.dispatch(icecreamActions.orderedIcecream(2));
// store.dispatch(icecreamActions.orderedIcecream(1));
// store.dispatch(icecreamActions.orderedIcecream(2));
// store.dispatch(icecreamActions.restockedIcecream(20));

// unsubscribe();
