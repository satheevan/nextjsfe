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
import { Project } from "@/types/project";
import { useProjectStore } from "@/store/project.store";
import { DATE_FORMATS, formatDate } from "@/utils/dateFormat";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "description",
    label: "Description",
  },
  {
    key: "createdAt",
    label: "Created at",
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

interface ProjectTableProps {
  data: Project[]; // Array of user objects
  onEditClick: (projectId: any) => void;
}

const ProjectsTableView: React.FC<ProjectTableProps> = ({ data, onEditClick }) => {

  // const {setPro}

  function action(id: any) {
    return (
      <span
        className="cursor-pointer p-0 m-0 text-center"
        onClick={() =>{onEditClick(id)}}
      >
        <ActionEdit size={21} width={24} height={24} />
      </span>
    );
  }
  const rowData = data.map((project) => ({
    key: project?.id,
    name: (
      <Link
        href={`/projects/${project?.id}/dashboard`}
        className="text-btnColorProject text-xs"
      >
        {project?.name}
      </Link>
    ),
    description: project.description,
    createdAt: formatDate(project.createdAt,DATE_FORMATS.SHORT_DATE),
    action: action(project.id),
  }));

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

export default ProjectsTableView;
