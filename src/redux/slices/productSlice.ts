import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "./cartSlice";

type Product = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export const fetchProducts = createAsyncThunk<
  Product[],
  Record<string, string>
>("product/fetchProductsStatus", async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get<Product[]>(
    `https://6a8568159c451dc67a639285.mockapi.io/products?page=${currentPage}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ProductSliceState {
  items: Product[];
  status: Status;
}

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action, "fulfilled");
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectProductData = (state: RootState) => state.product;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
