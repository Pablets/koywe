export const divideFn = ({ amount, price, qty }: { amount: number; price: number; qty: number }) => {
    const remainingAmount = amount - price * qty
    console.log({ remainingAmount }, remainingAmount > 0)
    if (remainingAmount >= 0) return { result: price * qty, remainingAmount: remainingAmount }
    return { result: amount / price, remainingAmount: 0 }
}
