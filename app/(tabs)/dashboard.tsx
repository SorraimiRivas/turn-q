import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";

export default function Dashboard() {
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
      <Text className="text-2xl font-p700 text-center">
        Dashboard page under construction!
      </Text>
      <Text className="text-center text-xl font-p400 text-muted-foreground">
        This page is still being developed, please come back later!
      </Text>
    </View>
  );
}
