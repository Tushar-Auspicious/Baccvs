import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomText } from "../../../Components/CustomText";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../../Utilities/Metrics";
import CustomInput from "../../../Components/CustomInput";
import COLORS from "../../../Utilities/Colors";

const Step4 = () => {
  const [inputValue, setInputValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
        Create password
      </CustomText>
      <CustomInput
        value={inputValue}
        placeholder="Create a password"
        onChangeText={setInputValue}
        style={styles.textInput}
      />
      <CustomInput
        value={confirmPassword}
        placeholder="Confirm password"
        onChangeText={setConfirmPassword}
        style={styles.textInput}
      />
    </View>
  );
};

export default Step4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
  },
  textInput: {
    backgroundColor: COLORS.inputColor,
    opacity: 0.29,
    marginTop: verticalScale(20),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.primaryPink,
  },
});
