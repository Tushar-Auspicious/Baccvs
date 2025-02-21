import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingsRecieptDetailProps } from "../../Typings/route";

const SettingsRecieptDetail: FC<SettingsRecieptDetailProps> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>SettingsRecieptDetail</Text>
    </View>
  );
};

export default SettingsRecieptDetail;

const styles = StyleSheet.create({});
