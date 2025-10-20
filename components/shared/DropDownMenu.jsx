

import {
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/dropdown'

import { Button } from '@heroui/button'


const DropMenu = () => {
 
  return (
        <Dropdown
        
        className='py-1 px-1 border border-default-200 bg-linear-to-br from-white to-default-200 dark:from-default-50 dark:to-black'

      >
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
          <DropdownSection title="Actions">
            <DropdownItem
              key="new"
              description="Create a new file"

            >
              New file
            </DropdownItem>
            <DropdownItem
              key="copy"
              description="Copy the file link"
            >
              Copy link
            </DropdownItem>
            <DropdownItem
              key="edit"
              description="Allows you to edit the file"
 
           
            >
              Edit file
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Danger zone">
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              description="Permanently delete the file"
            >
              Delete file
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
  )
}

export default DropMenu
