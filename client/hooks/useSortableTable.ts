import { useState, useEffect } from 'react'
import { coinOptionType, renderedColumn } from 'redux/slices/filterSlice'
import { IColumns, IFlatCoin } from '../models/coinsModel'

// function getDefaultSorting(defaultTableData: any, columns: any) {
//     const sorted = [...defaultTableData].sort((a, b) => {
//         const filterColumn = columns.filter(column => column.sortbyOrder)

//         // Merge all array objects into single object and extract accessor and sortbyOrder keys
//         let { accessor = 'id', sortbyOrder = 'asc' } = Object.assign({}, ...filterColumn)

//         if (a[accessor] === null) return 1
//         if (b[accessor] === null) return -1
//         if (a[accessor] === null && b[accessor] === null) return 0

//         const ascending = a[accessor].toString().localeCompare(b[accessor].toString(), 'en', {
//             numeric: true,
//         })

//         return sortbyOrder === 'asc' ? ascending : -ascending
//     })
//     return sorted
// }

export const useSortableTable = (
    data: IFlatCoin[],
    { filteredCoins, columns }: { filteredCoins: coinOptionType; columns?: renderedColumn }
) => {
    const [tableData, setTableData] = useState<IFlatCoin[]>(data)

    const handleSorting = (sortField: IColumns, sortOrder: 'asc' | 'desc') => {
        if (sortField) {
            const sorted = [...data]
                .filter(coin => filteredCoins[coin.name])
                .sort((a, b) => {
                    if (!a?.[sortField]) return 1
                    if (!b?.[sortField]) return -1
                    if (!a?.[sortField] && !b?.[sortField]) return 0
                    return (
                        a[sortField]!.toString().localeCompare(b[sortField]!.toString(), 'en', {
                            numeric: true,
                        }) * (sortOrder === 'asc' ? 1 : -1)
                    )
                })
            setTableData(sorted)
        }
    }

    useEffect(() => {
        setTableData(data.filter(coin => filteredCoins[coin.name]))
    }, [data, filteredCoins])

    return { tableData, handleSorting }
}
