import { MenuItem, Typography } from '@material-tailwind/react'
import axios from 'axios'
import Link from 'next/link'
import { AuthContext, AuthContextProps } from 'pages/_app'
import { useContext } from 'react'
import { currentUser } from '../../auth-backend/src/middlewares/current-user'
import MenuComponent from './Menu'

interface currentUser {
    email: string
    name: string
}

const Header = () => {
    const { currentUser } = useContext(AuthContext) as AuthContextProps

    const links = [
        !currentUser && { label: 'Sign Up', href: '/auth/signup' },
        !currentUser && { label: 'Sign In', href: '/auth/signin' },
        currentUser && { label: 'Sign Out', href: '/auth/signout' },
        { label: 'Coin List', href: '/crypto/coinlist' },
        { label: 'Calculator', href: '/crypto/calculator' },
    ]

    return (
        <div className="flex w-full justify-center bg-light-blue-100">
            <nav className="flex w-full flex-row items-center justify-between px-4 py-4 sm:max-w-sm sm:px-0 md:max-w-md lg:max-w-screen-lg">
                <div>
                    <Link href="/">
                        <a>Koywe challenge</a>
                    </Link>
                </div>
                <MenuComponent menuTitle={'Menu'}>
                    {links?.length &&
                        links.map(link => {
                            if (!link || typeof link === 'boolean' || typeof link === 'undefined') return null
                            const label = link.label
                            const href = link.href

                            return (
                                <MenuItem key={href}>
                                    <Link href={href}>
                                        <a className="m-3 inline-block">
                                            <Typography variant="paragraph">{label}</Typography>
                                        </a>
                                    </Link>
                                </MenuItem>
                            )
                        })}
                </MenuComponent>
            </nav>
        </div>
    )
}

export default Header
