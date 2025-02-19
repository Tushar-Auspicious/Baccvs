import React, { FC } from "react";
import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import IMAGES from "../../Assets/Images";
import { CustomText } from "../../Components/CustomText";
import { EventDetailScreenProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import {
  horizontalScale,
  hp,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";

const EventDetails: FC<EventDetailScreenProps> = ({ navigation, route }) => {
  const { isFromCreateEvent } = route.params;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={IMAGES.dummyEventImage}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]} // From transparent at top to dark at bottom
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <SafeAreaView style={styles.safeAreaCont}>
            {isFromCreateEvent && (
              <LinearGradient
                colors={[
                  "rgba(255,255,255,0.2)", // 20% opacity white at 0%
                  "rgba(255,255,255,0.5)", // 50% opacity white at 100%
                ]}
                start={{ x: 0, y: 0 }} // Start from top-left
                end={{ x: 1, y: 1 }}
                style={{
                  borderRadius: 30,
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    paddingVertical: verticalScale(7),
                    paddingHorizontal: horizontalScale(10),
                  }}
                >
                  <CustomText fontFamily="medium" fontSize={10}>
                    Preview Event
                  </CustomText>
                </View>
              </LinearGradient>
            )}
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: horizontalScale(16),
        }}
      >
        <CustomText fontSize={20} fontFamily="bold">
          Speed Dating & Trivia Night
        </CustomText>
      </View>
    </ScrollView>
  );
};

export default EventDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  imageBackground: {
    height: hp(40),
    width: wp(100),
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeAreaCont: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
    width: "100%",
    alignItems: "center",
  },
});
