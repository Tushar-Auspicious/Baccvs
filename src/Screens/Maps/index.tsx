import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { CustomText } from "../../Components/CustomText";
import { MapsScreenProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";

const Maps: FC<MapsScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState("people"); // Track selected tab

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <CustomIcon Icon={ICONS.backArrow} height={24} width={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton}>
          <CustomIcon Icon={ICONS.SearchIcon} height={24} width={24} />
          <CustomText fontSize={14}>Search map</CustomText>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBottomListContainer = () => {
    return (
      <View
        style={[
          styles.bottomListContainer,
          {
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "people" && styles.selectedTab,
            ]}
            onPress={() => setSelectedTab("people")}
          >
            <CustomText fontSize={14} fontFamily="medium">
              People
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "event" && styles.selectedTab,
            ]}
            onPress={() => setSelectedTab("event")}
          >
            <CustomText fontSize={14} fontFamily="medium">
              Event
            </CustomText>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          {selectedTab === "people" && (
            <CustomText>Content for Tab 1</CustomText>
          )}
          {selectedTab === "event" && (
            <CustomText>Content for Tab 2</CustomText>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.safeAreaCont}
      >
        {renderHeader()}
        {renderBottomListContainer()}
      </SafeAreaView>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  safeAreaCont: {
    flex: 1,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
    gap: verticalScale(20),
    position: "relative",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(20),
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.blackPink,
    borderRadius: 100,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
    padding: 10,
    backgroundColor: COLORS.blackPink,
    borderRadius: 100,
    flex: 1,
  },
  bottomListContainer: {
    backgroundColor: COLORS.blackPink,
    width: wp(100),
    paddingHorizontal: horizontalScale(16),
    paddingTop: verticalScale(10),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    gap: verticalScale(10),
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(10),
  },
  tabButton: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(20),
  },
  selectedTab: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
  },
  contentContainer: {
    paddingTop: verticalScale(10),
  },
});
