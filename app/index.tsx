import Logo from "@/assets/icons/logo.svg";
import BtnAction from "@/components/BtnAction";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function App() {
  const router = useRouter();

  const handleStart = () => {
    console.log("test");
    router.push("/(main)");
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white p-6">
      <View className="bg-[#1FAD4EFF] rounded-2xl p-4 my-8">
        <Logo width={40} height={40} color="#FFFFFF" />
      </View>

      <BtnAction
        label="Start Riding Green"
        action={handleStart}
        className="bg-[#1FAD4EFF] hover:bg-[#198c3fff]"
        textColor="text-[#FFFFFFFF]"
      />
    </SafeAreaView>
  );
}
