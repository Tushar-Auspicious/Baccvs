import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";
import { CustomText } from "../CustomText";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  disabled?: boolean;
  textSize?: number;
  isFullWidth?: boolean;
};

const CustomButton: FC<CustomButtonProps> = ({
  title,
  onPress,
  backgroundColor = COLORS.primaryPink,
  textColor = COLORS.white,
  style,
  textSize = 16,
  disabled = false,
  isFullWidth = true,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      style={[
        isFullWidth && styles.button,
        {
          backgroundColor: disabled ? COLORS.inputColor : backgroundColor,
          opacity: disabled ? 0.8 : 1,
        },
        style,
      ]}
      onPress={onPress}
    >
      <CustomText fontSize={textSize} color={textColor} fontFamily="bold">
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(20),
    borderRadius: verticalScale(20),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: verticalScale(5),
    width: wp(90),
    alignSelf: "center",
  },
});
