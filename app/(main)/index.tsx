import { Badge, BadgeText } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import Menu from "@/components/ui/Menu";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { ShoppingCart } from "lucide-react-native";
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
          <VStack>
            <Badge
              className="z-10 self-end h-[22px] w-[22px] bg-red-600 rounded-full -mb-3.5 -mr-3.5"
              variant="solid"
            >
              <BadgeText className="text-white">2</BadgeText>
            </Badge>
            <Icon as={ShoppingCart} size="xl" color="black" />
          </VStack>
        </Box>
      </HStack>
      <Box className="mt-5">
        <Menu></Menu>
      </Box>
    </SafeAreaView>
  );
}
