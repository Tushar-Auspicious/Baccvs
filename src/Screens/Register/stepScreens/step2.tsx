import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import CustomInput from "../../../Components/CustomInput";
import { CustomText } from "../../../Components/CustomText";
import COLORS from "../../../Utilities/Colors";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../../Utilities/Metrics";

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
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      const newOtp = [...otp];

      if (!newOtp[index]) {
        console.log("sssss");

        inputs.current[index - 1]?.focus();
      }

      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  return (
    <View style={styles.container}>
      <CustomText fontSize={24} fontFamily="bold">
        Enter Code
      </CustomText>
      <CustomText fontSize={12} fontFamily="regular" color={COLORS.greyMedium}>
        We sent a verification code to wilson@mail.com
      </CustomText>
      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <CustomInput
            key={index}
            ref={(ref: TextInput | null) => (inputs.current[index] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            onKeyPress={(event: any) => handleKeyPress(event, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View style={styles.resendcode}>
        <CustomText fontSize={14} fontFamily="bold">
          Didn’t receive code?
        </CustomText>
        <CustomText fontSize={14} fontFamily="bold">
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
    gap: verticalScale(10),
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: horizontalScale(10),
    marginVertical: verticalScale(10),
  },

  input: {
    flex: 1,
    fontSize: responsiveFontSize(16),
    textAlign: "center",
  },
  resendcode: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
