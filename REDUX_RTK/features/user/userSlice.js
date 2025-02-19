const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initialState = {
	isLogging: false,
	error: '',
	users: [],
};

// createAsyncThunk generates pending, fulfilled or rejected actions types
// we can listen to this action types with a reducer function
// and perform necessary state transition
// reducers should be added with extraReducers

const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);
	return response.data.map(user => user.id);
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		// You can chain calls, or have separate `builder.addCase()` lines each time
		builder.addCase(fetchUsers.pending, state => {
			state.isLogging = true;
		});
		builder
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.isLogging = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.isLogging = false;
				state.error = action.error.message;
				state.users = [];
			});
	},
});

module.exports = {
	reducer: userSlice.reducer,
	fetchUsers: fetchUsers,
};
