import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/login" as any);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* <Image
        source={require("@/assets/images/logo.png")}
        className="w-40 h-40 mb-4"
      /> */}
      <Text className="text-lg font-bold text-gray-700">MOBILE POS</Text>
    </View>
  );
}
