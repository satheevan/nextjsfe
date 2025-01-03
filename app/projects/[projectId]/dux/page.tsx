"use client";

import AutocompleteList from "@/components/shared/autocomplete";
import DefaultCard from "@/components/shared/card";
import { DuxCardItems } from "@/components/ui/card/dux-card";
import { Heading } from "@/components/ui/heading";
import DuxTable from "@/components/ui/table/dux.table";
import { Card, Tab, Tabs } from "@nextui-org/react";
// import { useSearchParams } from "next/navigation";

export default function DuxId() {
  // const searchParam = useSearchParams()

  // const search = searchParam.get('textexe')
  const tabList = ["All", "HTML", "XHR", "JS", "CSS", "IMG", "Other"];
  const tabdux = [
    {
      id:"all",
      label:"All",
      content:<DuxTable data={[]}/>
    },
    {
      id:"html",
      label:"HTML",
      content:<DuxTable data={[]}/>
    },
    {
      id:"xhr",
      label:"XHR",
      content:<DuxTable data={[]}/>
    },
    {
      id:"js",
      label:"JS",
      content:<DuxTable data={[]}/>
    },
    {
      id:"css",
      label:"CSS",
      content:<DuxTable data={[]}/>
    },
    {
      id:"img",
      label:"IMG",
      content:<DuxTable data={[]}/>
    },
    {
      id:"other",
      label:"Other",
      content:""
    }
  ]
  return (
    <section className="flex flex-col grow md:py-3">
      <div className="mt-2 flex justify-between">
        <Heading>DUX{"> Smock"}</Heading>
      </div>
      <div className="mt-3">
        <DefaultCard>
          <DuxCardItems />
        </DefaultCard>
      </div>
      <DefaultCard className={"mt-5"}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-cardClr">
              <span className=" text-textColor-light">OS: </span>
              <span className="font-medium ml-1">{"Windows"}</span>
            </Card>
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-cardClr">
              <span className=" text-textColor-light">Browser: </span>
              <span className="font-medium ml-1">{"Chrome"}</span>
            </Card>
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-cardClr">
              <span className=" text-textColor-light">Status: </span>
              <span className="font-medium ml-1">{"Pass/Fail"}</span>
            </Card>
          </div>
          <div>
            <AutocompleteList placeHolder={"Select Status"} />
          </div>
        </div>
      </DefaultCard>
      {/* <TabView tabList={tabList} /> */}
      <Tabs items={tabdux} color="primary" variant="light" className="mt-3">
        {(item)=>(

          <Tab id={item?.id} title={item.label} className="">
            {item.content}
          </Tab>
        )}
        </Tabs>

      {/* <DuxTable data={[]} /> */}
    </section>
  );
}
