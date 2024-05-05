import { BlurView } from "expo-blur";
import React from "react";
import { Platform, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { cn } from "~/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Text } from "./ui/text";

export default function Header() {
  const { top } = useSafeAreaInsets();
  return (
    <BlurView
      style={{
        paddingTop: Platform.OS === "ios" ? top : top + 10,
      }}
      tint="prominent"
      intensity={80}
    >
      <View
        className={cn(
          "h-16 w-full flex-row justify-between items-center px-4 border-b border-muted"
        )}
      >
        <Avatar alt="User Profile" className="h-12 w-12">
          <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
          <AvatarFallback>SR</AvatarFallback>
        </Avatar>
        <Text className="text-xl font-bold">Turn Q</Text>
        <ThemeToggle />
      </View>
    </BlurView>
  );
}