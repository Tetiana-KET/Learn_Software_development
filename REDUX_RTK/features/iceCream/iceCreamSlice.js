// import { createAction, createSlice } from '@reduxjs/toolkit'
const createSlice = require('@reduxjs/toolkit').createSlice;
// const createAction = require('@reduxjs/toolkit').createAction;
// const CAKE_ORDERED = createAction('cake/ordered');

const cakeActions = require('../cake/cakeSlice').cakeActions;

const initialState = {
	iceCreamAmount: 20,
};

/**
 * accepts an object with 3 properties:
 * 1. the name of the slice
 * 2. initial state of this individual slice
 * 3. reducer function
 * we don't need to explicitly return new state, and can directly 'mutate' the state;
 * create slice under the hood uses immer library to copy state and return new mutated copy
 * create slice will automatically generates action creators with the same name as the reducer functions we've written
 * also it returns the main reducer function that we can provide to redux store
 * every thing i did manually in redux is handled by createSlice
 */

const iceCreamSlice = createSlice({
	name: 'iceCream',
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.iceCreamAmount -= action.payload || 1;
		},
		restocked: (state, action) => {
			state.iceCreamAmount += action.payload || 1;
		},
	},
	extraReducers: builder => {
		builder.addCase(cakeActions.ordered, state => {
			state.iceCreamAmount -= 1;
		});
	},
});

module.exports = {
	reducer: iceCreamSlice.reducer,
	iceCreamActions: iceCreamSlice.actions,
};
