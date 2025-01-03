import {Card, CardBody} from "@nextui-org/react";
import { Children } from "react";

export default function DefaultCard({...props}) {
  return (
    <Card className={`${props.className} p-0`}>
      <CardBody>
        <span>{props.children}</span>
      </CardBody>
    </Card>
  );
}
