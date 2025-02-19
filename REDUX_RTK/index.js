const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iseCreamActions =
	require('./features/iceCream/iceCreamSlice').iceCreamActions;

console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(() => {
	console.log('Updated store: ', store.getState());
});
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.ordered(5));
store.dispatch(cakeActions.ordered());

store.dispatch(cakeActions.restocked(10));

store.dispatch(iseCreamActions.ordered());
store.dispatch(iseCreamActions.ordered(5));
store.dispatch(iseCreamActions.ordered(2));

store.dispatch(iseCreamActions.restocked(10));

unsubscribe();
