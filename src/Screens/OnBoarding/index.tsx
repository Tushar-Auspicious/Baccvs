import React, { FC } from "react";
import {
  Alert,
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../Components/Buttons/CustomButton";
import { OnBoardingProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import {
  deviceWidth,
  horizontalScale,
  responsiveFontSize,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";
import styles from "./styles";
import OnBoardingSlides, { SlideType } from "../../Seeds/OnBoardingSeeds";
import { CustomText } from "../../Components/CustomText";

const OnBoarding: FC<OnBoardingProps> = ({ navigation }) => {
  const flatListRef = React.useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / deviceWidth);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = async () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex === OnBoardingSlides.length) {
      // Alert.alert("ssss");
      navigation.navigate("referral");
    } else {
      const offset = nextSlideIndex * deviceWidth;

      if (flatListRef.current) {
        flatListRef?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(nextSlideIndex);
      }
    }
  };
  const renderSlides = ({
    item,
    index,
  }: {
    item: SlideType;
    index: number;
  }) => {
    return (
      <View key={item.id + index} style={styles.slideContainer}>
        <ImageBackground
          source={item?.image}
          style={styles.slideImage}
          resizeMode="cover"
        >
          {renderIndicators()}
          <View style={styles.slideTextCont}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.subtitle}>{item?.subtitle}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderIndicators = () => {
    return (
      <View style={styles.indicatorCont}>
        {OnBoardingSlides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && styles.indicatorActive,
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={OnBoardingSlides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={renderSlides}
      />
      <View style={{ marginBottom: 50 }}>
        <CustomButton
          title="Get Started"
          onPress={goToNextSlide}
          style={styles.buttonstyle}
        />
        <CustomText
          fontSize={responsiveFontSize(14)}
          fontFamily="bold"
          style={styles.text}
        >
          Already have an account?{` `}
          <Text
            style={{
              fontSize: responsiveFontSize(14),
              fontWeight: "700",
              color: COLORS.primaryPink,
            }}
          >
            Sign in
          </Text>
        </CustomText>
      </View>
    </View>
  );
};

export default OnBoarding;
