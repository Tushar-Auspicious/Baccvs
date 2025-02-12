import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Card from "./Card";
import { CustomText } from "../CustomText";
import { hp, verticalScale } from "../../Utilities/Metrics";

type CardSwiperProps = {
  data: any[]; // Accepts an array of card data
};

const CardSwiper: FC<CardSwiperProps> = ({ data }) => {
  const [newData, setNewData] = useState([...data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const MAX = 4;

  return (
    <GestureHandlerRootView style={{}}>
      <View
        style={[
          styles.cardContainer,
          {
            minHeight: currentIndex < newData.length ? hp(35) : "auto",
          },
        ]}
      >
        {currentIndex < newData.length ? (
          newData.map((item, index) => {
            if (index > currentIndex + MAX || index < currentIndex) {
              return null;
            }
            return (
              <Card
                newData={newData}
                setNewData={setNewData}
                maxVisibleItems={MAX}
                item={item}
                index={index}
                onPress={() => {
                  console.log("sssss");
                }}
                dataLength={newData.length}
                animatedValue={animatedValue}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                key={index}
                onPressCross={() => {}}
                onPressChat={() => {}}
                onPressSuperLike={() => {}}
                onPressLike={() => {}}
              />
            );
          })
        ) : (
          <View style={styles.noMoreCards}>
            <CustomText fontFamily="bold" fontSize={24}>
              No more cards!
            </CustomText>
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default CardSwiper;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(50),
  },
  noMoreCards: {
    justifyContent: "center",
    alignItems: "center",
  },
});
