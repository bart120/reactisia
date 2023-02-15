import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationReducer";

export const store = configureStore({ reducer: { auth: authenticationReducer } });