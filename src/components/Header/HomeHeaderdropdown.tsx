import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import type { Selection } from "@nextui-org/react";

export default function HomeHeaderdropdown () {
//   const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["Maximum Visibility"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="text-nowrap"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem
          
          key="Maximum Visibility"
        //   shortcut="⌘N"
          description="My profile is openly visible to companies and recruiters, maximizing my exposure and job opportunities."
          startContent={<LightModeOutlinedIcon/>}
        >
          Maximum Visibility
        </DropdownItem>
        <DropdownItem
          key="Privacy Focused"
        //   shortcut="⌘C"
          description="My profile remains hidden from public view, visible only to organizations I directly apply to, ensuring my privacy."
          startContent={<WbSunnyOutlinedIcon/>}
        >
          Privacy Focused
        </DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
}
