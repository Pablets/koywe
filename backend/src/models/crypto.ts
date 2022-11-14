export interface ISimulationResponse {
    crypto: 'BTC' | 'ETH'
    amount: number
    usdAmount: number
    exchange: 'coinbase' | 'binance'
}

/*

{
  "lastUpdateId": 1027024,
  "bids": [
    [
      "4.00000000",     // PRICE
      "431.00000000"    // QTY
    ]
  ],
  "asks": [
    [
      "4.00000200",
      "12.00000000"
    ]
  ]
}

 */

export interface BinanceOrderBookResponse {
    lastUpdateId: number
    bids: string[][]
    asks: string[][]
}

/*

    {
"bids": [
[
"1225.08",     // PRICE
"0.40876647",  // QTY
1
]
],
"asks": [
[
"1225.65",      // PRICE
"0.40858216",   // QTY
1
]
],
"sequence": 6134828058,
"auction_mode": false,
"auction": null
}

 */

export interface CoinbaseOrderBookResponse {
    bids: [string, string, number][]
    asks: [string, string, number][]
    sequence: number
    auction_mode: boolean
    auction: null
}

export type CryptoType = 'BTC' | 'ETH'
