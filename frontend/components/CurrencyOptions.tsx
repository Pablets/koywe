import React, { FC, ReactNode, useState } from 'react'
import { Input } from '@material-tailwind/react'
import { CurrencyEnum } from 'models/coinsModel'
import { CurrencyType } from '../models/coinsModel'

export interface CurrencyOptionsProps {
    onSelect: (value: CurrencyType) => void
    defaultOption: CurrencyType
    options?: CurrencyType
    label: string
}

const CurrencyOptions: FC<CurrencyOptionsProps> = ({ onSelect, defaultOption, label }): JSX.Element => {
    const [selectedOption, setSelectedoption] = useState<CurrencyType>(defaultOption)
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    const onChangeHandler = (value: ReactNode) => {
        setSelectedoption(value as CurrencyType)
        onSelect(value as CurrencyType)
    }

    return (
        <>
            <div
                className={`${openDropdown ? 'block' : 'hidden'}  fixed top-0 left-0 h-screen w-screen`}
                onClick={() => setOpenDropdown(false)}
            ></div>
            <div className="relative">
                <Input
                    readOnly
                    label={label}
                    variant="outlined"
                    color="gray"
                    onClick={() => {
                        setOpenDropdown(!openDropdown)
                    }}
                    value={selectedOption}
                    style={{ cursor: 'pointer' }}
                    icon={
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                setOpenDropdown(!openDropdown)
                            }}
                        >
                            <svg
                                className="ml-2 h-4 w-4"
                                aria-hidden="true"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </div>
                    }
                />
                <div
                    id="dropdown"
                    className={`'h-40 z-50 w-48 divide-y divide-gray-100 overflow-auto rounded bg-gray-100 shadow dark:bg-gray-700`}
                    style={{
                        position: 'absolute',
                        inset: '0px auto auto 0px',
                        margin: '0px',
                        transition: 'all .3s',
                        height: openDropdown ? '350px' : '0px',
                        transform: 'translateY(50px)',
                    }}
                >
                    <ul
                        className={`${!openDropdown ? 'hidden' : ''} text-sm text-gray-700 dark:text-gray-200`}
                        aria-labelledby="dropdownDefault"
                    >
                        {Object.values(CurrencyEnum).map(option => (
                            <li key={option}>
                                <a
                                    href="#"
                                    className={`${
                                        option === selectedOption ? 'bg-white' : 'bg-gray-300'
                                    } block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                                    onClick={() => onChangeHandler(option)}
                                >
                                    {option}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CurrencyOptions
