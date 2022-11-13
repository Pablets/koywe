import { rest } from 'msw'

import coinResponse from './coinResponse.json'

export const handlers = [
  rest.post('https://api.coingecko.com/api/v3/coins', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(coinResponse))
  }),
]
