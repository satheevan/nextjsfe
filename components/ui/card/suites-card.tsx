"use client";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import React, { useState } from "react";
import {
  ProjectIcon,
  ProjectJobs,
  ProjectSuits,
  ProjectTest,
} from "../../icons/projects";
import Image from "next/image";
import { ActionDelete } from "@/components/icons/actions";
import { useRouter } from "next/navigation";
import { TestSuite } from "@/types/test-suite";
import { DATE_FORMATS, formatDate } from "@/utils/dateFormat";

interface ICard {
  cardItems: TestSuite[];
  onDelete: (id: any) => void;
  projectId:number
}

export const SuitesCardItems: React.FC<ICard> = ({
  onDelete,
  cardItems,
  projectId,
  ...props
}) => {
  console.log("cards :", cardItems, typeof cardItems);
  const route = useRouter();

  const getInitalValue = () => {};
  React.useEffect(() => {
    getInitalValue();
  }, []);
  console.log("cardvalue", cardItems);

  const handlerSuiteDetials = (value: any) => {
    console.log("query params", value);
    route.push(`/projects/${projectId}/testsuites/${value}`);
  };
  const handleDelete = (id: any) => {
    console.log("DeleteId", id);
    onDelete(id)
  };

  return (
    <div className="my-3 grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {cardItems.map((item: any, id: any) => (
        <Card key={id}>
          <CardBody>
            <div className="">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="text-md font-bold">{item?.name}</span>
                  <span className="ml-1">{`(${item?.count || 12})`}</span>
                </div>
                <div>
                  <span
                    className="cursor-pointer"
                    onClick={()=>{handleDelete(item?.id)}}
                  >
                    <ActionDelete height={24} width={24} />
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-7 mb-2">
                <div>Create Date:</div>
                <div>{formatDate(item?.createdAt, DATE_FORMATS.FULL_DATE)}</div>
              </div>
              <hr></hr>
              <div className="flex justify-between gap-2 mt-2">
                <Button
                  color="primary"
                  variant="flat"
                  className="px-10"
                  onClick={() => {
                    handlerSuiteDetials(item.name);
                  }}
                >
                  View
                </Button>
                <Button color="primary" variant="flat">
                  Execute Suite
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
