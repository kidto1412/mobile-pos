import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import ListUserCard from "@/components/ui/ListUser";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmployeePage() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="items-start px-5 mb-5">
        <Button
          variant="solid"
          size="md"
          action="primary"
          className="bg-blue-700"
          onPress={() => router.push("/employee/form")}
        >
          <ButtonText>Tambah Employee</ButtonText>
        </Button>
      </View>
      <View>
        <Input className="mx-5 bg-white rounded-lg" size="lg">
          <InputField placeholder="Search..." />
        </Input>

        <ListUserCard />
      </View>
    </SafeAreaView>
  );
}
