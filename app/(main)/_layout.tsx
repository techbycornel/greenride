import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import "../../global.css";
import HeaderTitle from "@/components/HeaderTitle"; // <--- you'll create this
import ProfileHeaderTitle from "@/components/ProfileHeaderTitle";
import MapHeaderTitle from "@/components/MapHeaderTitle";

export default function Layout() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!loaded) return null;

  return (
    <Tabs
      screenOptions={{
        headerShown: true,          // <--- enable header
        headerTitleAlign: "left",   // optional alignment
        tabBarActiveTintColor: "#1FAD4EFF",
        tabBarInactiveTintColor: "#000000FF",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter_400Regular",
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: () => <HeaderTitle />,
        }}
      />
      <Tabs.Screen name="Profile" options={{ title: "Profile", headerTitle: () => <ProfileHeaderTitle /> }} />
      <Tabs.Screen name="Map" options={{ title: "Map", headerTitle: () => <MapHeaderTitle /> }} />
    </Tabs>
  );
}
