import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice'
import collectionSlice from "./features/collectionSlice";

export const store = configureStore({
    reducer:{
        searcha: searchReducer,
        collection: collectionSlice
        
    }
})