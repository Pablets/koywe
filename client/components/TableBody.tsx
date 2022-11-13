import Image from 'next/image'
import { renderedColumns } from 'pages/crypto/coinlist'
import React, { FC } from 'react'
import { IFlatCoin } from '../models/coinsModel'

export interface TableBodyProps {
    tableData: IFlatCoin[]
    columns: renderedColumns[]
}

const TableBody: FC<TableBodyProps> = ({ tableData, columns }) => {
    return (
        <tbody className=" odd:bg-blue-gray-600 even:bg-orange-200">
            {tableData.map(data => (
                <tr
                    key={data.id}
                    className="border-slate-100 text-slate-500 dark:border-slate-700 dark:text-slate-400 border-b p-4 odd:bg-blue-gray-300 even:bg-light-blue-200"
                >
                    {columns.map(({ accessor }) => {
                        const tData = data[accessor] ? data[accessor] : '——'
                        if (accessor === 'image')
                            return (
                                <td key={accessor} className=" border-b p-4 first:pl-8 last:pr-8">
                                    <Image src={tData as string} width={20} height={20} alt="Coin logo" />
                                </td>
                            )
                        return (
                            <td
                                key={accessor}
                                className={`border-b p-4 first:pl-8 last:pr-8 ${
                                    accessor === 'name' ? 'sticky left-0 z-10 bg-blue-gray-900 text-blue-gray-400' : ''
                                }`}
                                style={accessor === 'name' ? { position: 'sticky', left: 0, zIndex: 5 } : undefined}
                            >
                                {tData}
                            </td>
                        )
                    })}
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody
