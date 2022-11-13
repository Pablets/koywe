import React, { ChangeEvent, FC, ReactNode, useState } from 'react'

import { Select, Option } from '@material-tailwind/react'
import { CurrencyEnum } from 'models/coinsModel'
import { CurrencyType } from '../models/coinsModel'
import { onChange } from '@material-tailwind/react/types/components/select'

export interface CurrencyOptionsProps {
    children: string
    onSelect: (value: CurrencyType) => void
    defaultOption: CurrencyType
}

const CurrencyOptions: FC<CurrencyOptionsProps> = ({ onSelect, children, defaultOption }): JSX.Element => {
    const [selectedOption, setSelectedoption] = useState<CurrencyType>(defaultOption)

    const onChangeHandler = (value: ReactNode) => {
        setSelectedoption(value as CurrencyType)
        onSelect(value as CurrencyType)
    }

    return (
        <div className="flex !w-72">
            <Select
                size="md"
                label={children}
                onChange={e => onChangeHandler(e)}
                value={selectedOption || defaultOption}
            >
                {Object.values(CurrencyEnum).map(option => {
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

export default CurrencyOptions
