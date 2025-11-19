import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { UserResponse } from "@/interfaces/user.interface";
import { Box } from "./box";
import { HStack } from "./hstack";

interface ListUserCardProps {
  users: UserResponse[];
  onEdit: (user: UserResponse) => void;
  onDelete: (user: UserResponse) => void;
}
export default function ListUserCard({
  users,
  onEdit,
  onDelete,
}: ListUserCardProps) {
  return (
    <View style={{ paddingHorizontal: 16, paddingBottom: 200 }}>
      {users.map((user) => (
        <HStack
          key={user.id}
          className="mb-5 bg-white rounded-2xl p-3 shadow-sm"
          space="md"
        >
          <Box className="flex-1 justify-center">
            <Text className="text-base font-semibold text-gray-900">
              {user.fullName}
            </Text>

            <Text className="text-gray-600 text-sm">{user.email}</Text>
            <Text className="text-gray-600 text-sm">{user.phone}</Text>
            <Text className="text-gray-600 text-xs mt-1">
              Role: {user.role}
            </Text>
            <HStack space="lg" className="mt-3">
              <TouchableOpacity onPress={() => onEdit(user)}>
                <Text className="text-blue-600 font-semibold">Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onDelete(user)}>
                <Text className="text-red-600 font-semibold">Delete</Text>
              </TouchableOpacity>
            </HStack>
          </Box>
        </HStack>
      ))}
    </View>
  );
}
