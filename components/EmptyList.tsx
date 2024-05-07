import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { Text } from "./ui/text";

export default function EmptyList() {
  return (
    <View className="flex-col items-center gap-4 px-14">
      <Image
        source={require("../assets/images/empty.svg")}
        contentFit="contain"
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text className="text-2xl font-p800">The Queue is Empty!</Text>
      <Text className="text-center text-xl font-p400 text-muted-foreground">
        The Queue will be generated when the time is right, do not despair!
      </Text>
    </View>
  );
}
