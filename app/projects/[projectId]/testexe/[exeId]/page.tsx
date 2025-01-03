"use client";

import { SearchIcon } from "@/components/icons";
import AutocompleteList from "@/components/shared/autocomplete";
import DefaultCard from "@/components/shared/card";
import { Heading } from "@/components/ui/heading";
import ExecuteIdTable from "@/components/ui/table/test-execute/executionId.table";
import ExecuteTextCaseTable from "@/components/ui/table/test-execute/exec-testcase.table";
import { Input } from "@nextui-org/input";
import { Card } from "@nextui-org/react";
// import { useSearchParams } from "next/navigation";

export default function TestExe1() {
  // const searchParam = useSearchParams()

  // const search = searchParam.get('textexe')

  return (
    <section className="flex flex-col grow md:py-3">
      <div className="mt-2 flex justify-between">
        <Heading>Test Execution -{"Test Execution"}</Heading>
        <div className="flex gap-4">
          <DefaultCard className="bg-cardClr shadow-none">
            {"Ran on 02-09-2024 at 12:20:59"}
          </DefaultCard>
          <AutocompleteList placeHolder={"Select Test Suite"} className={""} />
        </div>
      </div>
      <DefaultCard className={"mt-8"}>
        <div className="flex justify-between items-center max-sm:flex max-md:flex-wrap gap-2">
          <div className="flex gap-2 max-sm:flex-col">
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-cardClr">
              <span className=" text-textColor-light">Total Test: </span>
              <span className="font-semibold ml-1">{"03"}</span>
            </Card>
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-multiCardClr-lightGreen">
              <span className=" text-textColor-lightGreen">Pass: </span>
              <span className="text-textColor-lightGreen font-semibold ml-1">{"02"}</span>
            </Card>
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-multiCardClr-lightRed">
              <span className=" text-textColor-lightRed">Fail: </span>
              <span className="text-textColor-lightRed font-semibold ml-1">{"01"}</span>
            </Card>
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-multiCardClr-lightYellow">
              <span className=" text-textColor-lightYellow">Skipped: </span>
              <span className="text-textColor-lightYellow font-semibold ml-1">{"00"}</span>
            </Card>
          </div>
          <div className="flex gap-2 max-md:flex-col">
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-cardClr">
              <span className=" text-textColor-light">Executions Time: </span>
              <span className="font-medium ml-1">{"01:03:25"}</span>
            </Card>
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-cardClr">
              <span className=" text-textColor-light">OS: </span>
              <span className="font-medium ml-1">{"Windows"}</span>
            </Card>
            <Card className="shadow-none flex flex-row justify-center items-center p-2 rounded-lg bg-cardClr">
              <span className=" text-textColor-light">Browser: </span>
              <span className="font-medium ml-1">{"Chrome"}</span>
            </Card>
          </div>
        </div>
      </DefaultCard>
      <div className="mt-6 flex justify-between">
        <Heading>{"Test Execution"}</Heading>

        <div className="flex sm:flex-wrap md:flex-nowrap gap-4 basis-2/4">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-btnwhiteColor",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search Test Case"
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
          <AutocompleteList placeHolder={"Select Status"} />
        </div>
      </div>
      <ExecuteIdTable data={[]} />
      <DefaultCard className={"mt-3"}>
        <div className="flex justify-between">
          <Heading>Test case</Heading>
          <AutocompleteList placeHolder={"Select Status"}/>
        </div>
        <div className="flex gap-2">
          <div className="basis-3/5">
          <ExecuteTextCaseTable data={[]}/>
          </div>
          <div className="basis-2/5">
            <DefaultCard className={"mt-4 h-full"}>
            <div className="flex justify-center items-center">
              Please Select Test Case
            </div>
            </DefaultCard>
          </div>
        </div>
      </DefaultCard>
    </section>
  );
}
