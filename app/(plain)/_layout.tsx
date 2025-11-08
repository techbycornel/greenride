import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../../global.css";
import DetailHeaderTitle from "@/components/DetailHeaderTitle";

export default function PlainLayout() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!loaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="[id]"
        options={{
          title: "Confirm Ride",
          headerTitle: () => <DetailHeaderTitle />,
        }}
      />
    </Stack>
  );
}
