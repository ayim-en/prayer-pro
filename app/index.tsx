import { ImageBackground, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <ImageBackground
        source={require("../assets/images/backgrounds/prayer-pro-bg-fajr.png")}
        style={{
          flex: 1,
          backgroundColor: "blue",
        }}
        resizeMode="cover"
      >
        <Text style={{ justifyContent: "center" }}>Home</Text>
      </ImageBackground>
    </View>
  );
}
