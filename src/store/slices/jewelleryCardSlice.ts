import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
export const jewelryInitalData: IJewelryItem[] = [
  {
    productId: 1,
    name: "Classic Gold Pendant",
    description:
      "A timeless 22k gold pendant with intricate floral engravings.",
    categoryId: 1,
    actualPrice: 2999.99,
    discountedPrice: 2499.99,
    stock: 15,
    material: "Gold",
    weight: 15.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-01T10:00:00Z",
    rating: 1.5,
  },
  {
    productId: 2,
    name: "Diamond Stud Earrings",
    description: "Elegant diamond earrings with a round brilliant cut.",
    categoryId: 2,
    actualPrice: 4499.99,
    discountedPrice: 3999.99,
    stock: 20,
    material: "Diamond, White Gold",
    weight: 5.5,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-02T12:00:00Z",
    rating: 2.5,
  },
  {
    productId: 3,
    name: "Silver Charm Bracelet",
    description:
      "A delicate sterling silver bracelet with customizable charms.",
    categoryId: 3,
    actualPrice: 249.99,
    discountedPrice: 199.99,
    stock: 50,
    material: "Silver",
    weight: 10.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-03T14:00:00Z",
    rating: 3.5,
  },
  {
    productId: 4,
    name: "Pearl Necklace Set",
    description:
      "A luxurious freshwater pearl necklace with matching earrings.",
    categoryId: 4,
    actualPrice: 1599.99,
    discountedPrice: 1299.99,
    stock: 10,
    material: "Pearl",
    weight: 25.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-04T15:00:00Z",
    rating: 4.5,
  },
  {
    productId: 5,
    name: "Rose Gold Engagement Ring",
    description: "A 14k rose gold ring with a solitaire diamond centerpiece.",
    categoryId: 5,
    actualPrice: 5299.99,
    discountedPrice: 4599.99,
    stock: 8,
    material: "Rose Gold, Diamond",
    weight: 3.2,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-05T16:00:00Z",
    rating: 5,
  },
  {
    productId: 6,
    name: "Emerald Halo Necklace",
    description:
      "An 18k gold necklace with an oval emerald surrounded by diamonds.",
    categoryId: 1,
    actualPrice: 6299.99,
    discountedPrice: 5299.99,
    stock: 5,
    material: "Gold, Emerald, Diamond",
    weight: 12.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-06T17:00:00Z",
    rating: 1,
  },
  {
    productId: 7,
    name: "Silver Cuff Bracelet",
    description: "A bold sterling silver cuff bracelet with textured patterns.",
    categoryId: 3,
    actualPrice: 399.99,
    discountedPrice: 349.99,
    stock: 30,
    material: "Silver",
    weight: 20.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-07T18:00:00Z",
    rating: 3,
  },
  {
    productId: 8,
    name: "Sapphire Eternity Band",
    description:
      "A platinum eternity band with blue sapphires set around the ring.",
    categoryId: 5,
    actualPrice: 7999.99,
    discountedPrice: 6999.99,
    stock: 3,
    material: "Platinum, Sapphire",
    weight: 4.8,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-08T19:00:00Z",
    rating: 4,
  },
  {
    productId: 9,
    name: "Ruby Pendant Necklace",
    description: "A 14k gold necklace featuring a heart-shaped ruby pendant.",
    categoryId: 1,
    actualPrice: 2599.99,
    discountedPrice: 2299.99,
    stock: 12,
    material: "Gold, Ruby",
    weight: 8.5,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-09T20:00:00Z",
    rating: 2.6,
  },
  {
    productId: 10,
    name: "Gold Hoop Earrings",
    description: "Classic 22k gold hoop earrings with a polished finish.",
    categoryId: 2,
    actualPrice: 899.99,
    discountedPrice: 799.99,
    stock: 40,
    material: "Gold",
    weight: 6.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-10T21:00:00Z",
    rating: 4.5,
  },
  {
    productId: 11,
    name: "Silver Anklet Set",
    description: "A pair of sterling silver anklets with intricate designs.",
    categoryId: 6,
    actualPrice: 499.99,
    discountedPrice: 429.99,
    stock: 25,
    material: "Silver",
    weight: 20.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-11T10:00:00Z",
    rating: 3.5,
  },
  {
    productId: 12,
    name: "Diamond Tennis Bracelet",
    description: "An elegant bracelet featuring a row of sparkling diamonds.",
    categoryId: 3,
    actualPrice: 9999.99,
    discountedPrice: 8499.99,
    stock: 10,
    material: "Diamond, Platinum",
    weight: 15.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-12T12:00:00Z",
    rating: 5,
  },
  {
    productId: 13,
    name: "Gold Mangalsutra",
    description: "A traditional 22k gold mangalsutra with black beads.",
    categoryId: 1,
    actualPrice: 3999.99,
    discountedPrice: 3499.99,
    stock: 15,
    material: "Gold",
    weight: 30.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-13T13:00:00Z",
    rating: 4.5,
  },
  {
    productId: 14,
    name: "Platinum Band",
    description: "A simple and elegant platinum band for daily wear.",
    categoryId: 5,
    actualPrice: 2999.99,
    discountedPrice: 2699.99,
    stock: 20,
    material: "Platinum",
    weight: 8.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-14T14:00:00Z",
    rating: 3.5,
  },
  {
    productId: 15,
    name: "Amethyst Drop Earrings",
    description: "Stunning 14k gold earrings with pear-shaped amethyst stones.",
    categoryId: 2,
    actualPrice: 1299.99,
    discountedPrice: 1099.99,
    stock: 30,
    material: "Gold, Amethyst",
    weight: 6.0,
    imageUrl: "https://picsum.photos/seed/picsum/200",
    createdAt: "2024-12-15T15:00:00Z",
  },
];

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
  jewelleryCardData: jewelryInitalData,
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
});

// Selectors
export const selectCartItemsCount = (state: RootState): number =>
  state.jewelleryData.jewelleryCardData.filter((item) => item.isAddedToCart)
    .length;

export const selectCartItems = (state: RootState): IJewelryItem[] =>
  state.jewelleryData.jewelleryCardData.filter((item) => item.isAddedToCart);

// Exports
export const { updateJewelleryData, addToCart, removeFromCart } =
  jewelleryCardSlice.actions;
export const jewelleryCardReducer = jewelleryCardSlice.reducer;
