"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";
import {
  ProjectIcon,
  ProjectJobs,
  ProjectSuits,
  ProjectTest,
  APITests,
  WebTests,
  DraftTest,
} from "../../icons/dashboard";
import Image from "next/image";

const cardItems = [
  {
    icons: <ProjectSuits size={48} width={48} />,
    count: 13,
    cardName: "Total Suites",
    key: "totalTestSuites"
  },
  {
    icons: <ProjectTest size={48} width={48} />,
    count: 279,
    cardName: "Total Test",
  },
  {
    icons: <ProjectIcon size={48} width={48} />,
    count: 25,
    cardName: "UI Level Tests",
  },
  {
    icons: <APITests size={48} width={48} />,
    count: 30,
    cardName: "API Tests",
  },
  {
    icons: <WebTests size={48} width={48} />,
    count: 0,
    cardName: "Web Tests",
  },
  {
    icons: <DraftTest size={48} width={48} />,
    count: 48,
    cardName: "Draft Tests",
  },
];
interface ICard {
  count: number;
  cardName: string;
  icons: React.ReactNode;
}

export const DashboardCardItems = () => {
  const [cardList, setCardList] = React.useState<ICard[]>([]);
  const getInitalValue = () => {
    const cardListValue: ICard[] = cardItems;
    setCardList(cardListValue);
  };
  React.useEffect(() => {
    getInitalValue();
  }, []);
  console.log("cardvalue", cardList);

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardList.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible px-4 ">
            <div className="flex justify-between">
              <div className="">
                <span className="text-2xl font-bold">{item.count}</span>
                <p className="text-textColor-light text-sm mt-2">{item.cardName}</p>
              </div>
              <div>
                <span className="my-3">{item.icons}</span>
              </div>
            </div>
          </CardBody>
          {/* <CardFooter className="text-small px-4">
          </CardFooter> */}
        </Card>
      ))}
    </div>
  );
};
