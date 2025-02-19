import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	isLoading: false,
	error: '',
	users: [],
};

// createAsyncThunk generates pending, fulfilled or rejected actions types
// we can listen to this action types with a reducer function
// and perform necessary state transition
// reducers should be added with extraReducers

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);
	return response.data;
});

export const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		// You can chain calls, or have separate `builder.addCase()` lines each time
		builder.addCase(fetchUsers.pending, state => {
			state.isLoading = true;
		});
		builder
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
				state.users = [];
			});
	},
});

export default userSlice.reducer;
