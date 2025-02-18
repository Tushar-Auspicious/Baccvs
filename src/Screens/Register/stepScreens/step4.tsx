import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomInput from "../../../Components/CustomInput";
import { CustomText } from "../../../Components/CustomText";
import { responsiveFontSize, verticalScale } from "../../../Utilities/Metrics";

const Step4 = () => {
  const [inputValue, setInputValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
        Create password
      </CustomText>
      <View style={{ gap: verticalScale(15) }}>
        <CustomInput
          value={inputValue}
          placeholder="Create a password"
          onChangeText={setInputValue}
        />
        <CustomInput
          value={confirmPassword}
          placeholder="Confirm password"
          onChangeText={setConfirmPassword}
        />
      </View>
    </View>
  );
};

export default Step4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(20),
  },
});
