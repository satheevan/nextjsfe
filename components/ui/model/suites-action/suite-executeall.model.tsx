import {
    ActionAdd,
    ActionDelete,
    ActionRemove,
  } from "@/components/icons/actions";
  import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link,
    Textarea,
    Select,
    SelectItem,
  } from "@nextui-org/react";
  import { useState } from "react";
  
  export function ExecuteAllTests() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
    const suites:any = [
      {label:"Suite1", value:"suite1"},
      {label:"Suite2", value:"suite2"},
      {label:"Suite3", value:"suite3"},
    ]
    const onSave = () => {
      console.log("save is working");
    };
  
    return (
      <>
        <Button onPress={onOpen} className="bg-btnColorProject text-white">
          Execute All Tests
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Create New Test Suite
                </ModalHeader>
                <ModalBody className="">
                  <Input
                    className="mb-2"
                    key={""}
                    description={""}
                    label="Test"
                    labelPlacement={"outside"}
                    placeholder="Test Name"
                    type="text"
                  />
                  <Textarea
                    className="max-w-md"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter description"
                  />
                  <Select
                    key={"outside"}
                    className="max-w-md"
                    label="Suite"
                    labelPlacement={"outside"}
                    placeholder="Select the Suite"
                  >
                    {suites.map((suite:any,index:number) => (
                      <SelectItem key={index}>{suite.label}</SelectItem>
                    ))}
                  </Select>
                </ModalBody>
                <div className="flex justify-around gap-2  my-4">
                  <Button
                    className="mx-4 grow"
                    color="primary"
                    variant="bordered"
                    onPress={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="mx-4 grow"
                    color="primary"
                    variant="solid"
                    onPress={onSave}
                  >
                    Create
                  </Button>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  