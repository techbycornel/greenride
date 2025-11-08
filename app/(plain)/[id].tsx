import BtnAction from "@/components/BtnAction";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RideImage from "../../assets/images/df58f20a20e4261d7617fad6530611adaa1b6e290fc059b2ce96ceb645c7c364.png";

export default function Detail() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 px-5 gap-6">
      <View className="items-center justify-center gap-4">
        <Text className="capitalize font-interBold text-2xl">
          Your ride details
        </Text>
      </View>

      <ScrollView>
        <View className="flex flex-col gap-5">
          <View className="w-full">
            <Image
              source={RideImage}
              className="w-full h-48 rounded-lg"
              resizeMode="stretch"
            />
          </View>

          <View className="border-b border-[#c9c6c6] my-5 pb-5">
            <View className="flex flex-row justify-between">
              <Text className="text-lg font-interMedium text-[#323743FF]">
                Vehicle Type:
              </Text>

              <Text className="text-lg font-interBold mt-1">
                Electric Sedan
              </Text>
            </View>

            <View className="flex flex-row justify-between">
              <Text className="text-lg font-interMedium text-[#323743FF]">
                Estimated arrival:
              </Text>

              <Text className="text-lg font-interBold mt-1">8 mins</Text>
            </View>

            <View className="flex flex-row justify-between">
              <Text className="text-lg font-interMedium text-[#323743FF]">
                Price:
              </Text>

              <Text className="text-lg font-interBold mt-1">$12.50</Text>
            </View>
          </View>

          <View className="bg-[#25AFF41A] text-center rounded-lg p-4 justify-center items-center">
            <Text className="text-[#25AFF4FF] font-interBold text-lg">
              CO2 Saved: 3.5kg
            </Text>
          </View>

          <Text className="text-center text-[14px] text-gray-600 mt-2">
            Please review the details above. Your payment method will be charged
            upon confirmation.
          </Text>
        </View>
      </ScrollView>

      <View className="gap-5 mt-6">
        <BtnAction
          label="Confirm Booking"
          className="bg-[#1FAD4EFF]"
          action={() => {}}
          textColor="text-white"
        />
        <BtnAction
          label="Cancel"
          className="border-2 border-[#b6b4b4]"
          action={() => {}}
          textColor="text-black"
        />
      </View>
    </SafeAreaView>
  );
}
