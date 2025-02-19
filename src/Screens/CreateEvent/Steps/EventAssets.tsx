import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { createThumbnail } from "react-native-create-thumbnail";
import ICONS from "../../../Assets/Icons";
import ImagePickerOptionSheet, {
  RBSheetRef,
} from "../../../Components/BottomSheets/ImagePickerOptionSheet";
import CustomButton from "../../../Components/Buttons/CustomButton";
import CustomIcon from "../../../Components/CustomIcon";
import { CustomText } from "../../../Components/CustomText";
import COLORS from "../../../Utilities/Colors";
import { hp, verticalScale, wp } from "../../../Utilities/Metrics";

type EventAssetsProps = {
  coverPhoto: any;
  setCoverPhoto: React.Dispatch<React.SetStateAction<any>>;
  selectedVideos: any[];
  setSelectedVideos: React.Dispatch<React.SetStateAction<any[]>>;
  editingVideoIndex: number | null;
  setEditingVideoIndex: React.Dispatch<React.SetStateAction<number | null>>;
  handleNext: () => void;
};

const EventAssets: React.FC<EventAssetsProps> = ({
  coverPhoto,
  setCoverPhoto,
  selectedVideos,
  setSelectedVideos,
  editingVideoIndex,
  setEditingVideoIndex,
  handleNext,
}) => {
  const refRBSheet = useRef<RBSheetRef>(null);

  const [pickerType, setPickerType] = useState<"cover" | "video">("cover");

  const handleImageSelection = async (res: any) => {
    if (pickerType === "cover") {
      setCoverPhoto(res.assets[0]);
    } else if (pickerType === "video") {
      const newVideo = await Promise.all(
        res.assets.map(async (asset: any) => {
          try {
            const thumbnail = await createThumbnail({
              url: asset.uri,
              timeStamp: 100, // Time in milliseconds, here it's 10 seconds
              format: "png",
            });
            return {
              ...asset,
              thumbnail: thumbnail.path,
            };
          } catch (error) {
            console.error("Error creating thumbnail:", error);
            return asset; // Return the asset without thumbnail if there's an error
          }
        })
      );

      if (editingVideoIndex !== null) {
        // If we're editing an existing video, replace it
        const updatedVideos = [...selectedVideos];
        updatedVideos[editingVideoIndex] = newVideo[0]; // Assuming only one video is selected for edit
        setSelectedVideos(updatedVideos);
        setEditingVideoIndex(null); // Reset editing state
      } else {
        // If adding a new video, append it to the list
        setSelectedVideos([...selectedVideos, ...newVideo]);
      }
    }

    refRBSheet.current?.close();
  };

  const renderVideoPlaceHolder = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    const isVideoSelected = index < selectedVideos.length;

    const handleDeleteVideo = (index: number) => {
      const updatedVideos = selectedVideos.filter((_, i) => i !== index);
      setSelectedVideos(updatedVideos);
    };

    return (
      <View
        style={[
          styles.videoContainer,
          {
            backgroundColor: isVideoSelected ? COLORS.voilet : COLORS.black,
          },
        ]}
      >
        {isVideoSelected ? (
          <Image
            source={{
              uri: selectedVideos[index].thumbnail
                ? selectedVideos[index].thumbnail
                : selectedVideos[index].uri,
            }}
            style={styles.videoImage}
            resizeMode="cover"
          />
        ) : (
          <TouchableOpacity style={styles.videoEditIconPosition}>
            <CustomIcon
              onPress={() => {
                setPickerType("video");
                setEditingVideoIndex(null);
                refRBSheet.current?.open();
              }}
              Icon={ICONS.PlusIcon}
              height={36}
              width={36}
            />
          </TouchableOpacity>
        )}
        {isVideoSelected && (
          <TouchableOpacity style={styles.videoEditIconPosition}>
            <CustomIcon
              onPress={() => {
                setPickerType("video");
                setEditingVideoIndex(index);
                refRBSheet.current?.open();
              }}
              Icon={ICONS.BorderedEditIcon}
              height={36}
              width={36}
            />
          </TouchableOpacity>
        )}

        {isVideoSelected && (
          <TouchableOpacity style={styles.videoDeleteIconPosition}>
            <CustomIcon
              onPress={() => handleDeleteVideo(index)}
              Icon={ICONS.DeleteIcon}
              height={36}
              width={36}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.container}
      >
        <View style={styles.contentGap}>
          <View style={styles.row}>
            <CustomIcon height={16} width={16} Icon={ICONS.GalleryIcon} />
            <CustomText fontFamily="medium" fontSize={14}>
              Select a cover photo
            </CustomText>
          </View>

          <View style={styles.photoContainer}>
            {coverPhoto && (
              <Image
                source={{ uri: coverPhoto.uri }}
                style={styles.coverImage}
                resizeMode="cover"
              />
            )}
            <TouchableOpacity style={styles.editIconPosition}>
              <CustomIcon
                onPress={() => {
                  setPickerType("cover");
                  refRBSheet.current?.open();
                }}
                Icon={coverPhoto ? ICONS.BorderedEditIcon : ICONS.PlusIcon}
                height={36}
                width={36}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentGap}>
          <View style={styles.row}>
            <CustomIcon height={16} width={16} Icon={ICONS.GalleryIcon} />
            <CustomText fontFamily="medium" fontSize={14}>
              Add videos
            </CustomText>
          </View>

          <View>
            <FlatList
              data={Array(6).fill(0)}
              renderItem={renderVideoPlaceHolder}
              numColumns={3}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.flatListContent}
              columnWrapperStyle={styles.columnWrapper}
            />
          </View>
        </View>
      </ScrollView>

      <CustomButton title="Preview" isFullWidth onPress={handleNext} />

      <ImagePickerOptionSheet
        ref={refRBSheet}
        onImageSelected={handleImageSelection}
        type={pickerType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    width: "100%",
    flex: 1,
  },
  scrollContent: {
    paddingVertical: verticalScale(10),
    gap: verticalScale(20),
    marginBottom: 10,
    flex: 1,
  },
  contentGap: {
    gap: verticalScale(10),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: verticalScale(10),
  },
  photoContainer: {
    borderStyle: "dashed",
    borderColor: COLORS.primaryPink,
    borderWidth: 2,
    height: hp(24),
    width: wp(90),
    backgroundColor: COLORS.voilet,
    borderRadius: 10,
    position: "relative",
  },
  coverImage: {
    height: "100%",
    width: "100%",
  },
  videoContainer: {
    borderStyle: "dashed",
    borderColor: COLORS.primaryPink,
    borderWidth: 2,
    height: hp(20),
    flex: 1,
    backgroundColor: COLORS.voilet,
    borderRadius: 10,
    position: "relative",
  },
  videoImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  editIconPosition: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "50%" }],
    zIndex: 100,
  },
  videoEditIconPosition: {
    position: "absolute",
    bottom: 0,
    right: -10,
    transform: [{ translateY: "50%" }],
    zIndex: 100,
  },
  videoDeleteIconPosition: {
    position: "absolute",
    bottom: 0,
    right: 25,
    transform: [{ translateY: "50%" }],
    zIndex: 100,
  },
  flatListContent: {
    gap: verticalScale(10),
    paddingBottom: verticalScale(15),
    paddingHorizontal: 6,
  },
  columnWrapper: {
    flex: 1,
    flexWrap: "wrap",
    gap: 10,
  },
});

export default EventAssets;
