'use client'

import React, { useEffect, useState } from 'react'
import {
        Dropdown,
        DropdownTrigger,
        DropdownMenu,
        DropdownItem
      } from "@heroui/dropdown";
import { Button } from '@heroui/button';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    switch (theme) {
      case 'light':
        document.documentElement.classList.remove('dark')
        break
      case 'dark':
        document.documentElement.classList.add('dark')
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
          <DropdownItem onClick={()=>setTheme("light")} key="light">light</DropdownItem>
          <DropdownItem onClick={()=>setTheme("dark")} key="dark">dark</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  )
}

export default ThemeToggle
