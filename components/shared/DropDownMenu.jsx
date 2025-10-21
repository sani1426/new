
import {
        Dropdown,
        DropdownTrigger,
        DropdownMenu,
        DropdownItem
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
          <Button variant="bordered">open menu</Button>
        </DropdownTrigger>
        <DropdownMenu variant="faded">
        <DropdownSection title="Actions">
          <DropdownItem
            key="new"
            description="Create a new file"
            shortcut="⌘N"
          >
            New file
          </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
  )
}

export default DropMenu
