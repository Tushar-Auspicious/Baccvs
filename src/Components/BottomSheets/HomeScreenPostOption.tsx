import React, { forwardRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import ICONS from "../../Assets/Icons";
import { RBSheetRef } from "../../Typings/type";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import CustomIcon from "../CustomIcon";
import { CustomText } from "../CustomText";

type HomeScreenPostOptionProps = {
  handleRepost: () => void;
  handleRepostWithYourTake: () => void;
};

const HomeScreenPostOption = forwardRef<RBSheetRef, HomeScreenPostOptionProps>(
  (props, ref) => {
    const { handleRepost, handleRepostWithYourTake } = props;

    return (
      <RBSheet
        ref={ref}
        useNativeDriver={false}
        customStyles={{
          wrapper: styles.wrapper,
          draggableIcon: styles.draggableIcon,
          container: styles.container,
        }}
        draggable
        dragOnContent
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View style={styles.content}>
          <TouchableOpacity
            onPress={handleRepostWithYourTake}
            style={styles.optionButton}
          >
            <CustomIcon Icon={ICONS.CalendarIcon} />
            <CustomText fontFamily="medium">Repost with your take</CustomText>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRepost} style={styles.optionButton}>
            <CustomIcon Icon={ICONS.CalendarIcon} />
            <CustomText fontFamily="medium">Repost</CustomText>
          </TouchableOpacity>
        </View>
      </RBSheet>
    );
  }
);

export default HomeScreenPostOption;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
  },
  draggableIcon: {
    backgroundColor: COLORS.greyMedium,
  },
  container: {
    backgroundColor: COLORS.appBackground,
    paddingHorizontal: horizontalScale(16),
    paddingBottom: verticalScale(10),
    height: "auto",
  },
  content: {
    paddingVertical: verticalScale(20),
    width: "100%",
    gap: verticalScale(20),
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },
});
