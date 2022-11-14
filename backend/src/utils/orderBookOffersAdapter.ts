import fetch from 'node-fetch'
import { BinanceOrderBookResponse, CoinbaseOrderBookResponse, CryptoType } from 'src/models/crypto'
import { sortFn } from './sortFunction'

export class Target {
    // la respuesta de binance
    private crypto: CryptoType
    constructor(crypto: CryptoType) {
        this.crypto = crypto
    }

    public async request(): Promise<string[][]> {
        const response = await fetch(`https://api.binance.com/api/v3/depth?symbol=${this.crypto}USDT&limit=1`)
        const body: BinanceOrderBookResponse = await response.json()
        return sortFn(body.bids, 'asc', 'price')
    }
}

export class Adaptee {
    // la respuesta de coinbase
    private crypto: CryptoType
    constructor(crypto: CryptoType) {
        this.crypto = crypto
    }

    public async specificRequest(): Promise<CoinbaseOrderBookResponse> {
        const response = await fetch(`https://api.exchange.coinbase.com/products/${this.crypto}-USDT/book?level=1`)
        const body = await response.json()
        return body
    }
}

export class Adapter extends Target {
    private adaptee: Adaptee

    constructor(adaptee: Adaptee, crypto: CryptoType) {
        super(crypto)
        this.adaptee = adaptee
    }

    public async request(): Promise<string[][]> {
        const coinbaseResponse = await this.adaptee.specificRequest()

        const formattedBids = coinbaseResponse.bids.map((bid, idx) => {
            return [bid[0], bid[1]]
        })

        // const asks = (await this.adaptee.specificRequest()).asks.map(asks => [asks[0], asks[1]])
        const response: string[][] = sortFn(formattedBids, 'asc', 'price')

        return response
    }
}
