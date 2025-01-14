import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Constants
const INITIAL_COUNT = 0;

// Types
export interface IJewelryItem {
  productId: number;
  name: string;
  actualPrice: number;
  discountedPrice: number;
  description: string;
  categoryId: number;
  stock: number;
  material: string;
  weight: number;
  imageUrl: string;
  createdAt: string;
  rating?: number;
  isAddedToCart?: boolean;
}

interface JewelryState {
  jewelleryCardData: IJewelryItem[];
  totalItemsCount: number;
}

// Initial state
const initialState: JewelryState = {
  jewelleryCardData: [],
  totalItemsCount: INITIAL_COUNT,
};

// Types
export interface IJewelryItem {
  productId: number;
  name: string;
  actualPrice: number;
  discountedPrice: number;
  description: string;
  categoryId: number;
  stock: number;
  material: string;
  weight: number;
  imageUrl: string;
  createdAt: string;
  rating?: number;
  isAddedToCart?: boolean;
}

interface JewelryState {
  jewelleryCardData: IJewelryItem[];
}
export const fetchJewelleryData = createAsyncThunk(
  "jewellery/fetchJewelleryData",
  async () => {
    const response = await fetch(
      "https://gold-imitation-flask.onrender.com/getJewellery"
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
);

// Slice
export const jewelleryCardSlice = createSlice({
  name: "jewelleryCard",
  initialState,
  reducers: {
    updateJewelleryData: (state, action: PayloadAction<IJewelryItem[]>) => {
      state.jewelleryCardData = action.payload;
    },

    addToCart: (state, action: PayloadAction<IJewelryItem>) => {
      const itemIndex = state.jewelleryCardData.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (itemIndex !== -1) {
        state.jewelleryCardData[itemIndex] = {
          ...state.jewelleryCardData[itemIndex],
          isAddedToCart: true,
        };
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.jewelleryCardData.findIndex(
        (item) => item.productId === action.payload
      );

      if (itemIndex !== -1) {
        state.jewelleryCardData[itemIndex] = {
          ...state.jewelleryCardData[itemIndex],
          isAddedToCart: false,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJewelleryData.fulfilled, (state, action) => {
      state.jewelleryCardData = action.payload;
    });
  },
});

// Selectors
export const selectJewelryData = (state: RootState) =>
  state.jewelleryData.jewelleryCardData;

export const selectCartItemsCount = (state: RootState): number =>
  state.jewelleryData.jewelleryCardData.filter((item) => item.isAddedToCart)
    .length;

export const selectCartItems = (state: RootState): IJewelryItem[] =>
  state.jewelleryData.jewelleryCardData.filter((item) => item.isAddedToCart);

// Exports
export const { updateJewelleryData, addToCart, removeFromCart } =
  jewelleryCardSlice.actions;
export const jewelleryCardReducer = jewelleryCardSlice.reducer;
