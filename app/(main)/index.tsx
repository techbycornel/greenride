import BtnAction from "@/components/BtnAction";
import { RideData } from "@/utils/data";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = () => {
    router.push({
      pathname: "/(plain)/[id]",
      params: { id: selected },
    });
  };

  return (
    <SafeAreaView className="flex-1 px-5">
      <StatusBar barStyle="dark-content" />

      <Text className="capitalize text-2xl font-interBold">
        Choose your green ride
      </Text>

      <FlatList
        data={RideData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
        renderItem={({ item }) => {
          const isSelected = selected === item.id;

          return (
            <Pressable onPress={() => setSelected(item.id)}>
              <View
                className={`p-4 rounded-2xl mb-5 
                  ${isSelected ? "border-2 border-[#1FAD4EFF] bg-[#E6F9EE]" : "border border-gray-300 bg-gray-100"}
                `}
              >
                <View
                  className={`absolute right-4 top-4 px-3 py-1 rounded-full ${
                    item.category === "electric"
                      ? "bg-[#0596683f]"
                      : "bg-[#1192c533]"
                  }`}
                >
                  <Text
                    className={`text-sm font-interBold capitalize ${
                      item.category === "electric"
                        ? "text-[#059669FF]"
                        : "text-[#0fa8e4]"
                    }`}
                  >
                    {item.category}
                  </Text>
                </View>

                <View className="flex flex-row items-center gap-3">
                  <Image
                    source={item.image}
                    className="h-20 w-20 rounded-2xl"
                    resizeMode="cover"
                  />
                  <View>
                    <Text className="text-base font-interBold">
                      {item.type}
                    </Text>
                    <Text className="text-sm text-gray-500">{item.time}</Text>
                  </View>
                </View>

                <View className="mt-4 flex flex-row justify-between items-center border-t border-gray-300 pt-4">
                  <View>
                    <Text className="text-sm text-gray-500">Price</Text>
                    <Text className="text-lg font-interBold text-[#1FAD4EFF]">
                      ${item.price.toFixed(2)}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-sm text-gray-500">CO₂ Saved</Text>
                    <Text className="text-lg font-interBold text-[#1FAD4EFF]">
                      {item.saved} kg
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}
      />

      {selected && (
        <BtnAction
          label="Select Ride"
          action={handleSelect}
          className="bg-[#1FAD4EFF] hover:bg-[#198c3fff]"
          textColor="text-[#FFFFFFFF]"
        />
      )}
    </SafeAreaView>
  );
}
