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
import { PaginationContainer } from "../../pagination-container";
import { Updown } from "@/components/icons/updown";

const columns = [
  {
    key: "testsuitename",
    label: columnLable("Test Suite Name", false),
  },
  {
    key: "status",
    label: columnLable("Status", true),
  },
  {
    key: "duration",
    label: columnLable("Duration", true),
  },
  {
    key: "retries",
    label: columnLable("retries", true),
  },
  {
    key: "autoHeal",
    label: columnLable("Auto-Heal", true),
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
const ExecuteIdTable: React.FC<ProjectTableProps> = ({ data }) => {
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
      testsuitename: (
        <Link
          href={`/projects/inventory/testexe/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          Smoke Test(10)
        </Link>
      ),
      status: Status("Pass"),
      duration: "25",
      retries: 0,
      autoHeal: autoHeal("Yes", true),
    },
    {
      key: "2",
      testsuitename: (
        <Link
          href={`/projects/inventory/testexe/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          Inventory(5)
        </Link>
      ),
      status: Status("Fail"),
      duration: "25",
      retries: 0,
      autoHeal: autoHeal("No", false),
    },
    {
      key: "3",
      testsuitename: (
        <Link
          href={`/projects/inventory/testexe/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          Smoke Test
        </Link>
      ),
      status: Status("Fail"),
      duration: "25",
      retries: 0,
      autoHeal: autoHeal("Yes", true),
    },
    {
      key: "4",
      testsuitename: (
        <Link
          href={`/projects/inventory/testexe/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          Smoke Test
        </Link>
      ),
      status: Status("Pass"),
      duration: "25",
      retries: 0,
      autoHeal: autoHeal("Yes", true),
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

export default ExecuteIdTable;
