import {Select, SelectItem} from "@nextui-org/react";

export const addSelect = [
  {key: "1", label: "test1"},
  {key: "2", label: "test2"},
  {key: "3", label: "test3"},
];

export default function SelectValues({...props}) {

  return (
    <div className="flex w-full max-w-xs flex-wrap md:flex-nowrap gap-4">
      <Select className="max-w-xs" label={"Add Test case"}>
        {props.list||addSelect.map((value) => (
          <SelectItem key={value.key}>{value.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
}
