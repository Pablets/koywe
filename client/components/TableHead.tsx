import { IColumns } from 'models/coinsModel'
import { FC, useState } from 'react'
import { renderedColumn } from 'redux/slices/filterSlice'

interface TableHeadProps {
    columns: renderedColumn
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
                {Object.keys(columns)
                    .filter(column => columns[column].display)
                    .map(key => {
                        // const cl = sortable ? sortField === accessor && order === 'asc' ? 'up' : sortField === accessor && order === 'desc' ? 'down' : 'default' : ''
                        return (
                            <th
                                key={key.length * Math.random()}
                                onClick={
                                    columns[key].sortable ? () => handleSortingChange(columns[key].accessor) : undefined
                                }
                                className="sticky top-0 z-20 cursor-pointer select-none border-b border-gray-300 bg-blue-gray-900 p-4 text-left font-medium text-blue-gray-400 first:pl-8 last:pr-8"
                                // style={{ zIndex: 11 }}
                            >
                                <div className="flex">
                                    {columns[key].label}
                                    {columns[key].sortable && (
                                        <svg
                                            className="ml-2 h-4 w-4"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                cursor: 'pointer',
                                                transform:
                                                    columns[key].label === sortField && order === 'asc'
                                                        ? 'rotate(180deg)'
                                                        : 'rotate(0deg)',
                                            }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    )}
                                </div>
                            </th>
                        )
                    })}
            </tr>
        </thead>
    )
}

export default TableHead
