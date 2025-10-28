'use client'

import React, { useEffect, useState } from 'react'
import {
        Dropdown,
        DropdownTrigger,
        DropdownMenu,
        DropdownItem
      } from "@heroui/dropdown";
import { Button } from '@heroui/button';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    switch (theme) {
      case 'light':
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme" , "light")
        break
      case 'dark':
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme" , "dark")
        break
      default:
        break
    }
  }, [theme])
  return (
        <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">{
                theme === "light" ? "light" : "dark"
          }</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onClick={()=>setTheme("light")} key="light"><FaSun  className='text-2xl text-center' /></DropdownItem>
          <DropdownItem onClick={()=>setTheme("dark")} key="dark"><FaMoon className='text-2xl text-center' /></DropdownItem>
        </DropdownMenu>
      </Dropdown>
  )
}

export default ThemeToggle
