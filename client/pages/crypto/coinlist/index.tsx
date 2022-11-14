import DropDownMenu from '@components/DropDownMenu'
import Table from '@components/Table'
import { Typography } from '@material-tailwind/react'
import React, { FC, useMemo, useState } from 'react'
import { useEffect } from 'react'
import { coinOptionType, renderedColumn, setFilteredCoins, setFilteredColumns } from 'redux/slices/filterSlice'
import { useGetCoinListQuery } from 'services/coingecko'
import { CurrencyType, IFlatCoin, IRawData } from '../../../models/coinsModel'
import { RootState } from '../../../redux/store'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { useSelector } from 'react-redux'
import CurrencyOptions from '@components/CurrencyOptions'
import ColumnsOptions from '@components/ColumnsOptions'

const CoinList: FC = (): JSX.Element => {
    const { data, error, isLoading } = useGetCoinListQuery('')
    const dispatch = useAppDispatch()
    const { filteredCoins, filteredColumns } = useSelector((state: RootState) => state.filters)

    const [coinData, setCoinData] = useState<IFlatCoin[] | undefined>()
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>('ars')

    const moptions = useMemo(() => {
        const defaultOptions: { [x: string]: boolean } = {}
        data?.forEach(obj => {
            defaultOptions[obj.name] = true
        })

        return defaultOptions
    }, [data])

    useEffect(() => {
        dispatch(setFilteredCoins(moptions))
    }, [dispatch, moptions])

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
    }, [data, selectedCurrency])

    const handleCurrencySelect = (value: string) => {
        setSelectedCurrency(value as CurrencyType)
    }

    const handleCoinFilter = (value: coinOptionType) => {
        dispatch(setFilteredCoins(value))
    }
    const handleColumnFilter = (value: renderedColumn) => {
        dispatch(setFilteredColumns(value))
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
                <div className="m-4 ml-0 mt-0">
                    <CurrencyOptions defaultOption="ars" onSelect={handleCurrencySelect} label={'Currency'} />
                </div>
                <div className="m-4 ml-0 mt-0">
                    <DropDownMenu onSelect={handleCoinFilter} options={filteredCoins} label={'Coins'} />
                </div>
                <div className="m-4 ml-0 mt-0">
                    <ColumnsOptions
                        onSelect={handleColumnFilter}
                        options={filteredColumns}
                        label={'Columns'}
                        lockedColumns={['name', 'image']}
                    />
                </div>
            </div>
            {coinData && (
                <Table caption={'Coin list'} data={coinData} columns={filteredColumns} filteredCoins={filteredCoins} />
            )}
        </div>
    )
}

export default CoinList
