import React, { FC, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomButton from "../../Components/Buttons/CustomButton";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import { StepsIndicatorProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../Utilities/Metrics";
import Step1 from "./stepScreens/step1";
import Step2 from "./stepScreens/step2";
import Step3 from "./stepScreens/step3";
import styles from "./style";

const SOCIAL_BUTTONS = [
  { id: "google", icon: ICONS.Google, text: "Continue with Google" },
  { id: "facebook", icon: ICONS.facebook, text: "Continue with Facebook" },
  { id: "apple", icon: ICONS.Apple, text: "Continue with Apple" },
  { id: "twitter", icon: ICONS.Twitter, text: "Continue with X" },
];

const Register: FC<StepsIndicatorProps> = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = new Array(10).fill(null);

  const handleContinue = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const renderSignInButtons = () => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: verticalScale(20),
        }}
      >
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
              <CustomText fontSize={responsiveFontSize(16)} fontFamily="bold">
                {text}
              </CustomText>
            </TouchableOpacity>
          ))}
        </View>
        <CustomText
          fontSize={12}
          fontFamily="medium"
          color={COLORS.greyMedium}
          style={{
            textAlign: "center",
            paddingHorizontal: horizontalScale(20),
          }}
        >
          By signing up you acknowledge and agree to Baccvs {` `}
          <CustomText
            fontSize={12}
            fontFamily="medium"
            color={COLORS.mediuumPink}
          >
            General Terms of Use
          </CustomText>
          {` `} and {` `}
          <CustomText
            fontSize={12}
            fontFamily="medium"
            color={COLORS.mediuumPink}
          >
            Privacy Policy
          </CustomText>
        </CustomText>
      </View>
    );
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const renderCurrentStep = useMemo(() => {
    switch (currentIndex) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      default:
        return null;
    }
  }, [currentIndex]);

  const renderStepper = useMemo(() => {
    return (
      <View style={styles.stepCont}>
        {steps.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.stepscount,
                {
                  backgroundColor:
                    index <= currentIndex ? COLORS.primaryPink : COLORS.voilet,
                },
              ]}
            >
              <CustomText fontSize={24} fontFamily="bold">
                {index + 1}
              </CustomText>
            </View>
          );
        })}
      </View>
    );
  }, [currentIndex, steps]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <View style={styles.header}>
          <CustomIcon
            Icon={ICONS.backArrow}
            height={20}
            width={20}
            onPress={handleBack}
          />
          {renderStepper}
        </View>
        {renderCurrentStep}

        <CustomButton title="Continue" onPress={handleContinue} />
        {currentIndex === 0 && renderSignInButtons()}
      </SafeAreaView>
    </View>
  );
};

export default Register;
