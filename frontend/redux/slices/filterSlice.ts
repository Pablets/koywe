import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'redux/store'
import { IColumns } from 'models/coinsModel'

export interface columnInterface {
    label: string
    accessor: IColumns
    sortable: boolean
    display: boolean
}

export interface renderedColumn {
    [x: string]: columnInterface
}

export type coinOptionType = { [x: string]: boolean }
// Define a type for the slice state
interface filteredCoinsState {
    filteredCoins: coinOptionType
    filteredColumns: renderedColumn
}

// Define the initial state using that type
const initialState: filteredCoinsState = {
    filteredCoins: {
        Bitcoin: true,
        Ethereum: true,
        Tether: true,
        BNB: true,
        'USD Coin': true,
        'Binance USD': true,
        XRP: true,
        Dogecoin: true,
        Cardano: true,
        Polygon: true,
        Polkadot: true,
        'Lido Staked Ether': true,
        'Shiba Inu': true,
        Dai: true,
        Solana: true,
        TRON: true,
        OKB: true,
        Litecoin: true,
        Uniswap: true,
        'Wrapped Bitcoin': true,
        Avalanche: true,
        'LEO Token': true,
        'Cosmos Hub': true,
        Chainlink: true,
        'Ethereum Classic': true,
        Stellar: true,
        Monero: true,
        'The Open Network': true,
        Cronos: true,
        'Bitcoin Cash': true,
        Algorand: true,
        'NEAR Protocol': true,
        Quant: true,
        VeChain: true,
        Filecoin: true,
        Flow: true,
        'Terra Luna Classic': true,
        Frax: true,
        Hedera: true,
        Chiliz: true,
        'MultiversX (Elrond)': true,
        'Internet Computer': true,
        Chain: true,
        EOS: true,
        Tezos: true,
        'The Sandbox': true,
        ApeCoin: true,
        'Theta Network': true,
        TrueUSD: true,
        'Pax Dollar': true,
    },
    filteredColumns: {
        name: { display: true, accessor: 'name', label: 'name', sortable: true },
        image: { display: true, accessor: 'image', label: 'logo', sortable: false },
        symbol: { display: true, accessor: 'symbol', label: 'symbol', sortable: true },
        current_price: { display: true, accessor: 'current_price', label: 'current_price', sortable: true },
        market_cap_rank: { display: true, accessor: 'market_cap_rank', label: 'market_cap_rank', sortable: true },
        price_change_24h: { display: true, accessor: 'price_change_24h', label: 'price_change_24h', sortable: true },
        price_change_percentage_24h: {
            display: true,
            accessor: 'price_change_percentage_24h',
            label: 'price_change_percentage_24h',
            sortable: true,
        },
        price_change_percentage_7d: {
            display: true,
            accessor: 'price_change_percentage_7d',
            label: 'price_change_percentage_7d',
            sortable: true,
        },
        price_change_percentage_14d: {
            display: true,
            accessor: 'price_change_percentage_14d',
            label: 'price_change_percentage_14d',
            sortable: true,
        },
        price_change_percentage_30d: {
            display: true,
            accessor: 'price_change_percentage_30d',
            label: 'price_change_percentage_30d',
            sortable: true,
        },
        price_change_percentage_60d: {
            display: true,
            accessor: 'price_change_percentage_60d',
            label: 'price_change_percentage_60d',
            sortable: true,
        },
        price_change_percentage_200d: {
            display: true,
            accessor: 'price_change_percentage_200d',
            label: 'price_change_percentage_200d',
            sortable: true,
        },
        price_change_percentage_1y: {
            display: true,
            accessor: 'price_change_percentage_1y',
            label: 'price_change_percentage_1y',
            sortable: true,
        },
        market_cap_change_24h: {
            display: true,
            accessor: 'market_cap_change_24h',
            label: 'market_cap_change_24h',
            sortable: true,
        },
        market_cap_change_percentage_24h: {
            display: true,
            accessor: 'market_cap_change_percentage_24h',
            label: 'market_cap_change_percentage_24h',
            sortable: true,
        },
        market_cap: { display: true, accessor: 'market_cap', label: 'market_cap', sortable: true },
        total_volume: { display: true, accessor: 'total_volume', label: 'total_volume', sortable: true },
        high_24h: { display: true, accessor: 'high_24h', label: 'high_24h', sortable: true },
        low_24h: { display: true, accessor: 'low_24h', label: 'low_24h', sortable: true },
        price_change_24h_in_currency: {
            display: true,
            accessor: 'price_change_24h_in_currency',
            label: 'price_change_24h_in_currency',
            sortable: true,
        },
        price_change_percentage_1h_in_currency: {
            display: true,
            accessor: 'price_change_percentage_1h_in_currency',
            label: 'price_change_percentage_1h_in_currency',
            sortable: true,
        },
        price_change_percentage_24h_in_currency: {
            display: true,
            accessor: 'price_change_percentage_24h_in_currency',
            label: 'price_change_percentage_24h_in_currency',
            sortable: true,
        },
        price_change_percentage_7d_in_currency: {
            display: true,
            accessor: 'price_change_percentage_7d_in_currency',
            label: 'price_change_percentage_7d_in_currency',
            sortable: true,
        },
        price_change_percentage_14d_in_currency: {
            display: true,
            accessor: 'price_change_percentage_14d_in_currency',
            label: 'price_change_percentage_14d_in_currency',
            sortable: true,
        },
        price_change_percentage_30d_in_currency: {
            display: true,
            accessor: 'price_change_percentage_30d_in_currency',
            label: 'price_change_percentage_30d_in_currency',
            sortable: true,
        },
        price_change_percentage_60d_in_currency: {
            display: true,
            accessor: 'price_change_percentage_60d_in_currency',
            label: 'price_change_percentage_60d_in_currency',
            sortable: true,
        },
        price_change_percentage_200d_in_currency: {
            display: true,
            accessor: 'price_change_percentage_200d_in_currency',
            label: 'price_change_percentage_200d_in_currency',
            sortable: true,
        },
        price_change_percentage_1y_in_currency: {
            display: true,
            accessor: 'price_change_percentage_1y_in_currency',
            label: 'price_change_percentage_1y_in_currency',
            sortable: true,
        },
        market_cap_change_24h_in_currency: {
            display: true,
            accessor: 'market_cap_change_24h_in_currency',
            label: 'market_cap_change_24h_in_currency',
            sortable: true,
        },
        market_cap_change_percentage_24h_in_currency: {
            display: true,
            accessor: 'market_cap_change_percentage_24h_in_currency',
            label: 'market_cap_change_percentage_24h_in_currency',
            sortable: true,
        },
    },
}

export const filtersSlice = createSlice({
    name: 'filters',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setFilteredCoins: (state, action: PayloadAction<coinOptionType>) => {
            state.filteredCoins = action.payload
        },
        setFilteredColumns: (state, action: PayloadAction<renderedColumn>) => {
            state.filteredColumns = { ...state.filteredColumns, ...action.payload }
        },
    },
})

export const { setFilteredCoins, setFilteredColumns } = filtersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFilters = (state: RootState) => state.filters.filteredCoins

export default filtersSlice.reducer
