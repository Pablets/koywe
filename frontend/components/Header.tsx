import Link from 'next/link'
import { AuthContext, AuthContextProps } from 'pages/_app'
import { useContext } from 'react'
import MenuDropdown from './MenuDropdown'

const Header = () => {
    const { logged } = useContext(AuthContext) as AuthContextProps

    const links = [
        logged === false && { label: 'Sign Up', href: '/auth/signup' },
        logged === false && { label: 'Sign In', href: '/auth/signin' },
        logged === true && { label: 'Sign Out', href: '/auth/signout' },
        { label: 'Coin List', href: '/crypto/coinlist' },
        { label: 'Calculator', href: '/crypto/calculator' },
        { label: 'Order Book', href: '/crypto/orderBook' },
    ]

    return (
        <div className="flex w-full justify-center bg-light-blue-100">
            <nav className="mx-auto flex w-full flex-row items-center justify-between p-6 py-4 lg:max-w-screen-lg">
                <div>
                    <Link href="/">
                        <a>Koywe challenge</a>
                    </Link>
                </div>
                <MenuDropdown options={links} />
            </nav>
        </div>
    )
}

export default Header
