import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";
import React, { FC, useCallback, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CreatePostVisibility from "../../Components/BottomSheets/CreatePostVisibility";
import CustomButton from "../../Components/Buttons/CustomButton";
import PostCardWithId from "../../Components/Cards/PostCardWithId";
import CustomIcon from "../../Components/CustomIcon";
import CustomInput from "../../Components/CustomInput";
import { CustomText } from "../../Components/CustomText";
import { KeyboardAvoidingContainer } from "../../Components/KeyboardAvoidingComponent";
import GalleryModal from "../../Components/Modals/GalleryModal";
import TagPeopleModal from "../../Components/Modals/TagPeopleModal";
import {
  setIsGalleryModalVisible,
  setIsTagPeopleModalVisible,
} from "../../Redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { CreatePostScreenProps } from "../../Typings/route";
import { RBSheetRef } from "../../Typings/type";
import COLORS from "../../Utilities/Colors";
import {
  horizontalScale,
  hp,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";

const CreatePost: FC<CreatePostScreenProps> = ({ navigation, route }) => {
  const refRBSheet = useRef<RBSheetRef>(null);

  const { isFromRepost, repostId } = route.params;

  const dispatch = useAppDispatch();
  const { isGalleryModalVisible, isTagPeopleModalVisible } = useAppSelector(
    (state) => state.modals
  );

  const insets = useSafeAreaInsets();

  const [postDesc, setPostDesc] = useState("");
  const [selectedPostVisibility, setSelectedPostVisibility] = useState<
    string | null
  >(null);

  const [selectedMediaFiles, setSelectedMediaFiles] = useState<
    PhotoIdentifier[]
  >([]);

  const [selectedTagPeople, setSelectedTagPeople] = useState<any>([]);

  const [yourTake, setYourTake] = useState("");

  const toggleGalleryModal = () =>
    dispatch(setIsGalleryModalVisible(!isGalleryModalVisible));

  const toggleTagPeopleModal = () =>
    dispatch(setIsTagPeopleModalVisible(!isTagPeopleModalVisible));

  const toggleSelection = (item: any) => {
    setSelectedMediaFiles((prev) => {
      const exists = prev.find((selected) => selected.node.id === item.node.id);
      if (exists) {
        return prev.filter((selected) => selected.node.id !== item.node.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.appBackground,
        gap: verticalScale(10),
      }}
    >
      <View style={styles.header}>
        <CustomIcon
          onPress={() => navigation.goBack()}
          Icon={ICONS.WhiteCrossIcon}
          height={20}
          width={20}
        />
        <CustomButton
          title={isFromRepost ? "Repost" : "Post"}
          onPress={() => navigation.goBack()}
          style={{ width: "auto", paddingVertical: verticalScale(8) }}
        />
      </View>
      <KeyboardAvoidingContainer>
        <View style={[styles.container, {}]}>
          {/* Header */}

          {/* Input Section */}
          <View style={styles.inputContainer}>
            <View
              style={{
                paddingHorizontal: horizontalScale(16),
              }}
            >
              {isFromRepost ? (
                <CustomInput
                  value={yourTake}
                  onChangeText={setYourTake}
                  placeholder="Add your take"
                  backgroundColor="transparent"
                  multiline
                  baseStyle={{
                    paddingHorizontal: 0,
                  }}
                  inputStyle={{
                    paddingVertical: verticalScale(10),
                    minHeight: isFromRepost ? "auto" : hp(25),
                  }}
                />
              ) : (
                <CustomInput
                  value={postDesc}
                  onChangeText={setPostDesc}
                  multiline
                  textAlignVertical="top"
                  backgroundColor="transparent"
                  placeholder="Share your thoughts, plans, or event experiences..."
                  inputStyle={{
                    paddingVertical: verticalScale(10),
                    minHeight: hp(25),
                  }}
                  baseStyle={{
                    flex: 1, // Make the entire input container expand
                    paddingHorizontal: 0,
                    alignItems: "flex-start",
                    minHeight: 200,
                  }}
                />
              )}
            </View>

            {isFromRepost && repostId && (
              <PostCardWithId id={repostId} isFromRepost={isFromRepost} />
            )}
            <View
              style={{
                paddingHorizontal: horizontalScale(16),
              }}
            >
              <FlatList
                data={selectedMediaFiles}
                horizontal
                contentContainerStyle={{ gap: horizontalScale(5) }}
                renderItem={({ item, index }) => {
                  return (
                    <View
                      style={{
                        position: "relative",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        source={{ uri: item.node.image.uri }}
                        style={{ height: hp(23), width: wp(45) }}
                      />
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => toggleSelection(item)}
                        style={{
                          position: "absolute",
                          top: 5,
                          right: 5,
                          backgroundColor: COLORS.greyMedium,
                          borderRadius: 100,
                          padding: 5,
                        }}
                      >
                        <CustomIcon
                          height={15}
                          width={15}
                          Icon={ICONS.WhiteCrossIcon}
                        />
                      </TouchableOpacity>
                      ‚
                    </View>
                  );
                }}
              />
            </View>

            <View
              style={{
                paddingHorizontal: horizontalScale(16),
              }}
            >
              {selectedMediaFiles.length > 0 && (
                <TouchableOpacity
                  onPress={toggleTagPeopleModal}
                  style={{ paddingVertical: verticalScale(10) }}
                >
                  <CustomText
                    fontFamily="bold"
                    fontSize={14}
                    color={COLORS.mediuumPink}
                  >
                    Tag People
                  </CustomText>
                </TouchableOpacity>
              )}

              {selectedTagPeople.length > 0 && (
                <View>
                  <FlatList
                    data={selectedTagPeople}
                    horizontal
                    contentContainerStyle={{ gap: horizontalScale(5) }}
                    renderItem={({ item, index }) => {
                      return (
                        <View
                          style={{
                            paddingHorizontal: horizontalScale(10),
                            paddingVertical: verticalScale(5),
                            backgroundColor: COLORS.inputColor,
                            borderRadius: 10,
                          }}
                        >
                          <CustomText
                            fontFamily="bold"
                            fontSize={14}
                            color={COLORS.white}
                          >
                            @ {item.name}
                          </CustomText>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          </View>

          {/* Bottom Buttons*/}
        </View>
        <CreatePostVisibility
          ref={refRBSheet}
          selectedOption={selectedPostVisibility}
          setSelectedOption={setSelectedPostVisibility}
        />

        <GalleryModal
          selectedItems={selectedMediaFiles}
          setSelectedItems={setSelectedMediaFiles}
        />
        <TagPeopleModal
          selectedItems={selectedTagPeople}
          setSelectedItems={setSelectedTagPeople}
        />
      </KeyboardAvoidingContainer>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: horizontalScale(16),
        }}
      >
        {!isFromRepost && (
          <TouchableOpacity
            onPress={() => refRBSheet.current?.open()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: horizontalScale(5),
            }}
          >
            <CustomIcon
              onPress={() => navigation.goBack()}
              Icon={ICONS.CreatePOstEyeIcon}
              height={16}
              width={16}
            />
            <CustomText fontFamily="medium" fontSize={14}>
              {selectedPostVisibility
                ? selectedPostVisibility
                : "Who can see this"}
            </CustomText>
          </TouchableOpacity>
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: horizontalScale(10),
          }}
        >
          <CustomIcon
            onPress={toggleGalleryModal}
            Icon={ICONS.GalleryIcon}
            height={24}
            width={24}
          />
          <CustomIcon
            onPress={() => navigation.goBack()}
            Icon={ICONS.WhiteMapPinIcon}
            height={24}
            width={24}
          />
          <CustomIcon
            onPress={() => navigation.goBack()}
            Icon={ICONS.CameraIcon}
            height={24}
            width={24}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    gap: verticalScale(20),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(16),
  },
  inputContainer: {
    flex: 1,
    gap: verticalScale(10),
  },
});
