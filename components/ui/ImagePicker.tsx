import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { Box } from "./box";
import { Button, ButtonText } from "./button";
import { Text } from "./text";

export default function ImageUploadCard() {
  const [image, setImage] = useState<string | null>(null);

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (permission.status !== "granted") {
      alert("Camera permission required.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Box className="w-full px-5 mb-5">
      {/* Container */}
      <Pressable
        onPress={pickFromGallery}
        className="border border-dashed border-gray-400 rounded-xl p-6 bg-gray-50 items-center justify-center"
      >
        {image ? (
          <Image
            source={{ uri: image }}
            className="w-full h-48 rounded-lg"
            resizeMode="cover"
          />
        ) : (
          <>
            <Ionicons name="cloud-upload-outline" size={40} color="#6C63FF" />
            <Text className="mt-3 text-blue-600 font-medium">
              Tap to upload photo
            </Text>
            <Text className="text-xs text-gray-500 mt-1">
              PNG, JPG max 800×400px
            </Text>
          </>
        )}
      </Pressable>

      {/* Divider "OR" */}
      <View className="flex-row items-center my-4">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-3 text-gray-500">OR</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Open Camera Button */}
      <Button onPress={openCamera} className="bg-blue-700">
        <ButtonText>Open camera</ButtonText>
      </Button>
    </Box>
  );
}
