import { Text, View } from "react-native";

export default function ProfileHeaderTitle() {
  return (
    <View className="flex flex-row gap-2 items-center">
      <Text className="font-interBold text-xl">
        Your Profile
      </Text>
    </View>
  );
}
