import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import ICONS from "../../Assets/Icons";
import dummyPosts from "../../Seeds/POstData";
import COLORS from "../../Utilities/Colors";
import {
  horizontalScale,
  hp,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";
import CustomIcon from "../CustomIcon";
import { CustomText } from "../CustomText";

const InteractionItem = ({
  icon,
  count,
  onPress,
}: {
  icon: any;
  count: number;
  onPress: () => void;
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.interactionItem}
  >
    <CustomIcon Icon={icon} height={20} width={20} />
    <CustomText fontFamily="medium" fontSize={12} color={COLORS.greyMedium}>
      {count}
    </CustomText>
  </TouchableOpacity>
);

export type PostCardWithIdProps = {
  id: string;
  isFromRepost?: boolean;
  onPress?: () => void;
};

const PostCardWithId: FC<PostCardWithIdProps> = ({
  id,
  isFromRepost,
  onPress,
}) => {
  const data = dummyPosts.find((item) => item.id === id)!;

  return (
    <TouchableOpacity
      onPress={() => {
        !isFromRepost && onPress ? onPress() : null;
      }}
      activeOpacity={isFromRepost ? 1 : 0.8}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={data?.userProfilePic}
            style={styles.profilePic}
            resizeMode="contain"
          />
          <CustomText fontFamily="bold" fontSize={14}>
            {data?.userName}
          </CustomText>
          <View style={styles.onlineDot} />
          <CustomText fontSize={12}>{data?.createdAt}</CustomText>
        </View>
        {!isFromRepost && (
          <TouchableOpacity
            onPress={data?.onMenuPress}
            style={styles.menuButton}
          >
            <CustomIcon Icon={ICONS.DotMenu} />
          </TouchableOpacity>
        )}
      </View>

      <CustomText fontFamily="medium" fontSize={12} color={COLORS.greyLight}>
        {data?.description}
      </CustomText>
      <Image source={{ uri: data?.photos[0] }} style={styles.postImage} />

      {!isFromRepost && (
        <View style={styles.footer}>
          <InteractionItem
            icon={ICONS.PostComment}
            count={data?.commentsCount}
            onPress={data?.onCommentPress!}
          />
          <InteractionItem
            icon={ICONS.PostLike}
            count={data?.likesCount}
            onPress={data?.onLikePress!}
          />
          <InteractionItem
            icon={ICONS.PostRepost}
            count={data?.repostCount}
            onPress={data?.onRepostPRess!}
          />
          <TouchableOpacity
            onPress={data?.onSharePress}
            style={styles.shareButton}
          >
            <CustomIcon Icon={ICONS.PostShare} height={20} width={20} />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PostCardWithId;

const styles = StyleSheet.create({
  container: {
    padding: verticalScale(20),
    width: wp(100),
    gap: verticalScale(10),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(5),
  },
  profilePic: {
    height: 32,
    width: 32,
  },
  onlineDot: {
    height: 3,
    width: 3,
    borderRadius: 100,
    backgroundColor: COLORS.greyMedium,
  },
  menuButton: {
    paddingHorizontal: horizontalScale(10),
  },
  postImage: {
    height: hp(26),
    borderRadius: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  interactionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(5),
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(5),
  },
});
