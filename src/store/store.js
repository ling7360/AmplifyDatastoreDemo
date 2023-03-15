import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from '../redux/restaurantSlice';
import userSlice from '../redux/userSlice';
import orderSlice from '../redux/orderSlice';
// import orderHistorySlice from '../redux/orderHistorySlice';

export const store = configureStore({
    reducer: {
        restaurant: restaurantSlice,
        user: userSlice,
        order: orderSlice,
        // orderHistory: orderHistorySlice,
    },
})