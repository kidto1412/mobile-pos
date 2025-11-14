import { Button, ButtonText } from "@/components/ui/button";
import FilterScroll from "@/components/ui/FilterScroll";
import { Input, InputField } from "@/components/ui/input";
import VerticalProduct from "@/components/ui/VerticalProduct";
import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductPage() {
  return (
    <SafeAreaView>
      <View className="items-start px-5 mb-5">
        <Button
          variant="solid"
          size="md"
          action="primary"
          className="bg-blue-700"
          onPress={() => router.push("/product/form")}
        >
          <ButtonText>Tambah Produk</ButtonText>
        </Button>
      </View>
      <View>
        <Input className="mx-5 bg-white rounded-lg" size="lg">
          <InputField placeholder="Search..." />
        </Input>

        <FilterScroll />

        <VerticalProduct />
      </View>
    </SafeAreaView>
  );
}
