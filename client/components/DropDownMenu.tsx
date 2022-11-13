import { Input, Typography } from '@material-tailwind/react'
import React, { ChangeEvent, FC, useState } from 'react'
import { coinOptionType } from 'redux/slices/filterSlice'

export interface DropDownMenuProps {
    onSelect: (value: coinOptionType) => void
    defaultOption?: coinOptionType
    options: coinOptionType
}

const DropDownMenu: FC<DropDownMenuProps> = ({ onSelect, options }): JSX.Element => {
    console.log(options)

    const labels: string[] = Object.keys(options).map(label => label)

    const [openDropdown, setOpenDropdown] = useState<boolean>(false)
    const [labelsToDisplay, setLabelsToDisplay] = useState<string[]>(labels)
    const [inputValue, setInputValue] = useState<string>('')
    const [selectAll, setSelectAll] = useState<boolean>(true)

    const onChangeHandler = (value: string) => {
        // setSelectedoptions({ ...options, [value]: !options[value] })
        onSelect({ ...options, [value]: !options[value] })

        // setOpenDropdown(false)
    }

    const selectDeselectAll = () => {
        const obj: coinOptionType = {}
        Object.keys(options).map(option => (obj[option] = selectAll))
        onSelect(obj)
        setSelectAll(!selectAll)
    }

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e) return
        const filteredLabels = labels.filter(label => label.toLowerCase().includes(e.target.value.toLowerCase()))
        setLabelsToDisplay(filteredLabels)
        setInputValue(e.target.value)
    }

    return (
        <>
            <div
                className={`${openDropdown ? 'block' : 'hidden'}  fixed top-0 left-0 h-screen w-screen`}
                onClick={() => setOpenDropdown(false)}
            ></div>
            <div className="relative">
                {/* <Input label="Username" /> */}
                <Input
                    label="filter"
                    variant="outlined"
                    color="gray"
                    onChange={handleFilterChange}
                    // className='w-32'
                    // className="left-0 top-0 inline-flex h-10 w-32 items-center justify-between rounded bg-gray-400 px-2 text-center text-sm font-medium text-white hover:bg-gray-800"
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
                                        options[optionLabel] ? '' : 'bg-gray-100 line-through'
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
