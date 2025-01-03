"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";
import { ProjectIcon, ProjectJobs, ProjectSuits, ProjectTest } from "../../icons/projects";
import Image from "next/image";

const cardItems = [
  {
    icons: <ProjectIcon size={48} width={48} />,
    count: 25,
    cardName: "Total API",
  },
  {
    icons: <ProjectTest size={48} width={48} />,
    count: 2500,
    cardName: "Total Test",
  },
  {
    icons: <ProjectSuits size={48} width={48} />,
    count: 75,
    cardName: "Total Suits",
  },
  {
    icons: <ProjectJobs size={48} width={48} />,
    count: 30,
    cardName: "Scheduled Jobs",
  },
];
interface ICard{
  count:number,
  cardName:string,
  icons: React.ReactNode
}

export const MenuCardItems = () => {
  const [cardList, setCardList]= React.useState<ICard[]>([])
  const getInitalValue = ()=>{
    const cardListValue :ICard[]=cardItems
    setCardList(cardListValue)
  }
  React.useEffect(()=>{
    getInitalValue()
  },[])
  console.log("cardvalue",cardList);
  
  return (
<div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {cardList.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          
          <CardBody className="overflow-visible px-4">
            <span className="my-3">{item.icons}</span>
            <span className="mb-1">{item.count}</span>
            <p className="text-default-400">{item.cardName}</p>
          </CardBody>
          {/* <CardFooter className="text-small px-4">
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );

};
