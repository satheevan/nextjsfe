import { PaginationGreaterActive, PaginationLess } from "../icons/pagination";
import { Pagination } from "@nextui-org/react";

export const CustomPagination = () => {
  return (
    <div className="flex gap-0">
      <Pagination className="text-btnColorProject p-1.5" initialPage={1} total={10} />
      {/* <a
        href="#"
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <PaginationLess />
      </a>

      <a
        href="#"
        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <PaginationGreaterActive />
      </a> */}
    </div>
  );
};
