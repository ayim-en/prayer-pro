import { ImageBackground, Text, View } from "react-native";

export default function Qibla() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <ImageBackground
        source={require("../assets/images/backgrounds/prayer-pro-bg-asr.png")}
        style={{
          flex: 1,
          backgroundColor: "blue",
        }}
        resizeMode="cover"
      >
        <Text style={{ justifyContent: "center" }}>Qibla</Text>
      </ImageBackground>
    </View>
  );
}
