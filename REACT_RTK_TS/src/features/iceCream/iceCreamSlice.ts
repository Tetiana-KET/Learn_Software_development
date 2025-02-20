import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

type InitialState = {
	iceCreamAmount: number;
};

const initialState: InitialState = {
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
		ordered: (state, action: PayloadAction<number | undefined>) => {
			state.iceCreamAmount -= action.payload || 1;
		},
		restocked: (state, action: PayloadAction<number | undefined>) => {
			state.iceCreamAmount += action.payload || 1;
		},
	},
	extraReducers: builder => {
		builder.addCase(cakeOrdered, state => {
			state.iceCreamAmount -= 1;
		});
	},
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
