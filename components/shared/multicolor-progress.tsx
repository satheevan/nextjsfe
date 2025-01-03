import { Progress } from "@nextui-org/react";

export default function ProgressBar({ ...props }) {
  function selectItems(color: string, value: number):void{
    switch (color) {
      case "green":
        <Progress aria-label="Loading..." color="success" value={value} />;
        break;
      case "blue":
        <Progress aria-label="Loading..." color="primary" value={value} />;
        break;
      case "purple":
        <Progress aria-label="Loading..." color="secondary" value={value} />;
        break;
      case "yello":
        <Progress aria-label="Loading..." color="warning" value={value} />;
        break;
      case "yello":
        <Progress aria-label="Loading..." color="warning" value={value} />;
        break;

      default:
        <Progress aria-label="Loading..." color="default" value={value} />;
        break;
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-lg">
      {/* {props.progress.map((data: any, index: any) => (
        <div className="" key={index}>
          {selectItems({data.color},{data.value})}
        </div>
      ))} */}
      <div className="flex justify-between items-baseline">
      <Progress aria-label="Loading..." color="success" value={props.value1} />
      <span className="ml-2 text-success">{props.value1}%</span>
      </div>
      <div className="flex justify-between items-baseline">
      <Progress aria-label="Loading..." color="warning" value={props.value2} />
      <span className="ml-2 text-warning">{props.value2}%</span>
      </div>
      <div className="flex justify-between items-baseline">
      <Progress aria-label="Loading..." color="danger" value={props.value3} />
      <span className="ml-2 text-danger">{props.value3}%</span>
      </div>
    </div>
  );
}
