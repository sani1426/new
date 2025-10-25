import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar'
import { Link} from '@heroui/react'
import { Button } from '@heroui/button'
import Logo from '../UI/Logo'
import DropMenu from './DropDownMenu'
import ThemeToggle from '../UI/ThemeToggle'


const NavigationBar = () => {
  return (
    <Navbar className='py-2' shouldHideOnScroll>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
        <DropMenu />
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current='page' href='#'>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem>
     
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
       <ThemeToggle />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default NavigationBar
