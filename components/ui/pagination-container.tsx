import DefaultCard from "../shared/card";
import { CustomPagination } from "../shared/pagination";

export const PaginationContainer = ({ ...props }) => {
  const { perPageRows=4, currentPagination } = props;

  return (
    <div>
      <DefaultCard className={"mt-3 text-sm"}>
        <div className="flex justify-between items-center">
          <span className="text-textColor-light">Rows per page: {perPageRows}</span>
          <CustomPagination />
        </div>
      </DefaultCard>
    </div>
  );
};
