"use client"
import {
        Dropdown,
        DropdownTrigger,
        DropdownMenu,
        DropdownItem,
        DropdownSection
      } from "@heroui/dropdown";
import { Button } from '@heroui/button';

const DropMenu = () => {
  
  return (
        <Dropdown
        showArrow
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content:
            "py-1 px-1 border border-default-200 bg-linear-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
        }}>
        <DropdownTrigger>
          <Button variant="bordered"> menu</Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded">
        <DropdownSection title="Actions">
          <DropdownItem
            key="new"
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="new"
            description="Create a new file"
            shortcut="⌘N"
            startContent={<AddNoteIcon className={iconClasses} />}
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            description="Copy the file link"
            shortcut="⌘C"
            startContent={<CopyDocumentIcon className={iconClasses} />}
          >
            Copy link
          </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
  )
}

export default DropMenu
