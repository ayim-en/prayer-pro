import { PortalHost } from "@rn-primitives/portal";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

export default function RootLayout() {
  return (
    <>
      <GestureHandlerRootView style = {{ flex: 1}}>
      <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen name="index"
        options={{
            title: "Home"
        }}/>
        <Tabs.Screen name="qibla"
          options={{
            title: "Qibla"
        }}/>
        <Tabs.Screen name="calendar"
          options={{
            title: "Calendar"
        }}/>
        <Tabs.Screen name="settings_options"
        options={{
            title: "Settings",
            href: null
        }}/>
      </Tabs>
      <PortalHost />
      </GestureHandlerRootView>
    </>
  );
}
