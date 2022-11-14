import { sortFn } from '../sortFunction'

const offers: string[][] = [
    [
        '4', // PRICE
        '29', // QTY vendo 431 bitcoins a 4.0000xx dolares
    ],
    [
        '4', // PRICE
        '25', // QTY vendo 431 bitcoins a 4.0000xx dolares
    ],
    [
        '5', // PRICE
        '30', // QTY
    ],
    [
        '10', // PRICE
        '15', // QTY
    ],
    [
        '4', // PRICE
        '27', // QTY vendo 431 bitcoins a 4.0000xx dolares
    ],
]

describe('Sort function', () => {
    test('should be defined', () => {
        expect(sortFn).toBeTruthy()
    })
    test('should sort the items upward by price', () => {
        const result = sortFn(offers, 'asc', 'price')

        expect(result[0][0]).toBe('4')
    })
    test('should sort the items downward by price', () => {
        const result = sortFn(offers, 'desc', 'price')
        expect(result[0][0]).toBe('10')
    })
    test('should sort the items upward by qty', () => {
        const result = sortFn(offers, 'asc', 'qty')

        expect(result[0][1]).toBe('15')
    })
    test('should sort the items downward by qty', () => {
        const result = sortFn(offers, 'desc', 'qty')

        expect(result[0][1]).toBe('30')
    })
    test('should sort equal items downward by qty when the price is the same and the order is "desc"', () => {
        const result = sortFn(offers, 'desc', 'price')

        expect(result[2][1]).toBe('29')
        expect(result[3][1]).toBe('27')
        expect(result[4][1]).toBe('25')
    })
    test('should sort equal items upward by qty when the price is the same and the order is "asc"', () => {
        const result = sortFn(offers, 'asc', 'price')

        expect(result[0][0]).toBe('4')
        expect(result[0][1]).toBe('25')

        expect(result[1][0]).toBe('4')
        expect(result[1][1]).toBe('27')

        expect(result[2][0]).toBe('4')
        expect(result[2][1]).toBe('29')

        expect(result[3][0]).toBe('5')
        expect(result[3][1]).toBe('30')

        expect(result[4][0]).toBe('10')
        expect(result[4][1]).toBe('15')
    })
    test('should sort equal items upward by price when the qty is the same and the order is "asc"', () => {
        //prettier-ignore
        const offers: string[][] = [ [ '3', '29', ], [ '1', '29', ],[ '49', '29', ], [ '5', '30', ], [ '15', '299', ],[ '17', '299', ] ]

        const result = sortFn(offers, 'asc', 'qty')

        expect(result[0][0]).toBe('1')
        expect(result[0][1]).toBe('29')

        expect(result[1][0]).toBe('3')
        expect(result[1][1]).toBe('29')

        expect(result[2][0]).toBe('49')
        expect(result[2][1]).toBe('29')

        expect(result[3][0]).toBe('5')
        expect(result[3][1]).toBe('30')

        expect(result[4][0]).toBe('15')
        expect(result[4][1]).toBe('299')

        expect(result[5][0]).toBe('17')
        expect(result[5][1]).toBe('299')
    })
})
