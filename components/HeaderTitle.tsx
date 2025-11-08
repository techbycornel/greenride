import Logo from "@/assets/icons/logo.svg";
import { View, Text } from "react-native";

export default function HeaderTitle() {
  return (
    <View className="flex flex-row gap-2 items-center">
      <View className="bg-[#1FAD4EFF] rounded-xl p-2">
        <Logo width={20} height={20} color="#FFFFFF" />
      </View>
      <Text className="text-[#1FAD4EFF] font-interBold text-lg">
        GreenRide
      </Text>
    </View>
  );
}
