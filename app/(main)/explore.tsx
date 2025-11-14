import { StyleSheet, View } from "react-native";

import FilterScroll from "@/components/ui/FilterScroll";
import { Input, InputField } from "@/components/ui/input";
import VerticalProduct from "@/components/ui/VerticalProduct";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
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

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
