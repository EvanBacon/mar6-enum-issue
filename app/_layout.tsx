import { Stack } from "expo-router";
import { Platform } from "react-native";
import { Platform as OtherPlatform } from "./some-enum";

console.log("Platform:", Platform, OtherPlatform.KIOSK);

export default function Layout() {
  return <Stack />;
}
