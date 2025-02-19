const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
	cakesAmount: 10,
};

/**
 * accepts 3 arguments:
 * 1. the name of the slice
 * 2. initial state of this individual slice
 * 3. reducer function
 * we don't need to explicitly return new state, and can directly 'mutate' the state;
 * create slice under the hood uses immer library to copy state and return new mutated copy
 * create slice will automatically generates action creators with the same name as the reducer functions we've written
 * also it returns the main reducer function that we can provide to redux store
 * every think i did manually in redux is handled by createSlice
 */
const cakeSlice = createSlice({
	name: 'cake',
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.cakesAmount -= action.payload || 1;
		},
		restocked: (state, action) => {
			state.cakesAmount += action.payload || 1;
		},
	},
});

module.exports = {
	reducer: cakeSlice.reducer,
	cakeActions: cakeSlice.actions,
};
