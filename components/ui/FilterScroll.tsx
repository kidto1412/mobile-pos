import React from "react";
import { ScrollView, Text } from "react-native";

import { ChevronDown, SlidersHorizontal } from "lucide-react-native";
import { Button } from "./button";
import { HStack } from "./hstack";
import { Icon } from "./icon";

export default function FilterScroll() {
  const filters = [
    { id: 1, label: "Pupuk a", icon: SlidersHorizontal },
    { id: 2, label: "Pupuk B", icon: ChevronDown },
    { id: 3, label: "Pupuk C", icon: ChevronDown },
    { id: 4, label: "Pupuk D", icon: ChevronDown },
    { id: 5, label: "Pupuk E", icon: ChevronDown },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      className="mt-3"
    >
      <HStack space="md">
        {filters.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            size="sm"
            className="rounded-full border-gray-300 bg-white px-4 py-2 flex-row items-center"
          >
            {item.id === 1 ? (
              <Icon as={item.icon} size="sm" color="black" className="mr-1" />
            ) : null}
            <Text className="text-gray-800 text-sm font-medium mr-1">
              {item.label}
            </Text>
          </Button>
        ))}
      </HStack>
    </ScrollView>
  );
}
