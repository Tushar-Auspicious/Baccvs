import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import { setIsMainMenuVisible } from "../../Redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import CustomIcon from "../CustomIcon";
import { CustomText } from "../CustomText";

const MainMenuModal = () => {
  const dispatch = useAppDispatch();
  const { isMainMenuVisible } = useAppSelector((state) => state.modals);
  const insets = useSafeAreaInsets();

  const closeModal = () => dispatch(setIsMainMenuVisible(false));

  const renderTopButtons = (icon: any, title: string, onPress: () => void) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.topButton}>
        <CustomIcon Icon={icon} height={24} width={24} />
        <CustomText fontFamily="medium" fontSize={14}>
          {title}
        </CustomText>
      </TouchableOpacity>
    );
  };

  const renderBars = (icon: any, title: string, onPress: () => void) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.bar}
      >
        <CustomIcon Icon={icon} height={24} width={24} />
        <CustomText fontFamily="medium" style={styles.barText}>
          {title}
        </CustomText>
        <CustomIcon Icon={ICONS.RightArrowIcon} height={16} width={16} />
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      onBackdropPress={() => {}}
      avoidKeyboard={true}
      style={styles.mainCont}
      isVisible={isMainMenuVisible}
      backdropOpacity={0.8}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop:
              Platform.OS === "android"
                ? verticalScale(16)
                : insets.top + verticalScale(16),
            paddingBottom:
              Platform.OS === "android"
                ? verticalScale(16)
                : insets.bottom + verticalScale(16),
          },
        ]}
      >
        <CustomIcon onPress={closeModal} Icon={ICONS.WhiteCrossIcon} />

        <View style={styles.topButtonsContainer}>
          {renderTopButtons(ICONS.YellowPlus, "Make a post", () => {})}
          {renderTopButtons(ICONS.CalendarWithPlus, "Crearte event", () => {})}
        </View>

        <View style={styles.barsContainer}>
          {renderBars(ICONS.CouponIcon, "Tickets", () => {})}
          {renderBars(ICONS.BubbleIcon, "Insights(Professionals)", () => {})}
          {renderBars(ICONS.FilterIcon, "Filter", () => {})}
          {renderBars(ICONS.VIPPremiumIcon, "Premium", () => {})}
          {renderBars(ICONS.GiftIcon, "Referral", () => {})}
          {renderBars(ICONS.FeedbackIcon, "Feedback", () => {})}
          {renderBars(ICONS.YellowSettingsIcon, "Settings", () => {})}
          {renderBars(ICONS.QRScannerIcon, "Scan ticket", () => {})}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <CustomIcon
            height={16}
            width={16}
            onPress={closeModal}
            Icon={ICONS.LogoutBoxIcon}
          />
          <CustomText fontFamily="medium">Logout </CustomText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MainMenuModal;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: COLORS.appBackground,
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
    justifyContent: "space-between",
  },
  topButtonsContainer: {
    flexDirection: "row",
    gap: horizontalScale(10),
  },
  topButton: {
    backgroundColor: COLORS.darkVoilet,
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(10),
    paddingVertical: verticalScale(24),
    flex: 1,
    borderRadius: 10,
  },
  barsContainer: {
    gap: verticalScale(10),
  },
  bar: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: verticalScale(10),
    gap: horizontalScale(10),
  },
  barText: {
    flex: 1,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: horizontalScale(5),
    alignSelf: "center",
  },
});
