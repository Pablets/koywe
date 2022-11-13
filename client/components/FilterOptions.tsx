import React, { FC, ReactNode, useState } from 'react'

import { Select, Option } from '@material-tailwind/react'
import { CurrencyType } from '../models/coinsModel'

export interface FilterOptionsProps {
    onSelect: (value: CurrencyType) => void
    defaultOption: CurrencyType
    options: string[]
    label: string
}

const FilterOptions: FC<FilterOptionsProps> = ({ onSelect, defaultOption, options, label }): JSX.Element => {
    const [selectedOption, setSelectedoption] = useState<CurrencyType>(defaultOption)

    const onChangeHandler = (value: ReactNode) => {
        setSelectedoption(value as CurrencyType)
        onSelect(value as CurrencyType)
    }

    return (
        <div className="flex !w-72">
            <Select size="md" label={label} onChange={e => onChangeHandler(e)} value={selectedOption || defaultOption}>
                {options.map((option: string) => {
                    return (
                        <Option key={option} value={option}>
                            {option}
                        </Option>
                    )
                })}
            </Select>
        </div>
    )
}

export default FilterOptions
