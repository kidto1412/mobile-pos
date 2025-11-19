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
import { LoadingProvider } from "@/providers/loading.provider";
import { ToastProvider } from "@/providers/toast.provider";

export const unstable_settings = {
  anchor: "(main)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider>
      <ToastProvider>
        <LoadingProvider>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="splash" />
              <Stack.Screen name="(main)" />
              <Stack.Screen name="product" />
              <Stack.Screen name="sales" />
              <Stack.Screen name="employee" />
              <Stack.Screen name="customer" />
              <Stack.Screen name="category" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </LoadingProvider>
      </ToastProvider>
    </GluestackUIProvider>
  );
}
