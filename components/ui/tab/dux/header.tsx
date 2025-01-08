import DefaultCard from "@/components/shared/card";
import { Heading } from "../../heading";

const Header = () => {
  const generalHead = [
    {
      label: "Requested Url",
      value: "https://opencart.testdynamiz.com/index.php",
    },
    { label: "Method", value: "GET" },
    { label: "Method", value: "GET" },
    { label: "Status", value: "200 Ok" },
    { label: "IPAddress", value: "52.6.209.46:443" },
    { label: "ReferrerPolicy", value: "strict-origin-when-cross-origin" },
  ];
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
    <div>
      {/* <div className="mt-6 flex flex-col justify-between">
        <Heading>{"General"}</Heading>
        <DefaultCard className={"mt-3 flex"}>
          <div className="flex justify-between p-0 max-sm:flex-col">
            {generalHead.map((value, index) => (
              <div
                className="flex flex-col p-0 max-sm:flex-row max-lg:flex-col"
                key={index}
              >
                <div className="bg-cardClr py-2 px-1">{value.label}</div>
                <div>{value.value}</div>
              </div>
            ))}
          </div>
        </DefaultCard>
      </div> */}
      <div className="mt-3 flex">
        <div className="flex flex-col basis-1/2 p-3">
          <Heading>{"Request Header"}</Heading>
          <ListofItems list={Request} />
        </div>
        <div className="flex flex-col basis-1/2 p-3">
          <Heading>{"Response Header"}</Heading>
          <ListofItems list={Request} />
        </div>
      </div>
    </div>
  );
};
export default Header;

function ListofItems({ ...props }) {
  return (
    <div className="mt-2 flex flex-col">
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
