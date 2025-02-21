import React, { FC } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ICONS from "../../Assets/Icons";
import { ITagPeople } from "../../Typings/type";
import {
  horizontalScale,
  hp,
  verticalScale,
  wp
} from "../../Utilities/Metrics";
import CustomIcon from "../CustomIcon";
import { CustomText } from "../CustomText";

type DatingUserCardProps = {
  userData: ITagPeople;
  distance?: string;
  onPress: () => void;
};

const DatingUserCard: FC<DatingUserCardProps> = ({
  userData,
  onPress,
  distance,
}) => {
console.log(hp(22));


  return (
    <TouchableOpacity activeOpacity={0.97} onPress={onPress}>
      <ImageBackground
        source={{ uri: userData.avatar }}
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 20 }}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
            paddingVertical: verticalScale(10),
            paddingHorizontal: horizontalScale(5),
            justifyContent: "flex-end",
            gap: verticalScale(5),
          }}
        >
          <CustomText fontFamily="bold">{userData.name}</CustomText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <CustomIcon height={15} width={15} Icon={ICONS.MapPinIcon} />
            <CustomText fontFamily="medium" fontSize={12}>
              {distance} km away
            </CustomText>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default DatingUserCard;

const styles = StyleSheet.create({
  imageBackground: {
    width: wp(30),
    height: hp(22),
  },
});
