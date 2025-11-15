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
          title: "Produk",
        }}
      />
      <Stack.Screen
        name="form"
        options={{
          title: "Form Produk",
        }}
      />
    </Stack>
  );
}
