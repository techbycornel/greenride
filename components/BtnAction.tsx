import { BtnProps } from "@/types/Btn";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const BtnAction = ({ label, action, className, textColor }: BtnProps) => {
  return (
    <TouchableOpacity
      onPress={action}
      className={`w-full rounded-2xl h-14 items-center justify-center ${className}`}
      activeOpacity={0.8}
    >
      <Text className={`text-lg font-interBold ${textColor}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnAction;
