import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomInput from "../../../Components/CustomInput";
import { CustomText } from "../../../Components/CustomText";
import { verticalScale } from "../../../Utilities/Metrics";

const Step1 = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <CustomText fontSize={24} fontFamily="bold">
        What’s your email?
      </CustomText>

      <CustomInput
        value={inputValue}
        placeholder="Enter email"
        onChangeText={setInputValue}
      />
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    gap: verticalScale(10),
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
