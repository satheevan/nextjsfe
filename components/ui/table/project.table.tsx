"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { ActionEdit } from "../../../components/icons/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

const columns = [
  {
    key: "projectName",
    label: "Projects",
  },
  {
    key: "totalTest",
    label: "Total Tests",
  },
  {
    key: "totalSuits",
    label: "Total Suits",
  },
  {
    key: "action",
    label: "Edit",
  },
];
interface ColumnData {
  key: string;
  label: string;
}
interface ChildProps {
  columnValue: ColumnData[];
}

type Project = {
  id: number;
  projectName: string;
  totalTest: number;
  totalSuits:number;
};

interface ProjectTableProps {
  data: Project[]; // Array of user objects
}

const TableView: React.FC<ProjectTableProps> = ({data}) => {
  const router = useRouter();

  function action (id:any){
    return(
      <span onClick={() => {console.log("Id value",id)}}>
        <ActionEdit size={21} width={24} height={24} />
      </span>
    )
  }
  const rowData = data.map((project)=>(
    {
      key:project?.id,
      projectName: (
        <Link
          href={`/projects/${project.projectName}/dashboard`}
          className="text-btnColorProject text-xs"
        >
          {project.projectName}
        </Link>
      ),
      totalTest:project.totalTest,
      totalSuits:project.totalSuits,
      action:action(project.id) ,
    }
  ))
  const rows = [
    {
      key: "1",
      projectName: (
        <Link
          href={`/projects/inventory/dashboard`}
          className="text-btnColorProject text-xs"
        >
          Inventory
        </Link>
      ),
      totalTest: "500",
      totalSuits: "25",
      action: <ActionEdit size={21} width={24} height={24} />,
    },
  ];

  return (
    <Table aria-label="Example table with dynamic content" className="mt-4">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rowData} className="">
        {(item) => (
          <TableRow key={item.key} className="">
          {/* <TableRow key={item.key} className=""> */}
            {(columnKey) => (
              <TableCell className="">{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableView;
