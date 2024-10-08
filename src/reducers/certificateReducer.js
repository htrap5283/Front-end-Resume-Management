import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  certificates: [],
}



const certificateReducer = createSlice({
  name: 'certificateReducer',
  initialState,
  reducers: {
    resetCertificates(state) {
      state.certificates = [];
    },
    saveCertificateDetails(state, action) {
      state = action.payload;
    }
  }
})



export const { saveCertificateDetails } = certificateReducer.actions;
export default certificateReducer.reducer;