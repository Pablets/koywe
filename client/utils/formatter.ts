export const formatAmount = (value: string | number, minDecimals = 0, maxDecimals = 0) => {
    const typeSafeValue = typeof value === 'string' ? value : value.toString()

    return parseFloat(typeSafeValue).toLocaleString('es-AR', {
        minimumFractionDigits: minDecimals,
        maximumFractionDigits: maxDecimals,
    })
}
