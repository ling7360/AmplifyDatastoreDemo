import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setCurrentRestaurant: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCurrentRestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer;