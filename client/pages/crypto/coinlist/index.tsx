import CurrencyOptions from '@components/CurrencyOptions'
import DropDownMenu from '@components/DropDownMenu'
import Table from '@components/Table'
import { Typography } from '@material-tailwind/react'
import React, { FC, useMemo, useState } from 'react'
import { useEffect } from 'react'
import { coinOptionType, setFilteredCoins } from 'redux/slices/filterSlice'
import { useGetCoinListQuery } from 'services/coingecko'
import { CurrencyType, IColumns, IFlatCoin, IRawData } from '../../../models/coinsModel'
import { RootState } from '../../../redux/store'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { useSelector } from 'react-redux'

export interface renderedColumns {
    label: string
    accessor: IColumns
    sortable: boolean
}

const columns: renderedColumns[] = [
    { accessor: 'name', label: 'name', sortable: true },
    { accessor: 'image', label: 'logo', sortable: false },
    { accessor: 'symbol', label: 'symbol', sortable: true },
    { accessor: 'current_price', label: 'current_price', sortable: true },
    { accessor: 'market_cap_rank', label: 'market_cap_rank', sortable: true },
    { accessor: 'price_change_24h', label: 'price_change_24h', sortable: true },
    { accessor: 'price_change_percentage_24h', label: 'price_change_percentage_24h', sortable: true },
    { accessor: 'price_change_percentage_7d', label: 'price_change_percentage_7d', sortable: true },
    { accessor: 'price_change_percentage_14d', label: 'price_change_percentage_14d', sortable: true },
    { accessor: 'price_change_percentage_30d', label: 'price_change_percentage_30d', sortable: true },
    { accessor: 'price_change_percentage_60d', label: 'price_change_percentage_60d', sortable: true },
    { accessor: 'price_change_percentage_200d', label: 'price_change_percentage_200d', sortable: true },
    { accessor: 'price_change_percentage_1y', label: 'price_change_percentage_1y', sortable: true },
    { accessor: 'market_cap_change_24h', label: 'market_cap_change_24h', sortable: true },
    { accessor: 'market_cap_change_percentage_24h', label: 'market_cap_change_percentage_24h', sortable: true },
    { accessor: 'market_cap', label: 'market_cap', sortable: true },
    { accessor: 'total_volume', label: 'total_volume', sortable: true },
    { accessor: 'high_24h', label: 'high_24h', sortable: true },
    { accessor: 'low_24h', label: 'low_24h', sortable: true },
    { accessor: 'price_change_24h_in_currency', label: 'price_change_24h_in_currency', sortable: true },
    {
        accessor: 'price_change_percentage_1h_in_currency',
        label: 'price_change_percentage_1h_in_currency',
        sortable: true,
    },
    {
        accessor: 'price_change_percentage_24h_in_currency',
        label: 'price_change_percentage_24h_in_currency',
        sortable: true,
    },
    {
        accessor: 'price_change_percentage_7d_in_currency',
        label: 'price_change_percentage_7d_in_currency',
        sortable: true,
    },
    {
        accessor: 'price_change_percentage_14d_in_currency',
        label: 'price_change_percentage_14d_in_currency',
        sortable: true,
    },
    {
        accessor: 'price_change_percentage_30d_in_currency',
        label: 'price_change_percentage_30d_in_currency',
        sortable: true,
    },
    {
        accessor: 'price_change_percentage_60d_in_currency',
        label: 'price_change_percentage_60d_in_currency',
        sortable: true,
    },
    {
        accessor: 'price_change_percentage_200d_in_currency',
        label: 'price_change_percentage_200d_in_currency',
        sortable: true,
    },
    {
        accessor: 'price_change_percentage_1y_in_currency',
        label: 'price_change_percentage_1y_in_currency',
        sortable: true,
    },
    { accessor: 'market_cap_change_24h_in_currency', label: 'market_cap_change_24h_in_currency', sortable: true },
    {
        accessor: 'market_cap_change_percentage_24h_in_currency',
        label: 'market_cap_change_percentage_24h_in_currency',
        sortable: true,
    },
]

const CoinList: FC = (): JSX.Element => {
    const { data, error, isLoading } = useGetCoinListQuery('')
    const dispatch = useAppDispatch()
    const { filteredCoins } = useSelector((state: RootState) => state.filters)

    const [coinData, setCoinData] = useState<IFlatCoin[] | undefined>()
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>('ars')

    const moptions = useMemo(() => {
        const defaultOptions: { [x: string]: boolean } = {}
        data?.forEach(obj => {
            defaultOptions[obj.name] = true
        })
        console.log(defaultOptions)
        return defaultOptions
    }, [data])

    useEffect(() => {
        const flattenRawData = (data: IRawData[], selectedCurrency: CurrencyType): IFlatCoin[] => {
            const flatCoinData = [...data].map((coin: IRawData): IFlatCoin => {
                const flatProps: IFlatCoin = {
                    ...coin,
                    current_price: coin.current_price[selectedCurrency],
                    name: coin.name,
                    symbol: coin.symbol,
                    id: coin.id,
                    image: coin.image.small,
                    market_cap: coin.market_cap[selectedCurrency],
                    market_cap_rank: coin.market_cap_rank,
                    total_volume: coin.total_volume[selectedCurrency],
                    high_24h: coin.high_24h[selectedCurrency],
                    low_24h: coin.low_24h[selectedCurrency],
                    price_change_24h: coin.price_change_24h,
                    price_change_percentage_24h: coin.price_change_percentage_24h,
                    price_change_percentage_7d: coin.price_change_percentage_7d,
                    price_change_percentage_14d: coin.price_change_percentage_14d,
                    price_change_percentage_30d: coin.price_change_percentage_30d,
                    price_change_percentage_60d: coin.price_change_percentage_60d,
                    price_change_percentage_200d: coin.price_change_percentage_200d,
                    price_change_percentage_1y: coin.price_change_percentage_1y,
                    market_cap_change_24h: coin.market_cap_change_24h,
                    market_cap_change_percentage_24h: coin.market_cap_change_percentage_24h,
                    price_change_24h_in_currency: coin.price_change_24h_in_currency[selectedCurrency],
                    price_change_percentage_1h_in_currency:
                        coin.price_change_percentage_1h_in_currency[selectedCurrency],
                    price_change_percentage_24h_in_currency:
                        coin.price_change_percentage_24h_in_currency[selectedCurrency],
                    price_change_percentage_7d_in_currency:
                        coin.price_change_percentage_7d_in_currency[selectedCurrency],
                    price_change_percentage_14d_in_currency:
                        coin.price_change_percentage_14d_in_currency[selectedCurrency],
                    price_change_percentage_30d_in_currency:
                        coin.price_change_percentage_30d_in_currency[selectedCurrency],
                    price_change_percentage_60d_in_currency:
                        coin.price_change_percentage_60d_in_currency[selectedCurrency],
                    price_change_percentage_200d_in_currency:
                        coin.price_change_percentage_200d_in_currency[selectedCurrency],
                    price_change_percentage_1y_in_currency:
                        coin.price_change_percentage_1y_in_currency[selectedCurrency],
                    market_cap_change_24h_in_currency: coin.market_cap_change_24h_in_currency[selectedCurrency],
                    market_cap_change_percentage_24h_in_currency:
                        coin.market_cap_change_24h_in_currency[selectedCurrency],
                }
                return flatProps
            })
            return flatCoinData
        }
        if (!data) return
        const flattenedData = flattenRawData(data, selectedCurrency)
        setCoinData(flattenedData)

        dispatch(setFilteredCoins(moptions))
    }, [data, dispatch, moptions, selectedCurrency])

    const handleCurrencySelect = (value: string) => {
        setSelectedCurrency(value as CurrencyType)
    }

    const handleCoinFilter = (value: coinOptionType) => {
        dispatch(setFilteredCoins(value))
    }

    if (isLoading) return <Typography>Loading...</Typography>
    if (error)
        return (
            <div>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
        )

    return (
        <div className="min-w-full">
            <div className="my-2">
                <Typography variant="h1">CoinList</Typography>
            </div>
            <div className="flex flex-wrap pb-4">
                <CurrencyOptions defaultOption="ars" onSelect={handleCurrencySelect}>
                    Currency
                </CurrencyOptions>
                <DropDownMenu onSelect={handleCoinFilter} options={filteredCoins} />
            </div>
            {coinData && (
                <Table caption={'Coin list'} data={coinData} columns={columns} filteredCoins={filteredCoins} />
            )}
        </div>
    )
}

export default CoinList
