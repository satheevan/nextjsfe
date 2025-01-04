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
} from "@nextui-org/react";
import { useState } from "react";

export function CreateProject() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isEnvironmentCount, setIsEnviromentCount] = useState(1);
  const [environmentValue, setEnviromentValue] = useState([]);

  const onSave = () => {
    console.log("save is working");
  };

  const handleIncrease = () => {
    console.log("action", environmentValue?.length >= 0,environmentValue?.length);
    // setEnviromentValue(prev=>([...prev,{count:isEnvironmentCount}])))
    setIsEnviromentCount(isEnvironmentCount+1)
  };
  const handleDecrease = () => {

  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Create Project
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create New Project
              </ModalHeader>
              <ModalBody className="">
                <Input
                  className="mb-2"
                  key={""}
                  description={""}
                  label="Project Name"
                  labelPlacement={"outside"}
                  placeholder="Enter Project Name"
                  type="text"
                />
                <Textarea
                  className="max-w-md"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                />
                <div className="flex justify-center items-end gap-2 mt-3">
                  <Input
                    className="max-w-34"
                    key={""}
                    description={""}
                    label="Environment"
                    labelPlacement={"outside"}
                    placeholder="Enter Environment"
                    type="text"
                  />
                  <Input
                    className="max-w-34"
                    key={""}
                    description={""}
                    label="Environment URL"
                    labelPlacement={"outside"}
                    placeholder="Enter URL"
                    type="text"
                  />
                  <Button
                    isIconOnly
                    onClick={handleIncrease}
                    className="bg-transparent mb-1"
                    size="sm"
                  >
                    <ActionAdd />
                  </Button>
                  <Button
                        isIconOnly
                        disabled
                        // onClick={handleDecrease}
                        className="bg-transparent mb-1 cursor-default"
                        size="sm"
                      >
                        {/* <ActionRemove /> */}
                      </Button>
                </div>
                {environmentValue?.length > 0 &&
                  environmentValue.map((val, index) => (
                    <div className="flex justify-center items-end gap-2 mt-3">
                      <Input
                        className="max-w-34"
                        key={""}
                        description={""}
                        label="Environment"
                        labelPlacement={"outside"}
                        placeholder="Enter Environment"
                        type="text"
                      />
                      <Input
                        className="max-w-34"
                        key={""}
                        description={""}
                        label="Environment URL"
                        labelPlacement={"outside"}
                        placeholder="Enter URL"
                        type="text"
                      />
                      <Button
                        isIconOnly
                        onClick={handleIncrease}
                        className="bg-transparent mb-1"
                        size="sm"
                      >
                        <ActionAdd />
                      </Button>
                      <Button
                        isIconOnly
                        onClick={handleDecrease}
                        className="bg-transparent mb-1"
                        size="sm"
                      >
                        <ActionRemove />
                      </Button>
                    </div>
                  ))}
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
