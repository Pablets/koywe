import React, { FC, ReactNode, useState, useEffect } from 'react'
import { useGetCoinListQuery } from 'services/coingecko'
import { Input, Select, Option, Typography } from '@material-tailwind/react'
import { CurrencyEnum, CurrencyType } from 'models/coinsModel'
import { IRawData } from '../../../models/coinsModel'
import { formatAmount } from 'utils/formatter'

const Calculator: FC = (): JSX.Element => {
    const { data, error, isLoading } = useGetCoinListQuery('')
    const [ammount, setAmmount] = useState<number>(0)
    const [selectedCoin, setSelectedCoin] = useState<IRawData>()
    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType | undefined>()
    const [result, setResult] = useState<number>(0)

    const onChangeHandler = (e: ReactNode) => {
        if (!e) return
        const [selected] =
            data?.filter(coin => {
                const a: string = coin.name.toLowerCase()
                const b: string = e.toString().toLowerCase()
                return a === b
            }) || []

        setSelectedCoin(selected)
    }

    const onCurrencySelect = (e: ReactNode) => {
        setSelectedCurrency((e && (e as CurrencyType)) || 'ars')
    }

    useEffect(() => {
        if (!selectedCurrency) return
        if (!selectedCoin?.current_price[selectedCurrency]) return
        if (!ammount) return
        const result = ammount * Number(selectedCoin?.current_price[selectedCurrency] || 0)
        setResult(result)
    }, [ammount, selectedCoin?.current_price, selectedCurrency])

    if (error) return <h1>error</h1>
    if (isLoading) return <h1>isLoading</h1>

    return (
        <div className="min-w-full">
            <div className="my-2">
                <Typography variant="h1">Calculator</Typography>
            </div>
            <div className="rounded border border-gray-500 lg:flex lg:flex-row">
                <div className="my-8 w-full justify-center text-center md:flex md:items-center">
                    <Typography variant="h1">$ {formatAmount(result)}</Typography>
                </div>
                <div className="flex flex-wrap justify-evenly xl:flex-wrap">
                    <div className="xs:my-0 m-4 w-full">
                        <Input onChange={e => setAmmount(Number(e.target.value))} label="Amount" />
                    </div>
                    <div className="xs:my-0 m-4 w-full">
                        <Select
                            size="md"
                            label={'Select a coin'}
                            onChange={e => onChangeHandler(e)}
                            value={selectedCoin?.name}
                        >
                            {data &&
                                data.map(coin => {
                                    return (
                                        <Option key={coin.id} value={coin.name}>
                                            {coin.name}
                                        </Option>
                                    )
                                })}
                        </Select>
                    </div>
                    <div className="xs:my-0 m-4 w-full">
                        <Select
                            size="md"
                            label={'Select a currency'}
                            onChange={e => onCurrencySelect(e)}
                            value={selectedCurrency}
                        >
                            {Object.values(CurrencyEnum).map(option => {
                                return (
                                    <Option key={option} value={option}>
                                        {option}
                                    </Option>
                                )
                            })}
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
