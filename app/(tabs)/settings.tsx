import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function settings() {
  return (
    <View className="flex-1 flex-col items-center justify-center gap-4 px-4">
      <Image
        source={require("../../assets/images/working.svg")}
        style={{
          width: 200,
          height: 200,
        }}
        contentFit="contain"
      />
      <Text className="text-2xl font-serif font-bold text-center">
        Dashboard page under construction!
      </Text>
      <Text className="text-center text-xl text-muted-foreground">
        This page is still being developed, please come back later!
      </Text>
    </View>
  );
}
