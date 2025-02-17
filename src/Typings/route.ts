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
  account: NavigatorScreenParams<SettingsAccountStackParams>;
  settingNotification: undefined;
  payments: NavigatorScreenParams<SettingsPaymentStackParams>;
  helpSupport: undefined;
};

// Settings Stack > Account
export type SettingsAccountStackParams = {
  profileInfo: NavigatorScreenParams<SettingsProfileInfoStackParams>;
  passAndSecurity: undefined;
  privacyPrefrences: undefined;
};

// Setting Account > Profile Information
export type SettingsProfileInfoStackParams = {
  changeEmailStack: NavigatorScreenParams<ChangeEmail>;
  changePhoneNumber: NavigatorScreenParams<ChangePhoneNumber>;
  forgotPassword: undefined;
};

// Setting Account > Profile Information > Change Email
export type ChangeEmail = {
  verifyPassword: undefined;
  changeEmail: undefined;
  verifyOtp: undefined;
};

// Setting Account > Profile Information > Change Phone Number
export type ChangePhoneNumber = {
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
  AuthStackParams,
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

export type SettingsScreenProps = NativeStackScreenProps<
  SettingsStackParams & MainStackParams & BottomTabParams,
  "settings"
>;

export type AccountScreenProps = NativeStackScreenProps<
  SettingsStackParams & BottomTabParams,
  "account"
>;

export type ProfileInformationProps = NativeStackScreenProps<
  SettingsAccountStackParams & BottomTabParams,
  "profileInfo"
>;

export type VerifyPasswordProps = NativeStackScreenProps<
  ChangeEmail & BottomTabParams,
  "verifyPassword"
>;

export type ChangeEmailProps = NativeStackScreenProps<
  ChangeEmail & BottomTabParams,
  "changeEmail"
>;

export type VerifyOtpProps = NativeStackScreenProps<
  ChangeEmail & BottomTabParams,
  "verifyOtp"
>;

export type ChangePhoneNumberProps = NativeStackScreenProps<
  ChangePhoneNumber & BottomTabParams,
  "changePhoneNumber"
>;

export type PhoneVerifyOtpProps = NativeStackScreenProps<
  ChangePhoneNumber & BottomTabParams,
  "phoneVerifyOtp"
>;