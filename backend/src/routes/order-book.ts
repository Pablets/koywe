import express, { NextFunction, Request, Response } from 'express'
import { Target, Adaptee, Adapter } from '../utils/orderBookOffersAdapter'
import { BadRequestError } from '../errors/bad-request-error'
import { ISimulationResponse } from 'src/models/crypto'
import { param, query } from 'express-validator'
import { validateRequest } from '../middlewares/validate-request'

const router = express.Router()

// GET: http://localhost:3001/api/crypto/best-exchange-usd?amount=10000&crypto=BTC

router.get(
    '/api/crypto/best-exchange-usd',
    [
        query('amount').notEmpty().withMessage('Required param: amount=<number>'),
        query('crypto')
            .notEmpty()
            .withMessage('Required param: crypto=<BTC | ETH>')
            .custom(value => {
                const availableCryptos = ['BTC', 'ETH']
                if (!availableCryptos.includes(value)) throw new Error('Required query param: "crypto" (BTC | ETH)')
                else return value
            }),
    ],
    validateRequest,
    async (req: Request, res: Response, next: NextFunction) => {
        const amount = req.query?.amount as unknown as number
        const crypto = req.query?.crypto as 'BTC' | 'ETH'

        try {
            const target = new Target(crypto)
            const adapter = new Adapter(new Adaptee(crypto), crypto)

            const [binanceResponse] = await target.request()
            const [coinbaseResponse] = await adapter.request()

            let response: ISimulationResponse

            if (Number(binanceResponse[0]) < Number(coinbaseResponse[0])) {
                response = {
                    crypto: crypto,
                    amount: amount,
                    usdAmount: Number(binanceResponse[0]) * Number(binanceResponse[1]),
                    exchange: 'binance',
                }
            } else {
                response = {
                    crypto: crypto,
                    amount: amount,
                    usdAmount: Number(coinbaseResponse[0]) * Number(coinbaseResponse[1]),
                    exchange: 'coinbase',
                }
            }

            res.send(response)
        } catch (error) {
            next(error)
        }
    }
)

export { router as orderBookRouter }
