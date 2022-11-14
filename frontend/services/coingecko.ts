// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICoin, IRawData } from 'models/coinsModel'
// import type { Pokemon } from './types'

const flattenRawData = (data: ICoin[]): IRawData[] => {
    const flatCoinData = [...data].map((coin: ICoin): IRawData => {
        const flatProps: IRawData = {
            ...coin.market_data,
            current_price: coin.market_data.current_price,
            name: coin.name,
            symbol: coin.symbol,
            id: coin.id,
            image: coin.image,
            market_cap: coin.market_data.market_cap,
            market_cap_rank: coin.market_data.market_cap_rank,
            total_volume: coin.market_data.total_volume,
            high_24h: coin.market_data.high_24h,
            low_24h: coin.market_data.low_24h,
            price_change_24h: coin.market_data.price_change_24h,
            price_change_percentage_24h: coin.market_data.price_change_percentage_24h,
            price_change_percentage_7d: coin.market_data.price_change_percentage_7d,
            price_change_percentage_14d: coin.market_data.price_change_percentage_14d,
            price_change_percentage_30d: coin.market_data.price_change_percentage_30d,
            price_change_percentage_60d: coin.market_data.price_change_percentage_60d,
            price_change_percentage_200d: coin.market_data.price_change_percentage_200d,
            price_change_percentage_1y: coin.market_data.price_change_percentage_1y,
            market_cap_change_24h: coin.market_data.market_cap_change_24h,
            market_cap_change_percentage_24h: coin.market_data.market_cap_change_percentage_24h,
            price_change_24h_in_currency: coin.market_data.price_change_24h_in_currency,
            price_change_percentage_1h_in_currency: coin.market_data.price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency: coin.market_data.price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency: coin.market_data.price_change_percentage_7d_in_currency,
            price_change_percentage_14d_in_currency: coin.market_data.price_change_percentage_14d_in_currency,
            price_change_percentage_30d_in_currency: coin.market_data.price_change_percentage_30d_in_currency,
            price_change_percentage_60d_in_currency: coin.market_data.price_change_percentage_60d_in_currency,
            price_change_percentage_200d_in_currency: coin.market_data.price_change_percentage_200d_in_currency,
            price_change_percentage_1y_in_currency: coin.market_data.price_change_percentage_1y_in_currency,
            market_cap_change_24h_in_currency: coin.market_data.market_cap_change_24h_in_currency,
            market_cap_change_percentage_24h_in_currency: coin.market_data.market_cap_change_24h_in_currency,
        }
        return flatProps
    })
    return flatCoinData
}

// Define a service using a base URL and expected endpoints
export const coingecko = createApi({
    reducerPath: 'coingecko',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/coins' }),
    endpoints: builder => ({
        getCoinList: builder.query<IRawData[], string>({
            query: () => '',
            // An explicit type must be provided to the raw result that the query returns
            // when using `transformResponse`
            //                             v
            transformResponse: (rawResult: ICoin[]) => {
                return flattenRawData(rawResult)
            },
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinListQuery } = coingecko
