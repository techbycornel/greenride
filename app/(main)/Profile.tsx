import Award from "@/assets/icons/Award";
import Car from "@/assets/icons/Car"
import Leaf from "@/assets/icons/Leaf"
import BtnAction from "@/components/BtnAction";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserPhoto from "@/assets/images/user.jpg"

const Profile = () => {
  const handleAction = () => {
    console.log("View Rewards clicked");
  };
  return (
    <SafeAreaView className="px-6 flex-1 gap-6 bg-white">
      <ScrollView>
        <View className="gap-6">
          <View className="flex flex-row items-center gap-5 bg-[#FAFAFBFF] p-5">
            <Image source={UserPhoto} className="w-20 h-20 rounded-full" />
            <View className="gap-1">
              <Text className="text-xl font-interBold">Sarah Johnson</Text>
              <Text className="text-lg font-inter text-[#323743FF]">Eco-Warrior</Text>
            </View>
          </View>

          <View className="gap-6">
            <Text className="font-interBold text-2xl">Your impact</Text>
            <View className="flex flex-row justify-between gap-5">
              <View className="bg-[#FAFAFBFF] p-6 gap-7 rounded-xl">
                <View className="flex flex-row gap-3 items-end">
                  <Car color="#1FAD4EFF" />
                  <Text
                    className="font-interMedium flex-1"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Total Rides Completed
                  </Text>
                </View>

                <View className="flex flex-row gap-5 items-end">
                  <Text className="text-3xl font-interBold">1,250</Text>
                  <Text className="text-[#323743FF] text-lg">Points</Text>
                </View>
              </View>

              <View className="bg-[#FAFAFBFF] p-6 gap-7 rounded-xl">
                <View className="flex flex-row gap-3 items-end">
                  <Leaf color="#1FAD4EFF" />
                  <Text className="font-interMedium">CO2 Saved</Text>
                </View>

                <View className="flex flex-row gap-5 items-end">
                  <Text className="text-3xl font-interBold">1,250</Text>
                  <Text className="text-[#323743FF] text-lg">Points</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="bg-[#FAFAFBFF] p-6 gap-7 rounded-xl">
            <View className="flex flex-row gap-3 items-end">
              <Award color="#1FAD4EFF" />
              <Text className="font-interMedium">EcoPoints Earned</Text>
            </View>

            <View className="flex flex-row gap-5 items-end">
              <Text className="text-3xl font-interBold">1,250</Text>
              <Text className="text-[#323743FF] text-lg">Points</Text>
            </View>
          </View>

          <View className="flex flex-col gap-6">
            <Text className="font-interBold text-2xl">Rewards</Text>

            <View className="border border-[#1FAD4E33] bg-[#1FAD4E1A] rounded-2xl p-6 gap-6">
              <Text className="capitalize font-interBold text-2xl text-[#1FAD4EFF]">
                Unlock exclusive rewards!
              </Text>

              <Text className="text-[#616161] leading-6 text-lg">
                Your EcoPoints can be redeemed for discounts, special offers,
                and more. Keelep riding green!
              </Text>

              <BtnAction
                label="View Rewards"
                action={handleAction}
                className="bg-[#1FAD4EFF] hover:bg-[#198c3fff]"
                textColor="text-[#FFFFFFFF]"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
