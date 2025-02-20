import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
}

type InitialState = {
	isLoading: boolean;
	error: string;
	users: User[];
};

const initialState: InitialState = {
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
	reducers: {},
	extraReducers: builder => {
		// You can chain calls, or have separate `builder.addCase()` lines each time
		builder.addCase(fetchUsers.pending, state => {
			state.isLoading = true;
		});
		builder
			.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
				state.isLoading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Error';
				state.users = [];
			});
	},
});

export default userSlice.reducer;
