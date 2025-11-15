import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, View } from "react-native";
import { Box } from "./box";
import { Button, ButtonText } from "./button";

export default function ImagePickerScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3], // Optional: define aspect ratio for editing
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri as any);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <Box>
      {/* <Box className="bg-gray-500 w-1/2 h-px">
        <Text>Not selected</Text>
      </Box> */}
      <View className="items-start ml-5 mb-4">
        <Button onPress={pickImageAsync}>
          <ButtonText>Pick an image</ButtonText>
        </Button>
      </View>

      {selectedImage && (
        <Image
          className="ml-5 rounded-md"
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </Box>
  );
}
