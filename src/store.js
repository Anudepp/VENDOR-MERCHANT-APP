// src/store.js
import { configureStore } from "@reduxjs/toolkit";

// You can add your reducers here
export const store = configureStore({
  reducer: {
    // exampleReducer: exampleSlice,
  }
});

export default store;
