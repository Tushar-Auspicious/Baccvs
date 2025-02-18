import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC } from "react";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { CustomText } from "../../Components/CustomText";
import COLORS from "../../Utilities/Colors";
import { DatingScreenProps } from "../../Typings/route";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { setIsMainMenuVisible } from "../../Redux/slices/modalSlice";

const Dating: FC<DatingScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { isMainMenuVisible } = useAppSelector((state) => state.modals);

  const newMatches = [
    {
      id: "1",
      name: "Jerome",
      image: require("../../Assets/Images/slide1.png"),
      icon: ICONS.Fire,
    },
    {
      id: "2",
      name: "Marilyn",
      image: require("../../Assets/Images/randomUser1.png"),
      icon: ICONS.HurtIcon,
    },
    {
      id: "3",
      name: "Helen",
      image: require("../../Assets/Images/randomUser2.png"),
      icon: ICONS.StarIcon,
    },
    {
      id: "4",
      name: "Lida",
      image: require("../../Assets/Images/slide2.png"),
      icon: ICONS.Fire,
    },
    {
      id: "5",
      name: "Angela",
      image: require("../../Assets/Images/slide1.png"),
      icon: ICONS.HurtIcon,
    },
    {
      id: "6",
      name: "Esther",
      image: require("../../Assets/Images/randomUser1.png"),
      icon: ICONS.StarIcon,
    },
    {
      id: "7",
      name: "Regina",
      image: require("../../Assets/Images/randomUser2.png"),
      icon: ICONS.Fire,
    },
    {
      id: "8",
      name: "Helen",
      image: require("../../Assets/Images/slide1.png"),
      icon: ICONS.HurtIcon,
    },
    {
      id: "9",
      name: "Marilyn",
      image: require("../../Assets/Images/slide2.png"),
      icon: ICONS.StarIcon,
    },
  ];

  const renderItem = ({ item }) => (
    <View
      style={{
        height: 80,
        justifyContent: "center",
        paddingHorizontal: horizontalScale(10),
      }}
    >
      <ImageBackground
        borderRadius={100}
        source={item.image}
        style={{
          width: 40,
          height: 40,
        }}
      >
        <View style={{ position: "absolute", bottom: 3, right: 0 }}>
          <CustomIcon Icon={item.icon} height={12} width={12} />
        </View>
      </ImageBackground>
      <CustomText
        fontSize={12}
        fontFamily="regular"
        style={{ marginTop: verticalScale(5), textAlign: "center" }}
      >
        {item.name}
      </CustomText>
    </View>
  );

  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: verticalScale(10),
        }}
      >
        <View style={{ flexDirection: "row", gap: horizontalScale(10) }}>
          <CustomIcon Icon={ICONS.AppLogo} />
          <CustomText
            fontFamily="bold"
            color={COLORS.primaryPink}
            fontSize={20}
          >
            Baccvs
          </CustomText>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: horizontalScale(20),
            alignItems: "center",
          }}
        >
          <CustomIcon
            Icon={ICONS.PurpleIcon}
            onPress={() => navigation.navigate("searchHome")}
          />
          <CustomIcon
            Icon={ICONS.filtericon}
            height={20}
            width={20}
            onPress={() => {}}
          />
          <CustomIcon Icon={ICONS.MenuIcon} onPress={() => {}} />
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <CustomText fontFamily="medium" fontSize={16}>
            New matches
          </CustomText>
          <CustomText fontFamily="bold" fontSize={14}>
            See all
          </CustomText>
        </View>

        <FlatList
          data={newMatches}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </SafeAreaView>
    </View>
  );
};

export default Dating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  safeAreaCont: {
    flex: 1,
    paddingVertical: verticalScale(16),
    gap: verticalScale(20),
  },
});
