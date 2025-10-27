"use client"
import {
        Dropdown,
        DropdownTrigger,
        DropdownMenu,
        DropdownItem,
        DropdownSection
      } from "@heroui/dropdown";
import { Button } from '@heroui/button';
import { FaAngular } from "react-icons/fa"
import { useMainContext } from "@/context/mainContext";

const DropMenu = () => {
  const iconClasses = "text-xl text-default-500 pointer-events-none shrink-0"
 const {menus} = useMainContext()
 
  return (
        <Dropdown
        showArrow
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content:
            "py-1 px-1 border w-[200px] border-default-200 bg-linear-to-br from-white to-default-200 dark:from-default-200 dark:to-black",
        }}>
        <DropdownTrigger>
          <Button variant="bordered"> menu</Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" >
        {/* <DropdownSection title="Actions"> */}
        {
          menus?.map((menu,index)=>(
            <DropdownItem
            key={menu?.title}
            description={menu?.description}
            href={`/menu/${menu?._id}`}
            startContent={<FaAngular className={iconClasses} />}
          >
           {menu?.title}
          </DropdownItem>
          ))
        }
          {/* </DropdownSection> */}
        </DropdownMenu>
      </Dropdown>
  )
}

export default DropMenu
