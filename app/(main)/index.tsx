import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { BellIcon, Icon } from "@/components/ui/icon";
import Menu from "@/components/ui/Menu";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  return (
    <SafeAreaView className="p-5">
      <HStack className="items-center justify-between">
        {/* Left Section */}
        <HStack className="items-center">
          <VStack className="ml-3">
            <Text className="text-base font-semibold text-gray-900">
              Stephanie Sharkey
            </Text>
            <HStack className="items-center mt-0.5">
              <Text className="text-sm text-gray-500">Cashier</Text>
            </HStack>
          </VStack>
        </HStack>

        {/* Notification Icon */}

        <Box className="relative">
          <Icon as={BellIcon} size="xl" color="black" />
        </Box>
      </HStack>
      <Box className="mt-5">
        <Menu></Menu>
      </Box>
    </SafeAreaView>
  );
}
