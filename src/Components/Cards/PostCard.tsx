import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
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

export type PostCardProps = {
  id: string;
  userName: string;
  userProfilePic: any;
  createdAt: string;
  description: string;
  videos: any;
  photos: any;
  likesCount: number;
  commentsCount: number;
  repostCount: number;
  onLikePress?: () => {};
  onCommentPress?: () => {};
  onRepostPRess?: () => {};
  onSharePress?: () => {};
  onPress?: () => {};
  onMenuPress?: () => {};
};

const InteractionItem = ({
  icon,
  count,
  onPress,
}: {
  icon: any;
  count: number;
  onPress: () => {};
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

const PostCard: FC<PostCardProps> = ({
  id,
  userName,
  userProfilePic,
  createdAt,
  description,
  videos,
  photos,
  likesCount,
  commentsCount,
  repostCount,
  onLikePress,
  onCommentPress,
  onRepostPRess,
  onSharePress,
  onPress,
  onMenuPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={userProfilePic}
            style={styles.profilePic}
            resizeMode="contain"
          />
          <CustomText fontFamily="bold" fontSize={14}>
            {userName}
          </CustomText>
          <View style={styles.onlineDot} />
          <CustomText fontSize={12}>{createdAt}</CustomText>
        </View>
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <CustomIcon Icon={ICONS.DotMenu} />
        </TouchableOpacity>
      </View>

      <CustomText fontFamily="medium" fontSize={12} color={COLORS.greyLight}>
        {description}
      </CustomText>
      <Image source={{ uri: photos[0] }} style={styles.postImage} />

      <View style={styles.footer}>
        <InteractionItem
          icon={ICONS.PostComment}
          count={commentsCount}
          onPress={onCommentPress!}
        />
        <InteractionItem
          icon={ICONS.PostLike}
          count={likesCount}
          onPress={onLikePress!}
        />
        <InteractionItem
          icon={ICONS.PostRepost}
          count={repostCount}
          onPress={onRepostPRess!}
        />
        <TouchableOpacity onPress={onSharePress} style={styles.shareButton}>
          <CustomIcon Icon={ICONS.PostShare} height={20} width={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PostCard;

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
