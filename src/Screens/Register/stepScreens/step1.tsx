import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import CustomInput from "../../../Components/CustomInput";
import { CustomText } from "../../../Components/CustomText";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
  wp,
} from "../../../Utilities/Metrics";
import { ColorProperties } from "react-native-reanimated/lib/typescript/Colors";
import COLORS from "../../../Utilities/Colors";
import CustomButton from "../../../Components/Buttons/CustomButton";
import CustomIcon from "../../../Components/CustomIcon";
import ICONS from "../../../Assets/Icons";

interface Step1Props {
  onContinue: () => void;
}

const Step1 = ({ onContinue }: Step1Props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.container}>
      <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
        What’s your email?
      </CustomText>

      <CustomInput
        value={inputValue}
        placeholder="Enter email"
        onChangeText={setInputValue}
        style={styles.textInput}
      />
      <CustomButton
        title="Continue"
        onPress={onContinue}
        style={styles.buttonstyle}
      />
      <View style={styles.orcontent}>
        <View style={styles.linebar} />
        <CustomText fontSize={responsiveFontSize(12)} fontFamily="medium">
          {` `} Or {` `}
        </CustomText>
        <View style={styles.linebar} />
      </View>
      <View style={{ marginTop: verticalScale(20) }}>
        <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
          <CustomIcon Icon={ICONS.Google} height={24} width={24} />
          <CustomText fontSize={responsiveFontSize(16)} fontFamily="bold">
            Continue with Google
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
          <CustomIcon Icon={ICONS.facebook} height={24} width={24} />
          <CustomText fontSize={responsiveFontSize(16)} fontFamily="bold">
            Continue with Facebook
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
          <CustomIcon Icon={ICONS.Apple} height={24} width={24} />
          <CustomText fontSize={responsiveFontSize(16)} fontFamily="bold">
            Continue with Apple
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} activeOpacity={0.8}>
          <CustomIcon Icon={ICONS.Twitter} height={24} width={24} />
          <CustomText fontSize={responsiveFontSize(16)} fontFamily="bold">
            Continue with X
          </CustomText>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: verticalScale(15),
          width: "90%",
          alignSelf: "center",
        }}
      >
        <CustomText
          fontSize={responsiveFontSize(12)}
          fontFamily="medium"
          style={{ textAlign: "center" }}
        >
          By signing up you acknowledge and agree to Baccvs {` `}
          <CustomText
            fontSize={responsiveFontSize(12)}
            fontFamily="medium"
            style={{ color: COLORS.primaryPink }}
          >
            General Terms of Use
          </CustomText>
          {` `} and {` `}
          <CustomText
            fontSize={responsiveFontSize(12)}
            fontFamily="medium"
            style={{ color: COLORS.primaryPink }}
          >
            Privacy Policy
          </CustomText>
        </CustomText>
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: COLORS.darkVoilet,
    opacity: 0.29,
    marginTop: verticalScale(20),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.primaryPink,
  },
  buttonstyle: {
    width: wp(90),
    alignSelf: "center",
    borderRadius: 25,
    backgroundColor: COLORS.darkVoilet,
    opacity: 0.29,
    marginTop: verticalScale(20),
    borderWidth: 0.5,
    borderColor: COLORS.primaryPink,
  },
  orcontent: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: verticalScale(20),
  },
  linebar: {
    borderBottomWidth: 1,
    borderColor: COLORS.primaryPink,
    opacity: 0.29,
    width: "45%",
  },
  buttons: {
    borderWidth: 1,
    borderColor: COLORS.greyMedium,
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(10),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    width: "100%",
    marginTop: verticalScale(10),
    borderRadius: 25,
    justifyContent: "center",
  },
});
