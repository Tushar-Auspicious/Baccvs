import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParams = {
  authStack: NavigatorScreenParams<AuthStackParams>;
  mainStack: NavigatorScreenParams<MainStackParams>;
};

export type AuthStackParams = {
  onBoarding: undefined;
  referral: undefined;
  welcome: undefined;
  register: undefined;
  StartExploring: undefined;
  signIn: undefined;
};

export type MainStackParams = {
  tabs: NavigatorScreenParams<BottomTabParams>;
  notification: undefined;
  searchHome: undefined;
  createPost: undefined;
  postDetails: undefined;
  maps: undefined;
  createStory: undefined;
  settingsStack: NavigatorScreenParams<SettingsStackParams>;
};

export type BottomTabParams = {
  homeTab: undefined;
  datingTab: undefined;
  eventsTab: undefined;
  messagesTab: undefined;
  profileTab: undefined;
};

// Setting Stack
export type SettingsStackParams = {
  settings: undefined;
  accountStack: NavigatorScreenParams<SettingsAccountStackParams>;
  settingNotification: undefined;
  payments: NavigatorScreenParams<SettingsPaymentStackParams>;
  helpSupport: undefined;
};

// Settings Stack > Account
export type SettingsAccountStackParams = {
  account: undefined;
  profileInfoStack: NavigatorScreenParams<SettingsProfileInfoStackParams>;
  passAndSecurity: undefined;
  privacyPrefrences: undefined;
};

// Setting Account > Profile Information
export type SettingsProfileInfoStackParams = {
  profileInfo: undefined;
  changeEmailStack: NavigatorScreenParams<ChangeEmailStackParams>;
  changePhoneNumber: NavigatorScreenParams<ChangePhoneNumberStackParams>;
  forgotPassword: undefined;
};

// Setting Account > Profile Information > Change Email
export type ChangeEmailStackParams = {
  verifyPassword: undefined;
  changeEmail: undefined;
  verifyOtp: undefined;
};

// Setting Account > Profile Information > Change Phone Number
export type ChangePhoneNumberStackParams = {
  changePhoneNumber: undefined;
  phoneVerifyOtp: undefined;
};

// Setting Payment
export type SettingsPaymentStackParams = {
  paymentMethodStack: NavigatorScreenParams<PaymentMethodStackParams>;
  billingHistoryStack: NavigatorScreenParams<BillinhHistoryStackParams>;
  subscriptionManagement: undefined;
};

// Settings Payment > Payment Method
export type PaymentMethodStackParams = {
  paymentMethod: undefined;
  addPaymentMethod: undefined;
};

// Settings Payment > Billing History
export type BillinhHistoryStackParams = {
  billingHistory: undefined;
  recieptDetail: undefined;
};

export type OnBoardingProps = NativeStackScreenProps<
  AuthStackParams,
  "onBoarding"
>;
export type ReferralProps = NativeStackScreenProps<AuthStackParams, "referral">;
export type WelcomeProps = NativeStackScreenProps<AuthStackParams, "welcome">;
export type StepsIndicatorProps = NativeStackScreenProps<
  AuthStackParams,
  "register"
>;
export type StartExploringIndicatorProps = NativeStackScreenProps<
  AuthStackParams & BottomTabParams & RootStackParams,
  "StartExploring"
>;
export type SignInIndicatorProps = NativeStackScreenProps<
  AuthStackParams,
  "signIn"
>;

export type HomeScreenProps = NativeStackScreenProps<
  MainStackParams & BottomTabParams,
  "homeTab"
>;
export type DatingScreenProps = NativeStackScreenProps<
  MainStackParams & BottomTabParams,
  "datingTab"
>;

export type NotificationScreenProps = NativeStackScreenProps<
  MainStackParams & BottomTabParams,
  "notification"
>;

export type SearchHomeScreenProps = NativeStackScreenProps<
  MainStackParams & BottomTabParams,
  "searchHome"
>;

export type MapsScreenProps = NativeStackScreenProps<
  MainStackParams & BottomTabParams,
  "maps"
>;

// Setting Stack
export type SettingsScreenProps = NativeStackScreenProps<
  SettingsStackParams,
  "settings"
>;
export type SettingsAccountProps = NativeStackScreenProps<
  SettingsStackParams & SettingsAccountStackParams,
  "account"
>;
export type SettingsHelpSupportProps = NativeStackScreenProps<
  SettingsStackParams & BottomTabParams,
  "helpSupport"
>;
export type SettingsNotificaitonProps = NativeStackScreenProps<
  SettingsStackParams & BottomTabParams,
  "settingNotification"
>;
export type SettingsPaymentProps = NativeStackScreenProps<
  SettingsStackParams & BottomTabParams,
  "payments"
>;

// Setting Stack > Account
export type ProfileInformationProps = NativeStackScreenProps<
  SettingsProfileInfoStackParams,
  "profileInfo"
>;

export type VerifyPasswordProps = NativeStackScreenProps<
  ChangeEmailStackParams,
  "verifyPassword"
>;

export type ChangeEmailProps = NativeStackScreenProps<
  ChangeEmailStackParams,
  "changeEmail"
>;

export type VerifyEmailOtpProps = NativeStackScreenProps<
  ChangeEmailStackParams,
  "verifyOtp"
>;

// ------------------------------------------------------------------------

export type ChangePhoneNumberProps = NativeStackScreenProps<
  ChangePhoneNumberStackParams,
  "changePhoneNumber"
>;

export type PhoneVerifyOtpProps = NativeStackScreenProps<
  ChangePhoneNumberStackParams,
  "phoneVerifyOtp"
>;

// ------------------------------------------------------------------------

export type CreatePostScreenProps = NativeStackScreenProps<
  MainStackParams & BottomTabParams,
  "createPost"
>;