"use client";
import { SearchIcon } from "@/components/icons";
import AutocompleteList from "@/components/shared/autocomplete";
import DropdownList from "@/components/shared/dropdown";
import { Heading } from "@/components/ui/heading";
import { ExecuteAllTests } from "@/components/ui/model/suites-action/suite-executeall.model";
import SuiteTable from "@/components/ui/table/suite.table";
import { Input } from "@nextui-org/input";

export default function TestSuits() {

  const testCase = [
    { key: "1", label: "test1" },
    { key: "2", label: "test2" },
    { key: "3", label: "test3" },
  ];

  return (
    <section className="flex flex-col grow md:py-3">
      <div className="flex flex-wrap justify-between mr-4">
        <Heading>Existing Test Suites</Heading>
        {/* <CreateTestSuite/> */}
        <AutocompleteList placeHolder={"Add Test Case"}/>  
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
        <AutocompleteList placeHolder={"Action"}/>  
        <ExecuteAllTests/>
        </div>
      </div>
      <div className="mt-5">
        <SuiteTable />
      </div>
    </section>
  );
}
