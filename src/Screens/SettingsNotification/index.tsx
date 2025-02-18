import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SettingsNotificaitonProps } from "../../Typings/route";

const SettingsNotification: FC<SettingsNotificaitonProps> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>SettingsNotification</Text>
    </View>
  );
};

export default SettingsNotification;

const styles = StyleSheet.create({});
