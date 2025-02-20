import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SettingsBillingHistoryProps } from "../../Typings/route";

const SettingsBillingHistory: FC<SettingsBillingHistoryProps> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>SettingsBillingHistory</Text>
    </View>
  );
};

export default SettingsBillingHistory;

const styles = StyleSheet.create({});
