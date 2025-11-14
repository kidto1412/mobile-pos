import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductPage() {
  return (
    <SafeAreaView>
      <Box className="bg-white">
        <Text className="font-bold ml-1 p-5">Form Produk</Text>
        <View className="items-start p-5 mb-5">
          <Input className="bg-white rounded-lg mb-5" size="lg">
            <InputField placeholder="Search..." />
          </Input>
          <Input className="bg-white rounded-lg mb-5" size="lg">
            <InputField placeholder="Search..." />
          </Input>
          <Input className="bg-white rounded-lg mb-5" size="lg">
            <InputField placeholder="Search..." />
          </Input>
          <Input className="bg-white rounded-lg mb-5" size="lg">
            <InputField placeholder="Search..." />
          </Input>
        </View>
      </Box>
    </SafeAreaView>
  );
}
