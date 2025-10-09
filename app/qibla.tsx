import { ImageBackground, Text, View } from "react-native";

export default function Qibla() {
  return (
    <View className="flex-1 bg-red-500">
      <ImageBackground
        source={require("../assets/images/backgrounds/prayer-pro-bg-asr.png")}
        className="flex-1 bg-blue-600"
        resizeMode="cover"
      >
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-xl">Qibla</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
