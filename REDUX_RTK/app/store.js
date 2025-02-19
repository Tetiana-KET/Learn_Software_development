// import type { Action, ThunkAction } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit';

const configureStore = require('@reduxjs/toolkit').configureStore;

const cakeSlice = require('../features/cake/cakeSlice');
const iceCreamSlice = require('../features/iceCream/iceCreamSlice');
const userSlice = require('../features/user/userSlice');

const reduxLogger = require('redux-logger');

const cakeReducer = cakeSlice.reducer;
const iceCreamReducer = iceCreamSlice.reducer;
const userReducer = userSlice.reducer;

// const logger = reduxLogger.createLogger();

//the same as i did when creating rootReducer
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		iceCream: iceCreamReducer,
		user: userReducer,
	},
	// middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

module.exports = store;
