import { simulateCryptoPurchase } from '../simulateCryptoPurchase'
import { ISimulationResponse } from '../../models/crypto'

const offers: string[][] = [
    [
        '4.00000200', // PRICE
        '431.00000000', // QTY vende 431 bitcoins a 4.00000200 dolares
    ],
    [
        '3.90000000', // PRICE
        '43.00000000', // QTY
    ],
    [
        '4.00000000', // PRICE
        '1431.00000000', // QTY
    ],
]

describe('Sort', () => {
    test('should be defined', () => {
        const result = simulateCryptoPurchase(1, offers)
        expect(result).toBeDefined()
    })

    test('should return with a IResponse interface', () => {
        const result = simulateCryptoPurchase(1, offers)
        const response: ISimulationResponse = {
            crypto: 'BTC',
            amount: 0,
            usdAmount: 0,
            exchange: 'coinbase',
        }

        expect(typeof result === typeof response).toBe(true)
    })

    test('should divide', () => {
        const result = simulateCryptoPurchase(1, offers)
        const response: ISimulationResponse = {
            crypto: 'BTC',
            amount: 0,
            usdAmount: 0,
            exchange: 'coinbase',
        }

        expect(typeof result === typeof response).toBe(true)
    })
})
