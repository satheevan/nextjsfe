"use client";
import { SearchIcon } from "@/components/icons";
import AutocompleteList from "@/components/shared/autocomplete";
import DropdownList from "@/components/shared/dropdown";
import { Heading } from "@/components/ui/heading";
import { ExecuteAllTests } from "@/components/ui/model/suites-action/suite-executeall.model";
import { CreateNewTest } from "@/components/ui/model/suites-action/suite-exenew.model";
import SuiteTable from "@/components/ui/table/suite.table";
import { Input } from "@nextui-org/input";
import { Dropdown } from "@nextui-org/react";
import { useState } from "react";

export default function TestSuits() {
  const [isCreateTest, setIsCreateTest] = useState(false);
  const testCase = [
    { key: "1", label: "test1" },
    { key: "2", label: "test2" },
    { key: "3", label: "test3" },
  ];
  const openModal=(toggle:any)=>{
      setIsCreateTest(toggle)
  }

  return (
    <section className="flex flex-col grow md:py-3">
      <div className="flex flex-wrap justify-between mr-4">
        <Heading>Existing Test Suites</Heading>
        {/* <DropdownList title="create" placeHolder={"Add Test Case"} /> */}
        <CreateNewTest isOpenModal={isCreateTest} />
        {/* <DropdownList title={"Add Test Case"}/> */}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 justify-between">
        <div>
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <AutocompleteList placeHolder={"Action"} />
          <ExecuteAllTests />
        </div>
      </div>
      <div className="mt-5">
        <SuiteTable />
      </div>
    </section>
  );
}
