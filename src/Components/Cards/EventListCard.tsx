import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ICONS from "../../Assets/Icons";
import { IEvents } from "../../Typings/type";
import COLORS from "../../Utilities/Colors";
import {
  horizontalScale,
  hp,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";
import CustomIcon from "../CustomIcon";
import { CustomText } from "../CustomText";

type EventListCardrops = {
  eventData: IEvents;
  onPress: () => void;
  distance: string;
};

const EventListCard: FC<EventListCardrops> = ({
  eventData,
  onPress,
  distance,
}) => {
  const { address, date, imageUrl, latitude, longitude, time, title } =
    eventData;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {}}
      style={styles.cardContainer}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View
        style={{
          paddingVertical: verticalScale(16),
          paddingHorizontal: horizontalScale(16),
          gap: verticalScale(5),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: verticalScale(5),
          }}
        >
          <CustomText fontFamily="bold" fontSize={14}>
            {title}
          </CustomText>
          <CustomText fontSize={12}>{distance} km away</CustomText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: horizontalScale(10),
          }}
        >
          <CustomIcon Icon={ICONS.CalendarIcon} height={15} width={15} />
          <CustomText fontSize={12} color={COLORS.greyMedium}>
            {date}
          </CustomText>
          <CustomIcon Icon={ICONS.ClockIcon} height={15} width={15} />
          <CustomText fontSize={12} color={COLORS.greyMedium}>
            {time}
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: horizontalScale(10),
          }}
        >
          <CustomIcon Icon={ICONS.MapPinIcon} height={15} width={15} />
          <CustomText fontSize={12} color={COLORS.greyMedium}>
            {address}
          </CustomText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventListCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: verticalScale(10),
    borderRadius: verticalScale(10),
    alignSelf: "center",
    gap: horizontalScale(10),
    width: wp(75),
  },
  image: {
    height: hp(18),
    width: "100%",
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: verticalScale(5),
  },
});
