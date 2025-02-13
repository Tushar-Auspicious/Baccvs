import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomInput from "../../../Components/CustomInput";
import { CustomText } from "../../../Components/CustomText";
import COLORS from "../../../Utilities/Colors";
import { verticalScale } from "../../../Utilities/Metrics";

const Step5 = () => {
  const [enterName, setEnterName] = useState("");
  return (
    <View style={styles.container}>
      <CustomText fontSize={24} fontFamily="bold">
        What’s your name?
      </CustomText>
      <CustomInput
        value={enterName}
        placeholder="Enter your name"
        onChangeText={setEnterName}
      />
      <CustomText fontSize={12} color={COLORS.greyMedium}>
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
    gap: verticalScale(15),
  },
});
