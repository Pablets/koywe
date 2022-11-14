import React, { FC, ReactNode, useState, useEffect } from 'react'
import { Input, Select, Option, Typography, Button } from '@material-tailwind/react'
import { IRawData } from '../../../models/coinsModel'
import { formatAmount } from 'utils/formatter'
import useRequest from '@hooks/use-request'
import { Router } from 'express'

export interface ISimulationResponse {
    crypto: 'BTC' | 'ETH'
    amount: number
    usdAmount: number
    exchange: 'coinbase' | 'binance'
}

const Calculator: FC = (): JSX.Element => {
    const [result, setResult] = useState<ISimulationResponse>()
    const [ammount, setAmmount] = useState<number>(0)
    const [selectedCoin, setSelectedCoin] = useState<'ETH' | 'BTC'>()
    const { doRequest, error, loading } = useRequest({
        url: `http://localhost:3001/api/crypto/best-exchange-usd?amount=${ammount}&crypto=${selectedCoin}`,
        method: 'get',
        onSuccess: data => {
            setResult({ ...data })
        },
    })

    if (error)
        return (
            <div>
                <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
        )

    return (
        <div className="min-w-full">
            <div className="my-2">
                <Typography variant="h1">Order books</Typography>
            </div>
            <div className="rounded border border-gray-500 lg:flex lg:flex-row">
                <div className="my-8 flex w-full items-center justify-center text-center">
                    {loading ? 'loading' : null}
                    {result && (
                        <div className="flex flex-col items-start">
                            <Typography variant="h4">Crypto: {result.crypto}</Typography>
                            <Typography variant="h4">Amount: {result.amount}</Typography>
                            <Typography variant="h4">UsdAmount: $ {formatAmount(result.usdAmount)}</Typography>
                            <Typography variant="h4">Exchange: {result.exchange}</Typography>
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap justify-evenly xl:flex-wrap">
                    <div className="xs:my-0 m-4 w-full">
                        <Input onChange={e => setAmmount(Number(e.target.value))} label="Amount to exchange" />
                    </div>
                    <div className="xs:my-0 m-4 w-full">
                        <Select
                            size="md"
                            label={'Select a crypto'}
                            value={selectedCoin}
                            onChange={e => setSelectedCoin(e as any)}
                        >
                            {['ETH', 'BTC'].map((coin, idx) => {
                                return (
                                    <Option key={idx} value={coin}>
                                        {coin}
                                    </Option>
                                )
                            })}
                        </Select>
                    </div>
                    <div className="xs:my-0 m-4 w-full">
                        <Button
                            onClick={() => {
                                doRequest()
                                if (result?.amount) {
                                    setResult(undefined)
                                }
                            }}
                            disabled={!selectedCoin || !ammount}
                        >
                            Calculate best exchange
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator
