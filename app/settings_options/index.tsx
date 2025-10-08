import { ImageBackground, Text, View } from "react-native";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/backgrounds/prayer-pro-bg-isha.png")}
        style={{
          flex: 1,
          backgroundColor: "blue",
        }}
        resizeMode="cover"
      >
        <Text style={{ justifyContent: "center" }}>Settings</Text>
      </ImageBackground>
    </View>
  );
}
