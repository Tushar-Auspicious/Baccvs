import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import ICONS from "../../Assets/Icons";
import COLORS from "../../Utilities/Colors";
import {
  horizontalScale,
  hp,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";
import CustomIcon from "../CustomIcon";
import { CustomText } from "../CustomText";
import { DataType } from "./data";

type Props = {
  newData: DataType[];
  setNewData: React.Dispatch<React.SetStateAction<DataType[]>>;
  maxVisibleItems: number;
  item: DataType;
  onPress: () => void;
  index: number;
  dataLength: number;
  animatedValue: SharedValue<number>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  onPressCross: () => void;
  onPressChat: () => void;
  onPressSuperLike: () => void;
  onPressLike: () => void;
};

const Card = ({
  maxVisibleItems,
  item,
  index,
  onPress,
  dataLength,
  animatedValue,
  currentIndex,
  setCurrentIndex,
  onPressCross,
  onPressChat,
  onPressSuperLike,
  onPressLike,
}: Props) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);

  const handleRightSwipe = (item: DataType) => {
    console.log("Swiped Right:", item.name);
    // Add logic for right swipe (e.g., Like action)
  };

  const handleLeftSwipe = (item: DataType) => {
    console.log("Swiped Left:", item.name);
    // Add logic for left swipe (e.g., Dislike action)
  };

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      if (currentIndex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1]
        );
      }
    })
    .onEnd((e) => {
      if (currentIndex === index) {
        const isSwipe =
          Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000;
        const isRightSwipe = e.translationX > 0;

        if (isSwipe) {
          // Move card out of view
          translateX.value = withTiming(
            width * (isRightSwipe ? 1 : -1),
            {},
            () => {
              runOnJS(setCurrentIndex)(currentIndex + 1);
            }
          );

          animatedValue.value = withTiming(currentIndex + 1);

          // Trigger swipe actions
          if (isRightSwipe) {
            runOnJS(handleRightSwipe)(item);
          } else {
            runOnJS(handleLeftSwipe)(item);
          }
        } else {
          // Reset position if swipe is not strong enough
          translateX.value = withTiming(0, { duration: 500 });
          animatedValue.value = withTiming(currentIndex, { duration: 500 });
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;
    const isTopCard = index === currentIndex;
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [30, 0]
    );

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1]
    );

    // Alternate rotation: Even indices rotate right, Odd indices rotate left
    const baseRotation = index % 2 === 0 ? 50 : -50;

    // Alternate horizontal translation: Even indices move right, Odd move left
    const baseTranslateX = index % 2 === 0 ? 15 : -15;

    const opacity = interpolate(
      animatedValue.value + maxVisibleItems,
      [index, index + 1],
      [0, 1]
    );

    return {
      transform: [
        // { translateY: currentItem ? 0 : translateY },
        { scaleY: currentItem ? 1 : scale },
        { translateX: isTopCard ? translateX.value : baseTranslateX },
      ],
      opacity: index < currentIndex + maxVisibleItems ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          styles.container,
          { zIndex: dataLength - index },
          animatedStyle,
        ]}
      >
        <TouchableOpacity activeOpacity={0.97} onPress={onPress}>
          <ImageBackground
            source={{ uri: item.image }}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 20 }}
            resizeMode="cover"
          >
            <View
              style={{
                flex: 1,
                paddingVertical: verticalScale(10),
                paddingHorizontal: horizontalScale(30),
                justifyContent: "flex-end",
                gap: verticalScale(5),
              }}
            >
              <CustomText fontFamily="bold" fontSize={24}>
                {item.name}
              </CustomText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <CustomIcon height={15} width={15} Icon={ICONS.MapPinIcon} />
                <CustomText
                  fontFamily="medium"
                  color={COLORS.greyMedium}
                  fontSize={12}
                >
                  {item.distance}
                </CustomText>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: horizontalScale(20),
                  marginTop: verticalScale(10),
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.blackPink,
                    borderRadius: 100,
                    padding: verticalScale(15),
                  }}
                  onPress={onPressCross}
                >
                  <CustomIcon
                    Icon={ICONS.RedCrossIcon}
                    height={18}
                    width={18}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.blackPink,
                    borderRadius: 100,
                    padding: verticalScale(15),
                  }}
                  onPress={onPressChat}
                >
                  <CustomIcon Icon={ICONS.ChatIcon} height={18} width={18} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.blackPink,
                    borderRadius: 100,
                    padding: verticalScale(15),
                  }}
                  onPress={onPressSuperLike}
                >
                  <CustomIcon
                    Icon={ICONS.SuperLikeIcon}
                    height={18}
                    width={18}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.blackPink,
                    borderRadius: 100,
                    padding: verticalScale(15),
                  }}
                  onPress={onPressLike}
                >
                  <CustomIcon Icon={ICONS.LikeIcon} height={18} width={18} />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: wp(85),
    height: hp(45),
    borderRadius: verticalScale(30),
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
});
