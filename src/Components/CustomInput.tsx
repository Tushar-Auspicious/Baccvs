import React, { FC, forwardRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import COLORS from "../Utilities/Colors";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../Utilities/Metrics";
import { CustomText } from "./CustomText";

type CustomInputProps = TextInputProps & {
  placeholder?: string;
  type?: "text" | "password" | "search";
  onChangeText: (text: string) => void;
  value: string;
  style?: object;
  isFilterIcon?: boolean;
  onFilterPress?: () => void;
  label?: string;
  height?: number;
  backgroundColor?: string;
};

const CustomInput = forwardRef<TextInput, CustomInputProps>(
  (
    {
      placeholder,
      onChangeText,
      value,
      style,
      type = "text",
      label,
      isFilterIcon = false,
      onFilterPress,
      height = 56,
      backgroundColor = COLORS.inputColor,
      ...rest
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false); // State to toggle password visibility

    // Toggle password visibility
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <View
        style={[
          style,
          {
            gap: verticalScale(5),
          },
        ]}
      >
        {label && <CustomText fontFamily="medium">{label}</CustomText>}
        <View
          style={[
            styles.container, // Base container style
            {
              backgroundColor,
            },
            type === "search" && { gap: horizontalScale(10) }, // Add gap for search type
          ]}
        >
          {/* Render a search icon for search type */}
          {/* {type === "search" && (
          <CustomIcon Icon={ICONS.SearchWhite} height={20} width={20} />
        )} */}

          {/* Main input field */}
          <TextInput
            ref={ref}
            style={[
              styles.input,
              {
                height: height,
              },
            ]} // Input field style
            placeholder={placeholder} // Placeholder text
            placeholderTextColor={COLORS.greyMedium} // Placeholder text color
            secureTextEntry={type === "password" && !isPasswordVisible} // Hide input text for password type if visibility is off
            onChangeText={onChangeText} // Handle text change
            value={value} // Display current value
            {...rest}
          />

          {/* Toggle password visibility for password type */}
          {type === "password" && (
            <TouchableOpacity
              style={styles.iconContainer} // Style for the icon container
              onPress={togglePasswordVisibility} // Toggle visibility on icon press
            >
              {/* <CustomIcon Icon={ICONS.eyeoffIcon} height={20} width={20} /> */}
            </TouchableOpacity>
          )}

          {/* Render filter icon for search type */}
          {/* {type === "search" && isFilterIcon && (
          <CustomIcon
            onPress={onFilterPress} // Trigger filter press callback
            Icon={ICONS.Filter}
            height={20}
            width={20}
          />
        )} */}
        </View>
      </View>
    );
  }
);

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: horizontalScale(15),
  },
  input: {
    flex: 1,
    fontSize: responsiveFontSize(14),
    color: COLORS.white,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
