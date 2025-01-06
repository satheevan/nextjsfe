"use client";
import { ApiTestSuitesList } from "@/apis/testSuitesApi";
import { Navbar } from "@/components/navbar";
import LeftSideNav from "@/components/ui/left-navbar";
import { useProjectStore } from "@/store/project.store";
import React, { useEffect } from "react";


interface ProjectPageParams {
  params: {
    projectId: number;
  };
  children: React.ReactNode
}

export default function DashBoard({ children, params }: ProjectPageParams) {

  const { setCurrentProjectId} = useProjectStore();

  console.log("params",params);

  useEffect(() => {
    setCurrentProjectId(params?.projectId)
  }, [])

  return (
    <section className="flex grow gap-1 py-8 md:py-0">
      {/* <div className="basis-2/6"> */}
        <LeftSideNav />
      {/* </div> */}
      <div className="basis-2/6 flex flex-col grow md:py-0">
        <Navbar />
        <div className="mx-5 flex grow">{children}</div>
      </div>
    </section>
  );
}
