import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../../Utilities/Metrics";
import COLORS from "../../../Utilities/Colors";
import { CustomText } from "../../../Components/CustomText";
import CustomInput from "../../../Components/CustomInput";

const Step5 = () => {
  const [enterName, setEnterName] = useState("");
  return (
    <View style={styles.container}>
      <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
        What’s your name?
      </CustomText>
      <CustomInput
        value={enterName}
        placeholder="Enter your name"
        onChangeText={setEnterName}
        style={styles.textInput}
      />
      <CustomText
        fontSize={responsiveFontSize(12)}
        fontFamily="medium"
        style={{ color: COLORS.greyMedium, marginTop: verticalScale(10) }}
      >
        This is how it will appear in Baccvs, and you won’t be able to change it
        later. Make sure it's correct before proceeding.
      </CustomText>
    </View>
  );
};

export default Step5;

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
