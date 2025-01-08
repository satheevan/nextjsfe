"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Card,
} from "@nextui-org/react";
import Link from "next/link";
import { PaginationContainer } from "../pagination-container";
import { Updown } from "@/components/icons/updown";
import { useProjectStore } from "@/store/project.store";

const columns = [
  {
    key: "request",
    label: columnLable("Request", false),
  },
  {
    key: "status",
    label: columnLable("Status", false),
  },
  {
    key: "time",
    label: columnLable("Time", false),
  },
  {
    key: "size",
    label: columnLable("Size", false),
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
  totalSuits: number;
};

interface ProjectTableProps {
  data: Project[]; // Array of user objects
}

function columnLable(label: string, toggle: boolean) {
  return (
    <span className="flex gap-1 text-small text-textColor-default font-semibold">
      <span>{label}</span>
      <span className="py-0.5">{toggle ? <Updown /> : null}</span>
    </span>
  );
}
const DuxTable: React.FC<ProjectTableProps> = ({ data }) => {
  const { currentProjectId } = useProjectStore();

  function Status(value: string) {
    return (
      <div>
        <Card
          className={`shadow-none flex flex-row justify-center items-center p-2 mx-0 rounded-full ${"pass" === value.toLowerCase() ? `bg-multiCardClr-lightGreen` : `bg-multiCardClr-lightRed`}`}
        >
          <span
            className={`${"pass" === value.toLowerCase() ? "text-textColor-lightGreen" : "text-textColor-lightRed"}`}
          >
            {value}
          </span>
        </Card>
      </div>
    );
  }
  function autoHeal(str: string, value: boolean) {
    return (
      <div>
        <Card
          className={`shadow-none flex flex-row justify-center items-center p-2 px-0 rounded-lg`}
        >
          <span className={`${value ? `text-btnColorProject` : ``}`}>
            {str}
          </span>
        </Card>
      </div>
    );
  }
  // const rowData = data.map((project)=>(
  //   {
  //     key:project?.id,
  //     projectName: (
  //       <Link
  //         href={`/projects/${project.projectName}/dashboard`}
  //         className="text-btnColorProject text-xs"
  //       >
  //         {project.projectName}
  //       </Link>
  //     ),
  //     totalTest:project.totalTest,
  //     totalSuits:project.totalSuits,
  //     action:action(project.id) ,
  //   }
  // ))
  const rows = [
    {
      key: "1",
      request: (
        <Link
          href={`/projects/${currentProjectId}/dux/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          https://dev.testdynamiz.com/
        </Link>
      ),
      status: 200,
      time: "00:00:01:30",
      size: "10B",
    },
    {
      key: "2",
      request: (
        <Link
          href={`/projects/${currentProjectId}/dux/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          https://dev.testdynamiz.com/
        </Link>
      ),
      status: 200,
      time: "00:00:01:30",
      size: "10B",
    },
    {
      key: "3",
      request: (
        <Link
          href={`/projects/${currentProjectId}/dux/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          https://dev.testdynamiz.com/
        </Link>
      ),
      status: 200,
      time: "00:00:01:30",
      size: "10B",
    },
    {
      key: "4",
      request: (
        <Link
          href={`/projects/${currentProjectId}/dux/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          https://dev.testdynamiz.com/
        </Link>
      ),
      status: 200,
      time: "00:00:01:30",
      size: "10B",
    },
  ];

  return (
    <div>
      <Table aria-label="Example table with dynamic content" className="mt-4">
        <TableHeader columns={columns} className="">
          {(column) => (
            <TableColumn key={column.key} className="">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows} className="">
          {(item) => (
            <TableRow key={item.key} className="">
              {/* <TableRow key={item.key} className=""> */}
              {(columnKey) => (
                <TableCell className={`${columnKey === "result" ? "" : ""}`}>
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <PaginationContainer />
    </div>
  );
};

export default DuxTable;
