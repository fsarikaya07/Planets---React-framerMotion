import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { planetsApi } from "../features/planetsApi";


export const store = configureStore({
    reducer:{
        [planetsApi.reducerPath]: planetsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(planetsApi.middleware)
    
})

