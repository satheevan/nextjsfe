'use client'

import { SearchIcon } from "@/components/icons";
import DefaultCard from "@/components/shared/card";
import { Heading } from "@/components/ui/heading";
import { ScheduleTest } from "@/components/ui/model/test-exe/schedule-test";
import TestExecuteTable from "@/components/ui/table/test-execute.table";
import { Input } from "@nextui-org/input";

export default function TestExe() {
  return (
    <section className="flex flex-col grow md:py-3">
      <Heading>Test Execution</Heading>
      <div className="mt-5 flex justify-between">
        <div>
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-btnwhiteColor",
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
        <ScheduleTest />
      </div>
      <TestExecuteTable data={[]} />
      
    </section>
  );
}
