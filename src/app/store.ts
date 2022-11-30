import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cateApi } from '../service/category';
import { productApi } from '../service/product';

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [cateApi.reducerPath]: cateApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, cateApi.middleware),
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;