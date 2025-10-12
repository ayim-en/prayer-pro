import { Stack } from "expo-router";

export default function SettingsStack() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="notifications" options={{}} />
      <Stack.Screen name="prayer-times" options={{}} />
    </Stack>
  );
}
