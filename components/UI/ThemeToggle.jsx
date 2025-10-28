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
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const [li,setLi] = useState(()=>localStorage.getItem("theme"))
    console.log(li)
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
        <Dropdown
        showArrow
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content:
            "py-1 px-1 border w-[50px] flex flex-col justify-center items-center border-default-200 bg-linear-to-br from-white to-default-200 dark:from-default-300 dark:to-black",
        }}
        >
        <DropdownTrigger>
          <Button variant="bordered">{
                theme === "light" ? (
                  <FaSun  className='text-2xl text-center' />
                ) : (<FaMoon  className='text-2xl text-center' />)
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
