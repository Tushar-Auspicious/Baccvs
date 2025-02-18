import React from "react";
import { View, StyleSheet, GestureResponderEvent } from "react-native";
import CustomIcon from "../../../Components/CustomIcon";
import ICONS from "../../../Assets/Icons";
import COLORS from "../../../Utilities/Colors";
import { CustomText } from "../../../Components/CustomText";

interface SignInHeaderProps {
  onBackPress: (event: GestureResponderEvent) => void;
  title?: string;
}

const SignInHeader: React.FC<SignInHeaderProps> = ({
  onBackPress,
  title = "Sign in",
}) => {
  return (
    <View style={styles.innercontainer}>
      <CustomIcon
        Icon={ICONS.backArrow}
        height={24}
        width={24}
        onPress={onBackPress}
      />
      <CustomText fontFamily="bold" fontSize={14} color={COLORS.mediuumPink}>
        {title}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  innercontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default SignInHeader;
