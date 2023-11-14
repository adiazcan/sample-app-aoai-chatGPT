import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyPatientStore, IPatientStore } from "../../../models/IPatientContext";

const initialState: IPatientStore = emptyPatientStore();

export const patientSlice = createSlice({
  name: "patientStore",
  initialState,
  reducers: {
    setPatientId: (state, action: PayloadAction<string>) => {
      state.patientId = action.payload;
    }
  }
});

export const {
  setPatientId
} = patientSlice.actions;

export default patientSlice.reducer;
