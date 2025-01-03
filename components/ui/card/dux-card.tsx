"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";

const cardItems = [
  {
    color:'text-textColor-lightGreen',
    count:"8.11 Sec",
    cardName: "Response Time",
  },
  {
    color:'text-textColor-lightOrange',
    count:"6.90",
    cardName: "Content Load Time",
  },
  {
    color:'text-textColor-lightRed',
    count: "12.00",
    cardName: "Server Process Time",
  },
  {
    color:'text-textColor-lightRed',
    count: "34.8",
    cardName: "Connection Time",
  },
  {
    color:'text-textColor-lightGreen',
    count: "45B",
    cardName: "content Size",
  },
];
interface ICard {
  count: string;
  cardName: string;
  color:string;
}

export const DuxCardItems = () => {
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
    <div className="gap-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      {cardList.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible px-2 ">
            <div className="flex flex-col justify-between">
              <div className="">
                <p className="text-btnColorProject text-sm mt-2">{item.cardName}</p>
              </div>
              <div className="mt-4 text-end">
                <span className={`text-2xl ${item.color} font-semibold`}>{item.count}</span>
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
