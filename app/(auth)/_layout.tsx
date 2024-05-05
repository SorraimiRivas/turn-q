import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
  const user = true;

  if (user) {
    return <Redirect href={"/(tabs)/"} />;
  }

  return <Slot />;
}
