import useRequest from '@hooks/use-request'
import React, { FC, ReactNode, useEffect, useState } from 'react'

export interface indexProps {
    children: ReactNode
}

const OrderBook: FC<indexProps> = () => {
    const [data, setData] = useState()
    const { doRequest, error, loading } = useRequest({
        url: 'http://localhost:3001/api/crypto/best-exchange-usd?amount=10000&crypto=ETH',
        onSuccess: data => {
            setData(data)
        },
    })

    useEffect(() => {
        doRequest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) return <div>loading...</div>
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>
    if (data) return <div>{JSON.stringify(data, null, 2)}</div>
    else return null
}

export default OrderBook
