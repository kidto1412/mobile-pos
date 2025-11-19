import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Icon, TrashIcon } from "@/components/ui/icon";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { Text } from "@/components/ui/text";
import React from "react";

interface ConfirmDeleteModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteModal({
  visible,
  title = "Delete Item",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <Modal isOpen={visible} onClose={onCancel}>
      <ModalBackdrop />

      <ModalContent className="max-w-[305px] items-center">
        <ModalHeader>
          <Box className="w-[56px] h-[56px] rounded-full bg-background-error items-center justify-center">
            <Icon as={TrashIcon} className="stroke-error-600" size="xl" />
          </Box>
        </ModalHeader>

        <ModalBody className="mt-0 mb-4">
          <Heading size="md" className="text-typography-950 mb-2 text-center">
            {title}
          </Heading>
          <Text size="sm" className="text-typography-500 text-center">
            {message}
          </Text>
        </ModalBody>

        <ModalFooter className="w-full">
          <Button
            variant="outline"
            action="secondary"
            size="sm"
            onPress={onCancel}
            className="flex-grow"
          >
            <ButtonText>Cancel</ButtonText>
          </Button>

          <Button size="sm" onPress={onConfirm} className="flex-grow">
            <ButtonText>Delete</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
