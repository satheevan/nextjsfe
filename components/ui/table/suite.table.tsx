import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { ActionDelete, ActionEdit, ActionView, ActionWarning } from "@/components/icons/actions";
import SuitesView from "../model/suites-action/suite-view.model";
import SuitesEdit from "../model/suites-action/suite-edit.model";
import SuitesDelete from "../model/suites-action/suite-delete.model";
import SuitesWarning from "../model/suites-action/suite-warning.model";
import Link from "next/link";

const rows = [
  {
    key: "1",
    testCaseName:"Inventory",
    steps: "0",
    action: <Action/>,
  },
  {
    key: "2",
    testCaseName: "Inventory",
    steps: "0",
    action:<Action/>,
  },
  {
    key: "3",
    testCaseName: "Inventory",
    steps: "0",
    action: <Action/>,
  },
];

const columns = [
  {
    key: "testCaseName",
    label: "Test Case",
  },
  {
    key: "steps",
    label: "#of Steps",
  },
  {
    key: "action",
    label: "Action",
  },
];

export default function App() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["2"]));
  
  return (
    <Table
    aria-label="Rows actions table example with dynamic content"
    // selectionBehavior={selectionBehavior}
    selectionMode="multiple"
    onRowAction={(key) => console.log(`Opening item ${key}...`)}
  >
    <TableHeader columns={columns}>
      {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={rows}>
      {(item) => (
        <TableRow key={item.key}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}

function Action(){
  return(
    <div className="flex gap-3">
      <span><SuitesView/></span>
      <span><SuitesEdit/></span>
      <span><SuitesDelete/></span>
      <span><SuitesWarning/></span>
    </div>
  )
}
