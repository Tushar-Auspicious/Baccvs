import React, { Dispatch, FC, SetStateAction } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomButton from "../../../Components/Buttons/CustomButton";
import { CustomText } from "../../../Components/CustomText";
import COLORS from "../../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../../Utilities/Metrics";

type EventTicketingProps = {
  acitveTab: boolean;
  setActiveTab: Dispatch<SetStateAction<boolean>>;
  handleNext: () => void;
};

const EventTicketing: FC<EventTicketingProps> = ({
  acitveTab,
  setActiveTab,
  handleNext,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CustomText fontFamily="bold" fontSize={20}>
          Event ticketing
        </CustomText>

        <View style={styles.buttonWrapper}>
          <CustomText fontFamily="medium" fontSize={14}>
            Is this a free event?
          </CustomText>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setActiveTab(true)}
              style={[styles.button, acitveTab && styles.selectedButton]}
            >
              <CustomText fontFamily="bold" fontSize={14}>
                Yes
              </CustomText>
            </Pressable>
            <Pressable
              onPress={() => setActiveTab(false)}
              style={[styles.button, !acitveTab && styles.selectedButton]}
            >
              <CustomText fontFamily="bold" fontSize={14}>
                No
              </CustomText>
            </Pressable>
          </View>

          {!acitveTab && (
            <View style={styles.privateTabWrapper}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                <CustomText color={COLORS.mediuumPink} fontFamily="bold">
                  Add a ticket
                </CustomText>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <CustomButton title="Next" isFullWidth onPress={handleNext} />
      </View>
    </View>
  );
};

export default EventTicketing;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    width: "100%",
    paddingVertical: verticalScale(10),
    gap: verticalScale(20),
    flex: 1,
  },
  infoContainer: {
    backgroundColor: COLORS.orange,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderRadius: 10,
  },
  infoText: {
    lineHeight: 16,
  },
  buttonWrapper: {
    flex: 1,
    gap: verticalScale(10),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },
  button: {
    flex: 1,
    paddingVertical: verticalScale(16),
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
  },
  selectedButton: {
    borderColor: COLORS.mediuumPink,
  },
  privateTabWrapper: {
    gap: verticalScale(20),
    flex: 1,
  },
  flatListContent: {
    rowGap: verticalScale(20),
  },
  listCont: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: horizontalScale(15),
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  personName: {
    flex: 1,
  },
});
