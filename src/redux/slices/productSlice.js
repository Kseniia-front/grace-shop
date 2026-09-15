import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "product/fetchProductsStatus",
  async (params, thankApi) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://6a8568159c451dc67a639285.mockapi.io/products?page=${currentPage}&limit=4&${category}sortBy=${sortBy}&order=${order}${search}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: "loading",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log(action, "rejected");
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});

export const selectProductData = (state) => state.product;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
