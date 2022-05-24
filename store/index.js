const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

const cakeInitialState = {
  numberOfCakes: 10,
};

const iceCreamInitialState = {
  numberOfIceCream: 20,
};

function orderCake(qua = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qua,
  };
}

function restoreCake(qua = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qua,
  };
}

function orderIceCream(qua = 1) {
  return {
    type: ICE_CREAM_ORDERED,
    payload: qua,
  };
}

function restoreIceCream(qua = 1) {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: qua,
  };
}

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "CAKE_ORDERED":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case "CAKE_RESTOCKED":
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case "ICE_CREAM_ORDERED":
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - action.payload,
      };

    case "ICE_CREAM_RESTOCKED":
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
// store.dispatch({
//   type: CAKE_ORDERED,
//   payload: 10,
// });
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restoreCake(10));

const actions = bindActionCreators(
  { orderCake, restoreCake, orderIceCream, restoreIceCream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restoreCake(10);
actions.restoreIceCream(20);

unsubscribe();
