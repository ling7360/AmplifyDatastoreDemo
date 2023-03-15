import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {},
}

export const detailedOrderSlice = createSlice({
    name: 'detailedOrder',
    initialState,
    reducers: {
        setDetailedOrder: (state, action) => {
            state.value = action.payload.data
        },
    },
})

export const { setDetailedOrder } = detailedOrderSlice.actions

export default detailedOrderSlice.reducer