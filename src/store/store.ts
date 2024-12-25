import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { jewelleryCardReducer } from "./slices/jewelleryCardSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    jewelleryData: jewelleryCardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
