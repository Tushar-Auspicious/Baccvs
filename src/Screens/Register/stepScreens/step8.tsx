import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomText } from "../../../Components/CustomText";
import { verticalScale } from "../../../Utilities/Metrics";
import CustomButton from "../../../Components/Buttons/CustomButton";
import COLORS from "../../../Utilities/Colors";

const Step8 = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <CustomText fontSize={24} fontFamily="bold">
        What gender are you interested in?
      </CustomText>
      <View>
        <CustomButton
          title="Male"
          textSize={14}
          onPress={() => handleGenderSelect("Male")}
          isFullWidth
          style={[
            styles.genderbtn,
            selectedGender === "Male" && styles.selectedGender,
          ]}
        />
        <CustomButton
          title="Female"
          textSize={14}
          onPress={() => handleGenderSelect("Female")}
          isFullWidth
          style={[
            styles.genderbtn,
            selectedGender === "Female" && styles.selectedGender,
          ]}
        />
        <CustomButton
          title="Everyone"
          textSize={14}
          onPress={() => handleGenderSelect("Everyone")}
          isFullWidth
          style={[
            styles.genderbtn,
            selectedGender === "Everyone" && styles.selectedGender,
          ]}
        />
      </View>
    </View>
  );
};

export default Step8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(10),
  },
  genderbtn: {
    backgroundColor: COLORS.inputColor,
    borderRadius: 8,
    borderWidth: 1,
  },
  selectedGender: {
    borderColor: COLORS.primaryPink,
  },
});
