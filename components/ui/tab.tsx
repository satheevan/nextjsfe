import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useState } from "react";
// import PageTable from "./pagetable";

interface TabViewProps {
  handleTabView: (item: string) => void;
  tabList: string[];
}

export const TabView: React.FC<TabViewProps> = ({ handleTabView, ...props }) => {
  const [tabIndex, setTab] = useState(0);

  const handlerTabChange = (index: any) => {
    setTab(index);
    handleTabView(index);
    console.log("working", index);
  };
  
  return (
    <div className="mt-5 flex gap-2">
      {props.tabList.map((tab: any, index: any) => (
        <div className="" key={tab} onClick={() => handlerTabChange(tab)}>
          <Card
            key={tab}
            className={`cursor-pointer shadow-none flex flex-row justify-center items-center p-2 px-6 rounded-lg ${index === tabIndex ? "bg-btnColorProject" : "bg-white"}`}
          >
            <span
              className={`${tab === tabIndex ? "text-white" : "text-btnColorProject"}`}
            >
              {tab}
            </span>
          </Card>
        </div>
      ))}
    </div>
  );
}
