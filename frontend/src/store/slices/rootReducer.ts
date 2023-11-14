import { combineReducers } from "@reduxjs/toolkit";
import patientStore from "./patient";

const rootReducer = combineReducers({
  patientStore
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
