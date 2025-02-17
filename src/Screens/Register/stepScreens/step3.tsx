import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CountryPicker, {
  Country,
  CountryCode,
} from "react-native-country-picker-modal";
import CustomInput from "../../../Components/CustomInput";
import { CustomText } from "../../../Components/CustomText";
import COLORS from "../../../Utilities/Colors";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../../Utilities/Metrics";

const Step3 = () => {
  const [visible, setVisible] = useState(false);
  const [countryCode, setCountryCode] = useState<CountryCode>("US");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setVisible(false);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handlePhoneNumberChange = (text: string) => {
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
            backgroundColor: COLORS.appBackground,
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
          backgroundColor="transparent"
        />
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(20),
  },
  pickerContainer: {
    borderRightWidth: 2,
    borderColor: COLORS.greyMedium,
    paddingHorizontal: 15,
  },
  textInput: {
    backgroundColor: COLORS.inputColor,
    borderRadius: 12,
    borderColor: COLORS.primaryPink,
    flexDirection: "row",
    alignItems: "center",
  },
  phoneinput: {
    width: "100%",
  },
});
