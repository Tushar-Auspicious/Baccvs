import React, { forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import CustomButton from "../Buttons/CustomButton";
import { CustomRadio } from "../CustomRadioButton";
import { CustomText } from "../CustomText";

export interface RBSheetRef {
  open: () => void;
  close: () => void;
}

interface CreatePostVisibilityProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const CreatePostVisibility = forwardRef<RBSheetRef, CreatePostVisibilityProps>(
  (props, ref) => {
    const { selectedOption, setSelectedOption } = props;

    // Ensure the ref is typed correctly for RBSheetRef
    const sheetRef = ref as React.MutableRefObject<RBSheetRef | null>;

    return (
      <RBSheet
        ref={ref}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.3)",
          },
          draggableIcon: {
            backgroundColor: COLORS.greyMedium,
          },
          container: {
            backgroundColor: COLORS.appBackground,
            paddingHorizontal: horizontalScale(16),
            paddingBottom: verticalScale(10),
            height: "auto",
          },
        }}
        draggable
        dragOnContent
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View
          style={{
            paddingVertical: verticalScale(10),
            width: "100%",
            gap: verticalScale(20),
          }}
        >
          <CustomText fontFamily="medium">
            Select who can see your post
          </CustomText>
          <View
            style={{
              paddingHorizontal: horizontalScale(10),
              gap: verticalScale(20),
            }}
          >
            <CustomRadio
              selected={selectedOption === "My followers"}
              onSelect={() => setSelectedOption("My followers")}
              label="My followers"
            />
            <CustomRadio
              selected={selectedOption === "My Matches"}
              onSelect={() => setSelectedOption("My Matches")}
              label="My Matches"
            />
            <CustomRadio
              selected={selectedOption === "Sunset Wine & Jazz Night"}
              onSelect={() => setSelectedOption("Sunset Wine & Jazz Night")}
              label="Sunset Wine & Jazz Night"
            />
          </View>
          <CustomButton
            title="Done"
            onPress={() => {
                sheetRef.current && sheetRef.current.close();
            }}
            style={{
              width: "auto",
              paddingVertical: verticalScale(8),
              alignSelf: "flex-end",
            }}
          />
        </View>
      </RBSheet>
    );
  }
);

export default CreatePostVisibility;

const styles = StyleSheet.create({});
