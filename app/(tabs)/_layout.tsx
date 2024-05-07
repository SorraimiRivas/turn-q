import { Redirect, Tabs } from "expo-router";
import { View } from "react-native";
import Header from "~/components/Header";
import {
  LayoutDashboard,
  ListStart,
  Settings,
  User2,
} from "~/components/Icons";
import { Text } from "~/components/ui/text";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { cn } from "~/lib/utils";

type CustomIcon = {
  children: React.ReactElement;
  color: string;
  size: number;
  focused: boolean;
  title: string;
};

const CustomTabIcon = ({ color, focused, title, children }: CustomIcon) => {
  return (
    <View className="items-center">
      {children}
      <Text
        className={cn("", focused ? "font-p700" : "font-p400")}
        style={{
          color,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const nav = [
  {
    name: "index",
    title: "Queue",
    icon: ListStart,
  },
  {
    name: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "profile",
    title: "Profile",
    icon: User2,
  },
  {
    name: "settings",
    title: "Settings",
    icon: Settings,
  },
];

export default function TabsLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const user = {
    role: "user",
  };

  if (!user) {
    return <Redirect href={"/(auth)/"} />;
  }

  return (
    <>
      <Header />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: isDarkColorScheme
            ? NAV_THEME.dark.text
            : NAV_THEME.light.text,
          tabBarInactiveTintColor: "grey",
          tabBarStyle: {
            height: 85,
          },
        }}
      >
        {nav.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ color, focused, size }) => (
                <CustomTabIcon
                  color={color}
                  size={size}
                  focused={focused}
                  title={tab.title}
                >
                  <tab.icon color={color} size={size} />
                </CustomTabIcon>
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
