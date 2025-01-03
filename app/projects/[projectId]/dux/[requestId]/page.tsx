"use client";

import { Heading } from "@/components/ui/heading";
import Header from "@/components/ui/tab/dux/header";
import Response from "@/components/ui/tab/dux/response";
import { Tab, Tabs } from "@nextui-org/react";
// import { useSearchParams } from "next/navigation";

export default function DuxRequestId1() {
  // const searchParam = useSearchParams()
  // const search = searchParam.get('textexe')
  // const tabList = ["Header", "Payload", "Response", "Cookies"];
  const tabs = [
    {
      id: "header",
      label: "Header",
      content: <Header />
    },
    {
      id: "payload",
      label: "Payload",
      content: ""
    },
    {
      id: "response",
      label: "Response",
      content: <Response />
    },
    {
      id: "cookies",
      label: "Cookies",
      content: <Response />
    }
  ]

  return (
    <section className="flex flex-col grow md:py-3">
      <div className="mt-2 flex justify-between">
        <Heading>DUX{"> Request"}</Heading>
      </div>
      {/* <TabView tabList={tabList} handleTabView={handlerTabView} /> */}
      <Tabs items={tabs} variant="light" color="primary">
        {(item) => (
          <Tab id={item?.id} title={item?.label}>
            {item?.content}
          </Tab>
        )}
      </Tabs>
    </section>
  );
}
