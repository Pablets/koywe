export const sortFn = (data: string[][], sortOrder: 'asc' | 'desc', value: 'price' | 'qty') =>
    data.sort((a, b) => {
        const idx: 1 | 0 = value === 'price' ? 0 : 1
        const _idx: 1 | 0 = value === 'price' ? 1 : 0

        if (!a[idx]) return 1
        if (!b[idx]) return -1
        if (!a[idx] && !b[idx]) return 0
        if (a[idx] === b[idx])
            return (
                a[_idx].toString().localeCompare(b[_idx].toString(), 'en', {
                    numeric: true,
                }) * (sortOrder === 'asc' ? 1 : -1)
            )

        return (
            a[idx].toString().localeCompare(b[idx].toString(), 'en', {
                numeric: true,
            }) * (sortOrder === 'asc' ? 1 : -1)
        )
    })
