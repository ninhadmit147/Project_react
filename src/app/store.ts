import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authApi } from '../service/auth';
import { cateApi } from '../service/category';
import { productApi } from '../service/product';
import { sizeApi } from '../service/size';

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [cateApi.reducerPath]: cateApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [sizeApi.reducerPath]: sizeApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware, cateApi.middleware, authApi.middleware, sizeApi.middleware),
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