import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC } from "react";
import {
  horizontalScale,
  hp,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";
import { CustomText } from "../CustomText";
import CustomIcon from "../CustomIcon";
import ICONS from "../../Assets/Icons";
import COLORS from "../../Utilities/Colors";

type EventListCardrops = {
  imageUrl: string;
  title: string;
  distance: string;
  date: string;
  time: string;
  address: string;
  onPress: () => void;
};

const EventListCard: FC<EventListCardrops> = ({
  imageUrl,
  title,
  distance,
  date,
  time,
  address,
  onPress,
}) => {
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
          <CustomText fontSize={12}>{distance}</CustomText>
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
