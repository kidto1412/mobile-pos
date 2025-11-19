import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";

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
import { roles } from "@/constants/role.constant";
import { useUser } from "@/hooks/user/useUser";
import { UserRequest } from "@/interfaces/user.interface";
import { useToastMessage } from "@/providers/toast.provider";
import { useUserState } from "@/stores/user.store";
import { ChevronDownIcon } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmployeeFormPage() {
  const [form, setForm] = useState<UserRequest>({
    fullName: "",
    username: "",
    password: "",
    phone: "",
    role: "",
    email: "",
  });
  const { user, reset } = useUserState();
  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName,
        email: user.email,
        username: user.username,
        password: "", // kosongkan agar user bisa isi baru
        phone: user.phone,
        role: user.role,
      });
    }
  }, [user]);

  const { create, update } = useUser();
  const { showToast } = useToastMessage();

  const onSubmit = async () => {
    if (!user) {
      // CREATE → semua field wajib termasuk password
      if (
        !form.fullName ||
        !form.username ||
        !form.password ||
        !form.email ||
        !form.role
      ) {
        return showToast("Isi semua inputan!", "error");
      }

      await create(form);
    } else {
      // EDIT → password boleh kosong
      if (!form.fullName || !form.username || !form.email || !form.role) {
        return showToast("Isi semua inputan kecuali password!", "error");
      }

      // Jika password kosong, jangan kirim password
      const { password, ...updatePayload } = form;

      await update(user.id, updatePayload);
    }

    reset();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Box className="bg-white">
          <Text className="font-bold ml-1 p-5">Form Karyawan</Text>
          <View className="items-start p-5 mb-5">
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField
                placeholder="Name"
                value={form.fullName}
                onChangeText={(text) => setForm({ ...form, fullName: text })}
              />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField
                placeholder="Email"
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
              />
            </Input>
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField
                placeholder="Username"
                value={form.username}
                onChangeText={(text) => setForm({ ...form, username: text })}
              />
            </Input>
            {!user && (
              <Input className="bg-white rounded-lg mb-5" size="lg">
                <InputField
                  placeholder="Password"
                  value={form.password}
                  onChangeText={(text) => setForm({ ...form, password: text })}
                />
              </Input>
            )}
            <Input className="bg-white rounded-lg mb-5" size="lg">
              <InputField
                placeholder="Phone"
                value={form.phone}
                onChangeText={(text) => setForm({ ...form, phone: text })}
              />
            </Input>

            <Select onValueChange={(val) => setForm({ ...form, role: val })}>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Pilih Role" value={form.role} />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  {roles.map((role) => (
                    <SelectItem
                      key={role.value}
                      label={role.label}
                      value={role.value}
                    />
                  ))}
                </SelectContent>
              </SelectPortal>
            </Select>
          </View>
          <HStack className="items-center ">
            <View className="items-start ml-5 mb-5">
              <Button className="bg-gray-500">
                <ButtonText className="text-white">Kembali</ButtonText>
              </Button>
            </View>
            <View className="items-start ml-5 mb-5">
              <Button className="bg-blue-700" onPress={onSubmit}>
                <ButtonText>Simpan</ButtonText>
              </Button>
            </View>
          </HStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
