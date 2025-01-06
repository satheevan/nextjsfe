import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { CreateNewTest } from "../ui/model/suites-action/suite-exenew.model";
import { useState } from "react";
import { boolean } from "zod";

export default function DropdownList({handleChange=()=>{},...props}) {
  const [istoggle,setIsToggle]= useState(false)
  const actionControl=(key:any)=>{
    console.log(key);
    // handleChange(!istoggle)
    setIsToggle(istoggle)
  }
  
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{props.title}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Action event example" onAction={(key) =>actionControl(key)}>
        <DropdownItem key="new">Create New Test</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
