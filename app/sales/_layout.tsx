import { Badge, BadgeText } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";
import { Pressable } from "@/components/ui/pressable";
import { VStack } from "@/components/ui/vstack";
import { Stack } from "expo-router";
import { ShoppingCart } from "lucide-react-native";

export default function SalesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Penjualan",
          headerRight: () => (
            <Pressable>
              <Box className="mr-3">
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
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
