import { ImageBackground, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/backgrounds/prayer-pro-bg-fajr.png")}
        className="flex-1 w-full h-full justify-center items-center"
        resizeMode="cover"
      >
        <Text className="text-white text-xl">Home</Text>
      </ImageBackground>
    </View>
  );
}
