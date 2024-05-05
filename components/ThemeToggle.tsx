import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, View } from "react-native";
import { MoonStar, Sun } from "~/components/Icons";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import { useColorScheme } from "~/lib/useColorScheme";
import { cn } from "~/lib/utils";

export function ThemeToggle({ size = 24, strokeWidth = 1.25 }) {
  const { isDarkColorScheme, setColorScheme } = useColorScheme();
  return (
    <Pressable
      onPress={() => {
        const newTheme = isDarkColorScheme ? "light" : "dark";
        setColorScheme(newTheme);
        setAndroidNavigationBar(newTheme);
        AsyncStorage.setItem("theme", newTheme);
      }}
    >
      {({ pressed }) => (
        <View className={cn("justify-center", pressed && "opacity-70")}>
          {isDarkColorScheme ? (
            <MoonStar
              className="text-foreground"
              size={size}
              strokeWidth={strokeWidth}
            />
          ) : (
            <Sun
              className="text-foreground"
              size={size}
              strokeWidth={strokeWidth}
            />
          )}
        </View>
      )}
    </Pressable>
  );
}
