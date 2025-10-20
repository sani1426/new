import React from 'react'

import {
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@heroui/dropdown'

import { Button } from '@heroui/button'
import { Fa500Px ,FaAcquisitionsIncorporated,FaAccusoft,FaAd } from "react-icons/fa";


const DropDownMenu = () => {
 
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

              startContent={<Fa500Px className="text-xl text-default-500 pointer-events-none shrink-0" />}
            >
              New file
            </DropdownItem>
            <DropdownItem
              key="copy"
              description="Copy the file link"

              startContent={<FaAcquisitionsIncorporated className="text-xl text-default-500 pointer-events-none shrink-0" />}
            >
              Copy link
            </DropdownItem>
            <DropdownItem
              key="edit"
              description="Allows you to edit the file"
 
              startContent={<FaAccusoft className="text-xl text-default-500 pointer-events-none shrink-0" />}
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
   
              startContent={<FaAd className="text-xl pointer-events-none shrink-0 text-danger" />}
            >
              Delete file
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
  )
}

export default DropDownMenu
