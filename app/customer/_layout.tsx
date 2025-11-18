import { Stack } from "expo-router";

export default function CustomerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Pelanggan",
        }}
      />
      <Stack.Screen
        name="form"
        options={{
          title: "Form Panggan",
        }}
      />
    </Stack>
  );
}
