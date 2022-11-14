import { ISimulationResponse } from 'src/models/crypto'

export const simulateCryptoPurchase = (_amount: number, orderedOffers: string[][]): ISimulationResponse => {
    const response: ISimulationResponse = {
        crypto: 'BTC',
        amount: _amount / Number(orderedOffers[0][0]),
        usdAmount: _amount,
        exchange: 'binance',
    }
    return response
}
