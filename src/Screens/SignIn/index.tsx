import React, { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomButton from "../../Components/Buttons/CustomButton";
import CustomIcon from "../../Components/CustomIcon";
import CustomInput from "../../Components/CustomInput";
import { CustomText } from "../../Components/CustomText";
import { SignInIndicatorProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { verticalScale } from "../../Utilities/Metrics";
import styles from "./style";

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
    navigation.replace("mainStack", {
      screen: "tabs",
      params: {
        screen: "homeTab",
      },
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <View style={styles.header}>
          <CustomIcon
            Icon={ICONS.backArrow}
            height={24}
            width={24}
            onPress={() => navigation.goBack()}
          />
          <CustomText
            fontFamily="bold"
            fontSize={14}
            color={COLORS.mediuumPink}
            onPress={() => navigation.navigate("referral")}
          >
            Create account
          </CustomText>
        </View>

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
          disabled={inputValue.length === 0 || enterPassword.length === 0}
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
