import { Menu, MenuHandler, MenuList, Button } from '@material-tailwind/react'
import { FC, PropsWithChildren } from 'react'

interface MenuProps {
    menuTitle: string
}

const MenuComponent: FC<PropsWithChildren<MenuProps>> = ({ menuTitle, children }) => {
    return (
        <Menu>
            <MenuHandler>
                <Button variant="gradient" size='sm'>{menuTitle}</Button>
            </MenuHandler>
            <MenuList>{children}</MenuList>
        </Menu>
    )
}

export default MenuComponent
