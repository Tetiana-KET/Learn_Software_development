// import redux from 'redux';
const redux = require('redux');

// action const
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

// action creator function
function orderCreator(quantity = 1) {
	return {
		type: CAKE_ORDERED,
		payload: quantity,
	};
}

function restoreCakes(quantity = 1) {
	return {
		type: CAKE_RESTOCKED,
		payload: quantity,
	};
}

function orderIceCream(quantity = 1) {
	return {
		type: ICECREAM_ORDERED,
		payload: quantity,
	};
}

function restockIceCream(quantity = 1) {
	return {
		type: ICECREAM_RESTOCKED,
		payload: quantity,
	};
}

// State
const initialCakeState = {
	numberOfCakes: 10,
};

const initialIceCreamState = {
	numberOfIceCreams: 20,
};

// reducer
const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				// create the copy of the state and update only necessary property
				// another properties would remain unchanged
				...state,
				numberOfCakes: state.numberOfCakes - action.payload,
			};
		case CAKE_RESTOCKED:
			return {
				...state,
				numberOfCakes: state.numberOfCakes + action.payload,
			};
		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case ICECREAM_ORDERED:
			return {
				// create the copy of the state and update only necessary property
				// another properties would remain unchanged
				...state,
				numberOfIceCreams: state.numberOfIceCreams - action.payload,
			};
		case ICECREAM_RESTOCKED:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams + action.payload,
			};
		default:
			return state;
	}
};
// Redux store holds the state of the application.
const rootReducer = redux.combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

const store = redux.createStore(rootReducer);

// Allows access the state with getState();
console.log('initial state: ', store.getState());

// Register listeners with subscribe(listener) and returns the unsubscribe function;
const unsubscribe = store.subscribe(() =>
	console.log('Updated store: ', store.getState())
);

// Allows state to be updated with dispatch(action);
// it is possible to pass in an object, but in terms of future scalability
//  it is more safe to pass an action creator function
// store.dispatch({
// 	type: CAKE_ORDERED,
// 	payload: 1,
// });
// action creators is a recommended way
// store.dispatch(orderCreator());
// store.dispatch(orderCreator());
// store.dispatch(orderCreator());

// store.dispatch(restoreCakes());
// store.dispatch(restoreCakes(5));
// handles the un-subscription with the function returned from subscribe

//first argument is an object with names iof action creators
// the second argument is what we want to bind to
const actions = redux.bindActionCreators(
	{ orderCreator, restoreCakes, orderIceCream, restockIceCream },
	store.dispatch
);
actions.orderCreator();
actions.orderCreator(3);
actions.orderCreator();
actions.orderCreator(2);
actions.restoreCakes();
actions.restoreCakes(5);
actions.orderIceCream(10);
actions.restockIceCream(5);
unsubscribe();
