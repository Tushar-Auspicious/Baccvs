import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CustomText } from "../../../Components/CustomText";
import { horizontalScale, hp, verticalScale } from "../../../Utilities/Metrics";
import CustomIcon from "../../../Components/CustomIcon";
import ICONS from "../../../Assets/Icons";
import COLORS from "../../../Utilities/Colors";

const Step9 = () => {
  const data = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];

  console.log(hp(16));

  const renderItem = ({ item }) => (
    <View style={styles.Imageview}>
      <TouchableOpacity style={styles.addicon}>
        <CustomIcon Icon={ICONS.PlusIcon} height={36} width={36} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <CustomText fontSize={24} fontFamily="bold">
        Add your photos
      </CustomText>
      <View style={{ paddingVertical: 10 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={{
            rowGap: 10,
            marginVertical: 10,
          }}
          columnWrapperStyle={{
            gap: 10,
            justifyContent: "space-between",
          }}
        />
      </View>
    </View>
  );
};

export default Step9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(10),
  },
  Imageview: {
    height: hp(16),
    flex: 1,
    backgroundColor: COLORS.inputColor,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primaryPink,
    borderStyle: "dashed",
    position: "relative",
  },
  addicon: {
    position: "absolute",
    bottom: -7,
    right: -2,
  },
});
