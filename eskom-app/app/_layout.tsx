import "../global.css"
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import ThemedView from "@/components/themes/ThemedView";

export default function RootLayout() {
  return (
    <ThemedView className="flex-1">
      <Stack>
        <Stack.Screen name="(auth)" options={{headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{headerShown: false }} />
        <Stack.Screen name="index" options={{headerShown: false }} />
      </Stack>

      <StatusBar style="auto" />
    </ThemedView>
  );
}
