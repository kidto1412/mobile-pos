import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import ImagePicker from "@/components/ui/ImagePicker";

import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmployeeFormPage() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="bg-white">
          <Text className="font-bold ml-1 p-5">Form Karyawan</Text>
          <View>
            <ImagePicker />
          </View>
          <View className="items-start p-5 mb-5">
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField placeholder="Name" />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField placeholder="SKU" />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField placeholder="Barcode" />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField placeholder="Cost" />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField placeholder="Price" />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField placeholder="Stock" />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField placeholder="Cost" />
            </Input>
          </View>
          <HStack className="items-center ">
            <View className="items-start ml-5 mb-5">
              <Button className="bg-gray-500">
                <ButtonText className="text-white">Kembali</ButtonText>
              </Button>
            </View>
            <View className="items-start ml-5 mb-5">
              <Button className="bg-blue-700">
                <ButtonText>Simpan</ButtonText>
              </Button>
            </View>
          </HStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
