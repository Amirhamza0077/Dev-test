import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <StatusBar barStyle="dark-content"/>
      <Text className="text-black">Hello Bro</Text>
    </SafeAreaView>
  );
};

export default index;
