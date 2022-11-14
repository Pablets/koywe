import { IFlatCoin } from '../models/coinsModel'
import { FC } from 'react'
import { useSortableTable } from '@hooks/useSortableTable'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { coinOptionType } from 'redux/slices/filterSlice'
import { renderedColumn } from '../redux/slices/filterSlice'

export interface TableProps {
    caption: string
    data: IFlatCoin[]
    columns: renderedColumn
    filteredCoins: coinOptionType
}

const Table: FC<TableProps> = ({ data, columns, filteredCoins }) => {
    const { tableData, handleSorting } = useSortableTable(data, { filteredCoins, columns })

    return (
        <div className="block w-full overflow-hidden rounded-lg" style={{ maxHeight: '60vh' }}>
            <div className="scrollbar box-border h-full max-h-screen w-full overflow-auto rounded-lg md:max-h-96 lg:h-full">
                <table className="scrollbar h-full w-full table-auto text-sm">
                    <TableHead columns={columns} handleSorting={handleSorting} />
                    <TableBody columns={columns} tableData={tableData} />
                </table>
            </div>
        </div>
    )
}

export default Table
