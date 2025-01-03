import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { CreateNewTest } from "../ui/model/suites-action/suite-exenew.model";

export default function DropdownList({...props}) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">{props.title}</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Action event example" onAction={(key) => <CreateNewTest/>}>
        <DropdownItem key="new">Create New Test</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
