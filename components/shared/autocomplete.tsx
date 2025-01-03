import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { CreateNewTest } from "../ui/model/suites-action/suite-exenew.model";

export const listValue = [
  { key: "1", label: "test1" },
  { key: "2", label: "test2" },
  { key: "3", label: "test3" },
];

export default function AutocompleteList({ ...props }) {
  const handleClick=()=>{
    console.log("working a");
    
    return <CreateNewTest/>
  }
  return (
    <div className={`max-w-48`}>
      <Autocomplete className={`max-w-xs ${props.className}`} placeholder={`${props.placeHolder}`}>
        {/* {props.list ||
          listValue.map((value, index) => {
            <AutocompleteItem key={index} value={`${value.key}`}>
              {value.label}
            </AutocompleteItem>;
          })} */}

        <AutocompleteItem key="project2" value="project2" onPressStart={handleClick}>
          {/* <CreateNewTest/> */}
          Create New Test
        </AutocompleteItem>
        <AutocompleteItem key="project3" value="project3">
          Add Existing Test case
        </AutocompleteItem>
      </Autocomplete>
    </div>
  );
}
