import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingsPaymentProps } from "../../Typings/route";

const SettingsPayment: FC<SettingsPaymentProps> = ({ navigation }) => {
  return (
    <View>
      <Text>SettingsPayment</Text>
    </View>
  );
};

export default SettingsPayment;

const styles = StyleSheet.create({});
