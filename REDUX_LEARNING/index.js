// import redux from 'redux';
const redux = require('redux');

const initialState = {
	numberOfCakes: 10,
	anotherProperty: 0,
};

// action const
const CAKE_ORDERED = 'CAKE_ORDERED';

// action creator function
function orderCreator() {
	return {
		type: CAKE_ORDERED,
		quantity: 1,
	};
}

// reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CAKE_ORDERED':
			return {
				// create the copy of the state and update only necessary property
				// another properties would remain unchanged
				...state,
				numberOfCakes: state.numberOfCakes - 1,
			};
		default:
			return state;
	}
};
// Redux store holds the state of the application.
const store = redux.createStore(reducer);
// Allows access the state with getState();
console.log('initial state: ', store.getState());
// Register listeners with subscribe(listener) and returns the unsubscribe function;
const unsubscribe = store.subscribe(() =>
	console.log('Updated store: ', store.getState())
);
// Allows state to be updated with dispatch(action);
// it is possible to pass in an object, but in terms of future scalability
//  it is more safe to pass an action creator function
store.dispatch({
	type: CAKE_ORDERED,
	quantity: 1,
});
// action creators is a recommended way
store.dispatch(orderCreator());
store.dispatch(orderCreator());
// handles the un-subscription with the function returned from subscribe
unsubscribe();
