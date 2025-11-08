import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const DetailHeaderTitle = () => {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between gap-3 w-full">
      <Pressable onPress={() => router.back()}>
        <ArrowLeft size={20} strokeWidth={2} />
      </Pressable>

      <Text className="text-xl font-interBold">Confirm Ride</Text>

      <View />
    </View>
  );
};

export default DetailHeaderTitle;
