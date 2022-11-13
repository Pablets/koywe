import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'

export type coinOptionType = { [x: string]: boolean }
// Define a type for the slice state
interface filteredCoinsState {
    filteredCoins: coinOptionType
}

// Define the initial state using that type
const initialState: filteredCoinsState = {
    filteredCoins: { bitcoin: true },
}

export const filtersSlice = createSlice({
    name: 'filters',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setFilteredCoins: (state, action: PayloadAction<coinOptionType>) => {
            state.filteredCoins = action.payload
        },
    },
})

export const { setFilteredCoins } = filtersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilters = (state: RootState) => state.filters.filteredCoins

export default filtersSlice.reducer
