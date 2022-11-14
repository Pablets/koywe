import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import React, { FC, useState } from 'react'

type linkOptionsType = (
    | false
    | {
          label: string
          href: string
      }
)[]

export interface DropDownMenuProps {
    onSelect?: (value: string) => void
    defaultOption?: linkOptionsType
    options: linkOptionsType
}

const MenuDropdown: FC<DropDownMenuProps> = ({ options }): JSX.Element => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false)

    return (
        <>
            <div
                className={`${openDropdown ? 'block' : 'hidden'}  fixed top-0 left-0 h-screen w-screen`}
                onClick={() => setOpenDropdown(false)}
            ></div>
            <div className="relative">
                <Button
                    variant="filled"
                    color="blue"
                    onClick={() => {
                        setOpenDropdown(!openDropdown)
                    }}
                >
                    Menu
                </Button>
                <div
                    id="dropdown"
                    className={`right-0 z-50 h-auto max-h-max max-w-max divide-y divide-gray-100 overflow-auto rounded bg-gray-300`}
                    style={{
                        position: 'absolute',
                        inset: '0px auto auto 0px',
                        margin: '0px',
                        transition: 'all .3s',
                        height: openDropdown ? 'auto' : '0px',
                        transform: 'translateY(50px)',
                    }}
                >
                    <ul
                        className={`${!openDropdown ? 'hidden' : ''} text-sm text-gray-700 dark:text-gray-200`}
                        aria-labelledby="dropdownDefault"
                    >
                        {options?.length &&
                            options.map(link => {
                                if (!link || typeof link === 'boolean' || typeof link === 'undefined') return null
                                const label = link.label
                                const href = link.href

                                return (
                                    <li key={label.length * Math.random()}>
                                        <Link href={href}>
                                            <a
                                                onClick={() => setOpenDropdown(false)}
                                                href="#"
                                                className={`block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
                                            >
                                                {label}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MenuDropdown
