import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ModalSlice {
    isMainMenuVisible: boolean
}

// Define the initial state using that type
const initialState: ModalSlice = {
    isMainMenuVisible: false
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsMainMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isMainMenuVisible = action.payload;
    },
  },
});

export const { setIsMainMenuVisible } = modalSlice.actions;

export default modalSlice.reducer;
