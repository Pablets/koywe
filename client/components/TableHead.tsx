import { IColumns } from 'models/coinsModel'
import { renderedColumns } from 'pages/crypto/coinlist'
import { FC, useState } from 'react'

interface TableHeadProps {
    columns: renderedColumns[]
    handleSorting: (sortField: IColumns, sortOrder: 'asc' | 'desc') => void
}

const TableHead: FC<TableHeadProps> = ({ columns, handleSorting }) => {
    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')

    const handleSortingChange = (accessor: IColumns) => {
        const sortOrder = accessor === sortField && order === 'asc' ? 'desc' : 'asc'
        setSortField(accessor)
        setOrder(sortOrder)
        handleSorting(accessor, sortOrder)
    }

    return (
        <thead className="overflow-hidden rounded-lg ">
            <tr className="p-4">
                {columns.map(({ label, accessor, sortable }) => {
                    // const cl = sortable ? sortField === accessor && order === 'asc' ? 'up' : sortField === accessor && order === 'desc' ? 'down' : 'default' : ''
                    return (
                        <th
                            key={accessor}
                            onClick={sortable ? () => handleSortingChange(accessor) : undefined}
                            className="sticky top-0 z-20 border-b border-gray-300 bg-blue-gray-900 p-4  text-left font-medium text-blue-gray-400 first:pl-8 last:pr-8"
                            // style={{ zIndex: 11 }}
                        >
                            {label}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

export default TableHead
