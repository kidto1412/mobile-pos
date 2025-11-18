import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import { ChevronDownIcon } from "lucide-react-native";
import { View } from "react-native";

export default function Register() {
  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6">Register</Text>
      <Box className="mb-4">
        <Input>
          <InputField placeholder="Nama Lengkap" keyboardType="email-address" />
        </Input>
      </Box>
      <Box className="mb-4">
        <Input>
          <InputField placeholder="Email" keyboardType="email-address" />
        </Input>
      </Box>

      <Box className="mb-4">
        <Input>
          <InputField placeholder="No Hp" keyboardType="email-address" />
        </Input>
      </Box>

      <Box className="mb-4">
        <Input>
          <InputField placeholder="Kata Sandi" secureTextEntry />
        </Input>
      </Box>
      <Box className="mb-4">
        <Input>
          <InputField placeholder="Konfirmasi Kata Sandi" secureTextEntry />
        </Input>
      </Box>
      <Box className="mb-4">
        <Select>
          <SelectTrigger variant="outline" size="md">
            <SelectInput placeholder="Role" />
            <SelectIcon className="mr-3" as={ChevronDownIcon} />
          </SelectTrigger>
          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>
              <SelectItem label="UX Research" value="ux" />
              <SelectItem label="Web Development" value="web" />
              <SelectItem
                label="Cross Platform Development Process"
                value="Cross Platform Development Process"
              />
              <SelectItem label="UI Designing" value="ui" isDisabled={true} />
              <SelectItem label="Backend Development" value="backend" />
            </SelectContent>
          </SelectPortal>
        </Select>
      </Box>

      <Button
        className="mt-2 bg-blue-400"
        onPress={() => router.replace("/(main)")}
      >
        <ButtonText>Daftar</ButtonText>
      </Button>

      <View className="mt-4 flex flex-row  items-center">
        <Text>Sudah punya akun?</Text>
        <Text
          className="text-blue-600 ml-3"
          onPress={() => router.push("/(auth)/login")}
        >
          Masuk
        </Text>
      </View>
    </View>
  );
}
