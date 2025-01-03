import { ActionLightWarning, ActionView, ActionWarning } from "@/components/icons/actions";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Heading } from "../../heading";

export default function SuitesWarning() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <span onClick={onOpen} className="cursor-pointer">
        <ActionWarning />
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
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center">
                  <div className="">
                    <ActionLightWarning />
                  </div>
                  <div className="flex flex-col items-center">
                    <Heading>Are you Sure?</Heading>
                    <p className="mt-2 text-md text-center">
                    This will remove the test from the 
                    test suit only.
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button
                  color="primary"
                  variant="ghost"
                  className="px-12"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="warning"
                  variant="solid"
                  className="px-12"
                  onPress={onClose}
                >
                  Warning
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
