"use client";
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";
import {
  ProjectIcon,
  ProjectJobs,
  ProjectSuits,
  ProjectTest,
} from "../../icons/projects";
import Image from "next/image";
import { ActionDelete } from "@/components/icons/actions";
import { useRouter } from "next/navigation";

interface ICard {
  count: number;
  label: string;
  date: string;
}

export const SuitesCardItems = ({ ...props }) => {
  const [cardList, setCardList] = React.useState<ICard[]>([]);
  const route = useRouter();


  const getInitalValue = () => {
    const cardListValue: ICard[] = props.cardItems;
    setCardList(cardListValue);
  };
  React.useEffect(() => {
    getInitalValue();
  }, []);
  console.log("cardvalue", cardList);

  const handlerSuiteDetials=(value:any)=>{
    console.log("query params",value);
    route.push(`/projects/[project]/testsuites/${value}`)
  }

  return (
    <div className="my-3 grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {cardList.map((item, index) => (
        <Card key={index}>
          <CardBody>
            <div className="">
              <div className="flex justify-between mb-2">
                <div>
                  <span className="text-md font-bold">{item.label}</span>
                  <span className="ml-1">{`(${item.count})`}</span>
                </div>
                <div>
                  <ActionDelete height={24} width={24} />
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-7 mb-2">
                <div>Create Date:</div>
                <div>{item.date}</div>
              </div>
              <hr></hr>
              <div className="flex justify-between gap-2 mt-2">
                <Button color="primary" variant="flat" className="px-10" onClick={()=>handlerSuiteDetials(item.label)}>
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
