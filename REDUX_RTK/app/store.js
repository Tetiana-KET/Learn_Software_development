// import type { Action, ThunkAction } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';

const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeSlice = require('../features/cake/cakeSlice');
const iceCreamSlice = require('../features/iceCream/iceCreamSlice');
const cakeReducer = cakeSlice.reducer;
const iceCreamReducer = iceCreamSlice.reducer;

//the same as i did when creating rootReducer
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		iceCream: iceCreamReducer,
	},
});

module.exports = store;
