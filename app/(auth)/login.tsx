import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/hooks/auth/useAuth";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const onSubmit = async () => {
    await login(username, password);
  };
  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6">Login</Text>

      <Box className="mb-4">
        <Input>
          <InputField
            placeholder="Email"
            keyboardType="email-address"
            value={username}
            onChangeText={setUsername}
          />
        </Input>
      </Box>

      <Box className="mb-4">
        <Input>
          <InputField
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </Input>
      </Box>

      <Button className="mt-2 bg-blue-400" onPress={() => onSubmit()}>
        <ButtonText>Login</ButtonText>
      </Button>

      <View className="my-2">
        <Text className="text-center font-bold">Atau</Text>
      </View>

      <Button className="mt-2 bg-gray-400" onPress={() => onSubmit()}>
        <ButtonText>Lanjutkan dengan Google</ButtonText>
      </Button>

      <View className="mt-4">
        <Text
          className="text-blue-600"
          onPress={() => router.push("/(auth)/register")}
        >
          Create an account
        </Text>

        <Text
          className="text-blue-600 mt-2"
          onPress={() => router.push("/(auth)/change-password" as any)}
        >
          Forgot password?
        </Text>
      </View>
    </View>
  );
}
