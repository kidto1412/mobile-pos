import { Stack } from "expo-router";

export default function CategoryLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Kategori",
        }}
      />
      <Stack.Screen
        name="form"
        options={{
          title: "Form Kategori",
        }}
      />
    </Stack>
  );
}
