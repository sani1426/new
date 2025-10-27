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

const DropServices = () => {
  const iconClasses = "text-xl text-default-500 pointer-events-none shrink-0"
 const {services} = useMainContext()
 
  return (
        <Dropdown
        showArrow
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content:
            "py-1 px-1 border w-[200px] border-default-200 bg-linear-to-br from-white to-default-200 dark:from-default-200 dark:to-black",
        }}>
        <DropdownTrigger>
          <Button variant="bordered"> خدمات</Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded" >
        {/* <DropdownSection title="Actions"> */}
        {
          services?.map((s,index)=>(
            <DropdownItem
            key={s?.name}
            href={`/services/${s?._id}`}
            startContent={<FaAngular className={iconClasses} />}
          >
           {s?.name}
          </DropdownItem>
          ))
        }
          {/* </DropdownSection> */}
        </DropdownMenu>
      </Dropdown>
  )
}

export default DropServices
