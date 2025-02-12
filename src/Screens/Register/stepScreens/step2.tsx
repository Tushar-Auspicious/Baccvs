import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../../Utilities/Metrics";
import COLORS from "../../../Utilities/Colors";
import { CustomText } from "../../../Components/CustomText";

const Step2 = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  console.log(otp);

  return (
    <View style={styles.container}>
      <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
        Enter Code
      </CustomText>
      <CustomText
        fontSize={responsiveFontSize(12)}
        fontFamily="regular"
        style={{ marginTop: 20, color: COLORS.greyMedium }}
      >
        We sent a verification code to wilson@mail.com
      </CustomText>
      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View style={styles.resendcode}>
        <CustomText fontSize={responsiveFontSize(14)} fontFamily="bold">
          Didn’t receive code?
        </CustomText>
        <CustomText fontSize={responsiveFontSize(14)} fontFamily="bold">
          Resend in 0:24
        </CustomText>
      </View>
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: horizontalScale(10),
    marginTop: verticalScale(10),
  },
  input: {
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    fontSize: responsiveFontSize(16),
    color: COLORS.white,
    textAlign: "center",
    backgroundColor: COLORS.darkVoilet,
    opacity: 0.29,
    marginTop: verticalScale(20),
    borderWidth: 1,
    borderColor: COLORS.primaryPink,
  },
  resendcode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(15),
  },
});
