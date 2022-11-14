import { rest } from 'msw'

import coinResponse from './coinResponse.json'
import binanceResponse from './binanceResponse.json'

export const handlers = [
  rest.get('https://api.coingecko.com/api/v3/coins', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(coinResponse))
  }),
  rest.get('https://api.binance.com/api/v3/depth?symbol=BTCUSDT', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(binanceResponse))
  }),
]
