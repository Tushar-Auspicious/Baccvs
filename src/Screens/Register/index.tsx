import { View, SafeAreaView } from "react-native";
import React, { FC, useMemo, useState } from "react";
import styles from "./style";
import { horizontalScale, responsiveFontSize } from "../../Utilities/Metrics";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import COLORS from "../../Utilities/Colors";
import { StepsIndicatorProps } from "../../Typings/route";
import { CustomText } from "../../Components/CustomText";
import CustomButton from "../../Components/Buttons/CustomButton";
import Step1 from "./stepScreens/step1";
import Step2 from "./stepScreens/step2";
import Step3 from "./stepScreens/step3";
import Step4 from "./stepScreens/step4";
import Step5 from "./stepScreens/step5";
import Step6 from "./stepScreens/step6";

const Register: FC<StepsIndicatorProps> = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = new Array(10).fill(null);

  const handleContinue = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
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
        return <Step1 onContinue={handleContinue} />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
      case 5:
        return <Step6 />;
      default:
        return null;
    }
  }, [currentIndex]);

  const renderStepper = useMemo(() => {
    return (
      <View style={{ flexDirection: "row", gap: 8 }}>
        {steps.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.stepscount,
                {
                  backgroundColor:
                    index < currentIndex
                      ? COLORS.primaryPink
                      : index === currentIndex
                      ? COLORS.primaryPink
                      : COLORS.greyMedium,
                },
              ]}
            >
              <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
                {index + 1}
              </CustomText>
            </View>
          );
        })}
      </View>
    );
  }, [currentIndex, steps]);

  console.log(currentIndex);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, paddingHorizontal: horizontalScale(20) }}>
        <View style={styles.stepsOuterView}>
          <CustomIcon
            Icon={ICONS.backArrow}
            height={20}
            width={20}
            onPress={handleBack}
          />
          {renderStepper}
        </View>
        <View style={{ flex: 1 }}>{renderCurrentStep}</View>

        {currentIndex > 0 && (
          <CustomButton
            title="Continue"
            onPress={handleContinue}
            style={styles.buttonstyle}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Register;
