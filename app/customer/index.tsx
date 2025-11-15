import { Input, InputField } from "@/components/ui/input";
import ListUserCard from "@/components/ui/ListUser";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomerPage() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View>
        <Input className="mx-5 bg-white rounded-lg" size="lg">
          <InputField placeholder="Search..." />
        </Input>

        <ListUserCard />
      </View>
    </SafeAreaView>
  );
}
