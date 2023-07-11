import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const featchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
  console.log(response)
  const data = await response.json();
  return data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
  extraReducers: {
    [featchGreeting.pending]: (state, action) => {
      state.status = 'loading';
    },
    [featchGreeting.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.greeting = action.payload;
    },
    [featchGreeting.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default greetingSlice.reducer;
