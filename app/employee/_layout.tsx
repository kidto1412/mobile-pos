import { Stack } from "expo-router";

export default function EmployeeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Karyawan",
        }}
      />
      <Stack.Screen
        name="form"
        options={{
          title: "Form Karyawan",
        }}
      />
    </Stack>
  );
}
