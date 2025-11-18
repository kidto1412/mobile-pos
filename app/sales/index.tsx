import FilterScroll from "@/components/ui/FilterScroll";
import { Input, InputField } from "@/components/ui/input";
import VerticalProduct from "@/components/ui/VerticalProduct";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SalesPage() {
  const router = useRouter();
  return (
    <SafeAreaView>
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
