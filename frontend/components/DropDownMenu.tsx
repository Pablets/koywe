import { Input, Typography } from '@material-tailwind/react'
import React, { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'
import { coinOptionType } from 'redux/slices/filterSlice'

export interface DropDownMenuProps {
    onSelect: (value: coinOptionType) => void
    defaultOption?: coinOptionType
    options: coinOptionType
    label: string
}

const DropDownMenu: FC<DropDownMenuProps> = ({ onSelect, options, label }): JSX.Element => {
    const labels: string[] = useMemo(() => Object.keys(options).map(label => label), [options])

    const [openDropdown, setOpenDropdown] = useState<boolean>(false)
    const [labelsToDisplay, setLabelsToDisplay] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')
    const [selectAll, setSelectAll] = useState<boolean>(false)

    const onChangeHandler = (value: string) => {
        onSelect({ ...options, [value]: !options[value] })
    }

    const selectDeselectAll = () => {
        const obj: coinOptionType = {}
        Object.keys(options).map(option => (obj[option] = selectAll))
        onSelect(obj)
        setSelectAll(!selectAll)
    }

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredLabels = labels.filter(label => label.toLowerCase().includes(e.target.value.toLowerCase()))
        setLabelsToDisplay(filteredLabels)
        setInputValue(e.target.value)
    }

    useEffect(() => {
        setLabelsToDisplay(labels)
        if (labels.length === setLabelsToDisplay.length) {
            setSelectAll(true)
        }
    }, [labels, options])

    return (
        <>
            <div
                className={`${openDropdown ? 'block' : 'hidden'}  fixed top-0 left-0 h-screen w-screen`}
                onClick={() => setOpenDropdown(false)}
            ></div>
            <div className="relative">
                <Input
                    label={label}
                    variant="outlined"
                    color="gray"
                    onChange={handleFilterChange}
                    onClick={() => {
                        setOpenDropdown(!openDropdown)
                    }}
                    value={inputValue}
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
                    <button
                        onClick={selectDeselectAll}
                        className={`${selectAll ? 'bg-blue-gray-600' : 'bg-gray-600'} my-2 mx-4 rounded-sm`}
                    >
                        <Typography className="p-1 text-white" variant="small">
                            {selectAll ? 'Select all' : 'Deselect all'}
                        </Typography>
                    </button>
                    <ul
                        className={`${!openDropdown ? 'hidden' : ''} text-sm text-gray-700 dark:text-gray-200`}
                        aria-labelledby="dropdownDefault"
                    >
                        {labelsToDisplay.map(optionLabel => (
                            <li key={optionLabel}>
                                <a
                                    href="#"
                                    className={`${
                                        options[optionLabel] ? 'bg-white' : 'bg-gray-300 line-through'
                                    } block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                                    onClick={() => onChangeHandler(optionLabel)}
                                >
                                    {optionLabel}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DropDownMenu
