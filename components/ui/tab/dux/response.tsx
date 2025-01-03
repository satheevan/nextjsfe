import DefaultCard from "@/components/shared/card";
import { Heading } from "../../heading";

const Response = () => {
  const Request = [
    {
      label: "Requested Url",
      value: "https://opencart.testdynamiz.com/index.php",
    },
    { label: "Request Method", value: "GET" },
    { label: "Request Method", value: "GET" },
    { label: "Status Code", value: "200 Ok" },
    { label: "Remote Address", value: "52.6.209.46:443" },
    { label: "Referrer Policy", value: "strict-origin-when-cross-origin" },
  ];

  return (
    <div className="h-full bg-white mt-4 rounded-lg">
      {/* <ListofItems list={Request} /> */}
    </div>
  );
};
export default Response;

function ListofItems({ ...props }) {
  return (
    <div className="mt-3 flex flex-col">
      {props.list.map((item: any, index: number) => (
        <div
          key={index}
          className="flex border border-spacing-1 rounded-md justify-center items-center"
        >
          <div className="bg-cardClr basis-1/3 p-3">{item?.label}</div>
          <div className="bg-white basis-2/3 py-3">
            <span className="ml-3 flex-wrap">{item?.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
