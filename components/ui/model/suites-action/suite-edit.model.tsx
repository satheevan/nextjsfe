import { ActionEdit } from "@/components/icons/actions";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Textarea,
    Input,
  } from "@nextui-org/react";
  
  export default function SuitesEdit() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
   
    const onSave = () => {
      console.log("save is working");
    };

    return (
      <>
        <span onClick={onOpen} className="cursor-pointer"><ActionEdit/></span>
        <Modal
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Edit New Suite</ModalHeader>
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
                  className="mx-4 grow bg-btnColorProject text-white"
                  // color="primary"
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
  