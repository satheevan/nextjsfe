import { ActionView } from "@/components/icons/actions";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function SuitesView() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const details = [
    { label: "Name", value: "Test Om" },
    { label: "Project Id", value: "93" },
    { label: "Test Suit Id", value: "75" },
    { label: "CreatedAt", value: "2024-11-23T05:18:52.417Z" },
    { label: "UpdatedAt", value: "2024-11-23T12:45:37.568Z" },
  ];
  return (
    <>
      <span onClick={onOpen} className="cursor-pointer">
        <ActionView />
      </span>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 max-w-md">
                Test Case Details
              </ModalHeader>
              <ModalBody>
                <div className="">
                  <div>
                    {details.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="flex border-b rounded-md justify-center items-center"
                      >
                        <div className="bg-cardClr basis-1/3 p-3">
                          {item?.label}
                        </div>
                        <div className="bg-white basis-2/3 py-3">
                          <span className="ml-3 flex-wrap">{item?.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="primary"  className={"p-2 px-12"} variant="ghost" onPress={onClose}>
                  Cancel
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                    Action
                  </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
