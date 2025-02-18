import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomText } from "../../../Components/CustomText";
import { horizontalScale, verticalScale } from "../../../Utilities/Metrics";
import CustomButton from "../../../Components/Buttons/CustomButton";
import COLORS from "../../../Utilities/Colors";

const Step7 = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <CustomText fontSize={24} fontFamily="bold">
        What’s your gender?
      </CustomText>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          gap: horizontalScale(10),
        }}
      >
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
      </View>
    </View>
  );
};

export default Step7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(15),
  },
  genderbtn: {
    backgroundColor: COLORS.inputColor,
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
  },
  selectedGender: {
    borderColor: COLORS.primaryPink,
  },
});
