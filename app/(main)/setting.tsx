import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { ScrollView, View } from "react-native";

export default function AccountScreen() {
  const menuItems = [
    { label: "Ubah Akun", icon: "👤" },
    { label: "Riwayat Transaksi", icon: "📄" },
    { label: "Pengaturan", icon: "⚙️" },
    { label: "Bantuan", icon: "💡" },
    { label: "Kebijakan Pribadi", icon: "📜" },
    { label: "Syarat dan Ketentuan", icon: "📘" },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="w-full py-4 border-b border-gray-200">
        <Text className="text-xl font-semibold text-center">Akun Saya</Text>
      </View>

      {/* Profile Card */}
      <Box className="mx-4 mt-5 bg-indigo-500 rounded-2xl p-6 items-center">
        <Avatar size="lg" className="bg-white mb-3">
          <AvatarFallbackText>AP</AvatarFallbackText>
        </Avatar>
        <Text className="text-white text-sm">Kasir</Text>
        <Text className="text-white font-semibold text-lg">Alex Parkinson</Text>
      </Box>

      {/* Menu List */}
      <VStack className="mx-4 mt-5 bg-white rounded-xl shadow border border-gray-100">
        {menuItems.map((item, index) => (
          <View key={index}>
            <Pressable className="flex-row items-center justify-between px-4 py-4">
              <HStack space="md" className="items-center">
                <Text className="text-lg">{item.icon}</Text>
                <Text className="text-base">{item.label}</Text>
              </HStack>
              <Text className="text-xl text-gray-400">{">"}</Text>
            </Pressable>

            {index !== menuItems.length - 1 && (
              <Divider className="bg-gray-200" />
            )}
          </View>
        ))}
      </VStack>

      {/* Logout Button */}
      <Pressable className="mx-4 mt-5 bg-white border border-gray-200 rounded-xl py-4 px-4 flex-row items-center justify-between">
        <HStack space="md" className="items-center">
          <Text className="text-lg">🚪</Text>
          <Text className="text-base text-red-500 font-semibold">Keluar</Text>
        </HStack>
        <Text className="text-xl text-gray-400">{">"}</Text>
      </Pressable>

      <View className="h-10" />
    </ScrollView>
  );
}
