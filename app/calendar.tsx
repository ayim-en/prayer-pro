import { ImageBackground, Text, View } from "react-native";

export default function Calendar() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <ImageBackground
        source={require("../assets/images/backgrounds/prayer-pro-bg-maghrib.png")}
        style={{
          flex: 1,
          backgroundColor: "blue",
        }}
        resizeMode="cover"
      >
        <Text style={{ justifyContent: "center" }}>Calendar</Text>
      </ImageBackground>
    </View>
  );
}
