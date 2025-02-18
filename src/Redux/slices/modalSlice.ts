import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ModalSlice {
  isMainMenuVisible: boolean;
  isGalleryModalVisible: boolean;
  isTagPeopleModalVisible: boolean;
}

// Define the initial state using that type
const initialState: ModalSlice = {
  isMainMenuVisible: false,
  isGalleryModalVisible: false,
  isTagPeopleModalVisible: false,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setIsMainMenuVisible: (state, action: PayloadAction<boolean>) => {
      state.isMainMenuVisible = action.payload;
    },
    setIsGalleryModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isGalleryModalVisible = action.payload;
    },
    setIsTagPeopleModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isTagPeopleModalVisible = action.payload;
    },
  },
});

export const {
  setIsMainMenuVisible,
  setIsGalleryModalVisible,
  setIsTagPeopleModalVisible,
} = modalSlice.actions;

export default modalSlice.reducer;
