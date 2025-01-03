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
import Link from "next/link";
import { PaginationContainer } from "../pagination-container";

const columns = [
  {
    key: "testsuitename",
    label: "Test Suite Name",
  },
  {
    key: "when",
    label: "when",
  },
  {
    key: "totaltests",
    label: "Total Tests",
  },
  {
    key: "result",
    label: "Result",
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

const TestExecuteTable: React.FC<ProjectTableProps> = ({data}) => {
 

  function MultiColorProgressbar(value1:number,value2:number,value3:number) {
    return (
      <div className="w-full flex bg-gray-200 rounded-full h-6 dark:bg-gray-700">
        <div className="bg-greenClr h-6 rounded-full rounded-e-none flex justify-center items-center" style={{width: `${value1}%`}}>
          <span className="text-white text-xs font-thin">{`${value1}%`}</span>
        </div>
        <div className="bg-redClr h-6 flex justify-center items-center" style={{width: `${value2}%`}}>
          <span className="text-white text-xs font-thin">{`${value2}%`}</span>
        </div>
        <div className="bg-yellowClr h-6 rounded-e-full flex justify-center items-center" style={{width: `${value3}%`}}>
          <span className="text-white text-xs font-thin">{`${value3}%`}</span>
        </div>
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
          Smoke Test
        </Link>
      ),
      when: "Mon,Sep at: 14:20:04",
      totaltests: "25",
      result:MultiColorProgressbar(55,20,25),
    },
    {
      key: "2",
      testsuitename: (
        <Link
          href={`/projects/inventory/testexe/1`}
          className="text-xs font-medium text-btnColorProject"
        >
          Smoke Test
        </Link>
      ),
      when: "Mon,Sep at: 14:20:04",
      totaltests: "25",
      result:MultiColorProgressbar(55,20,25),
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
      when: "Mon,Sep at: 14:20:04",
      totaltests: "25",
      result:MultiColorProgressbar(55,30,15),
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
      when: "Mon,Sep at: 14:20:04",
      totaltests: "25",
      result:MultiColorProgressbar(15,25,60),
    },
  ];

  return (
    <div>
    <Table aria-label="Example table with dynamic content" className="mt-4">
      <TableHeader columns={columns} className="">
        {(column) => <TableColumn key={column.key} className="">{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} className="">
        {(item) => (
          <TableRow key={item.key} className="">
          {/* <TableRow key={item.key} className=""> */}
            {(columnKey) => (
              <TableCell className={`${columnKey==="result"?"":""}`}>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <PaginationContainer/>
    </div>
  );
};

export default TestExecuteTable;
