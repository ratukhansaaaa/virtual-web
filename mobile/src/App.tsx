import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./context/auth.context";
import RootNavigator from "./navigation/RootNavigator";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaProvider>
        <Text />
      </SafeAreaProvider>
    );
  }

  if (!(Text as any).defaultProps) (Text as any).defaultProps = {};
  (Text as any).defaultProps.style = [
    {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    (Text as any).defaultProps.style,
  ];

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}