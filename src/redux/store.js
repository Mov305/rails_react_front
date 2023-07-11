import greeting from './reducers/greeting';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    greeting,
  },
});
