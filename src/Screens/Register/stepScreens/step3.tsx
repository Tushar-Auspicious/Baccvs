import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { CustomText } from "../../../Components/CustomText";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../../Utilities/Metrics";
import CountryPicker from "react-native-country-picker-modal";
import COLORS from "../../../Utilities/Colors";
import CustomInput from "../../../Components/CustomInput";

const Step3 = () => {
  const [visible, setVisible] = useState(false);
  const [countryCode, setCountryCode] = useState("US");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState(null);

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setVisible(false);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handlePhoneNumberChange = (text) => {
    if (text.length <= 10) {
      setPhoneNumber(text);
    }
  };

  return (
    <View style={styles.container}>
      <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
        What’s your phone number?
      </CustomText>
      <View style={styles.textInput}>
        <CountryPicker
          visible={visible}
          onSelect={onSelect}
          onClose={onClose}
          theme={{
            onBackgroundTextColor: COLORS.white,
            backgroundColor: COLORS.lightPink,
          }}
          withCallingCode={true}
          withCallingCodeButton
          withFlagButton={true}
          withFilter
          countryCode={countryCode}
          containerButtonStyle={styles.pickerContainer}
        />

        <CustomInput
          value={phoneNumber}
          placeholder="Enter phone number"
          onChangeText={handlePhoneNumberChange}
          keyboardType="numeric"
          style={styles.phoneinput}
        />
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
  },
  pickerContainer: {
    paddingHorizontal: horizontalScale(10),
    borderRightWidth: 2,
    borderColor: COLORS.greyMedium,
  },
  textInput: {
    backgroundColor: COLORS.inputColor,
    marginTop: verticalScale(20),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.primaryPink,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: verticalScale(50),
  },
  phoneinput: {
    borderRadius: 10,
    width: "70%",
    paddingLeft: horizontalScale(10),
  },
});
