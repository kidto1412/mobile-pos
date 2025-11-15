import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(main)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          <Stack.Screen name="product" options={{ headerShown: false }} />
          <Stack.Screen name="employee" options={{ headerShown: false }} />
          <Stack.Screen name="customer" options={{ headerShown: false }} />
          <Stack.Screen name="category" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
