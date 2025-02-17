import { View, Text, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import SignInHeader from "../Referral/SignInHeader/HeaderSignIn";
import { SignInIndicatorProps } from "../../Typings/route";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import { responsiveFontSize, verticalScale } from "../../Utilities/Metrics";
import ICONS from "../../Assets/Icons";
import COLORS from "../../Utilities/Colors";
import CustomButton from "../../Components/Buttons/CustomButton";
import CustomInput from "../../Components/CustomInput";

const SOCIAL_BUTTONS = [
  { id: "google", icon: ICONS.Google, text: "Continue with Google" },
  { id: "facebook", icon: ICONS.facebook, text: "Continue with Facebook" },
  { id: "apple", icon: ICONS.Apple, text: "Continue with Apple" },
  { id: "twitter", icon: ICONS.Twitter, text: "Continue with X" },
];

const SignIn: FC<SignInIndicatorProps> = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [enterPassword, setEnterPassword] = useState("");

  const onContinue = () => {
    navigation.navigate("mainStack");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <SignInHeader
          title={
            <Text onPress={() => navigation.navigate("referral")}>
              {"Create account"}
            </Text>
          }
          onBackPress={() => navigation.goBack()}
        />
        <CustomText fontSize={24} fontFamily="bold" style={styles.textstyle}>
          Sign in
        </CustomText>
        <View style={{ gap: verticalScale(10) }}>
          <CustomInput
            value={inputValue}
            placeholder="Enter email"
            onChangeText={setInputValue}
          />
          <CustomInput
            value={enterPassword}
            placeholder="Enter password"
            onChangeText={setEnterPassword}
          />
        </View>
        <CustomButton
          title="Continue"
          onPress={onContinue}
          isFullWidth
          style={{
            backgroundColor: COLORS.inputColor,
            borderWidth: 0.5,
            borderColor: COLORS.greyMedium,
          }}
        />
        <View style={styles.orContent}>
          <View style={styles.linebar} />
          <CustomText
            fontSize={12}
            color={COLORS.greyMedium}
            fontFamily="medium"
          >
            Or
          </CustomText>
          <View style={styles.linebar} />
        </View>
        <View style={{ width: "100%" }}>
          {SOCIAL_BUTTONS.map(({ id, icon, text }) => (
            <TouchableOpacity
              key={id}
              style={styles.socialButton}
              activeOpacity={0.8}
            >
              <CustomIcon Icon={icon} height={24} width={24} />
              <CustomText fontSize={16} fontFamily="bold">
                {text}
              </CustomText>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignIn;
