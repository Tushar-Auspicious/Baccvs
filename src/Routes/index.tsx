import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabBar from "../Components/BottomTabBar";
import ChangeEmail from "../Screens/ChangeEmail";
import ChangePhoneNumber from "../Screens/ChangePhoneNumber";
import CreatePost from "../Screens/CreatePost";
import Dating from "../Screens/Dating";
import Events from "../Screens/Events";
import Home from "../Screens/Home";
import Maps from "../Screens/Maps";
import Messages from "../Screens/Messages";
import Notifications from "../Screens/Notifications";
import OnBoarding from "../Screens/OnBoarding";
import Profile from "../Screens/Profile";
import ProfileInformation from "../Screens/ProfileInformation";
import Referral from "../Screens/Referral";
import Register from "../Screens/Register";
import SearchHome from "../Screens/SearchHome";
import SettingsAccount from "../Screens/SettingsAccount";
import SettingsForgotPassword from "../Screens/SettingsForgotPassword";
import SettingsHelpSupport from "../Screens/SettingsHelpSupport";
import SettingsNotification from "../Screens/SettingsNotification";
import SettingsPayment from "../Screens/SettingsPayment";
import SettingsScreen from "../Screens/SettingsScreen";
import { default as SettingsVerifyOtp } from "../Screens/SettingsVerifyEmailOTP";
import SettingsVerifyPhoneOtp from "../Screens/SettingsVerifyPhoneOtp";
import SignIn from "../Screens/SignIn";
import StartExploring from "../Screens/StartExploring";
import VerifyPassword from "../Screens/VerifyPassword";
import Welcome from "../Screens/Welcome";
import {
  AuthStackParams,
  BottomTabParams,
  ChangeEmailStackParams,
  ChangePhoneNumberStackParams,
  MainStackParams,
  RootStackParams,
  SettingsAccountStackParams,
  SettingsProfileInfoStackParams,
  SettingsStackParams,
} from "../Typings/route";

const RootStack = createNativeStackNavigator<RootStackParams>();
const Auth = createNativeStackNavigator<AuthStackParams>();
const Main = createNativeStackNavigator<MainStackParams>();
const Tabs = createBottomTabNavigator<BottomTabParams>();

const Settings = createNativeStackNavigator<SettingsStackParams>();
const SettingsAccountStack =
  createNativeStackNavigator<SettingsAccountStackParams>();
const AccountProfileInfo =
  createNativeStackNavigator<SettingsProfileInfoStackParams>();
const ChangeEmailAddressStack =
  createNativeStackNavigator<ChangeEmailStackParams>();
const ChangePhoneNumberStack =
  createNativeStackNavigator<ChangePhoneNumberStackParams>();

const Routing = () => {
  function AuthStack() {
    return (
      <Auth.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Auth.Screen name="onBoarding" component={OnBoarding} />
        <Auth.Screen name="referral" component={Referral} />
        <Auth.Screen name="welcome" component={Welcome} />
        <Auth.Screen name="register" component={Register} />
        <Auth.Screen name="StartExploring" component={StartExploring} />
        <Auth.Screen name="signIn" component={SignIn} />
      </Auth.Navigator>
    );
  }

  function TabStack() {
    return (
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Tabs.Screen
          options={{
            title: "Home",
          }}
          name="homeTab"
          component={Home}
        />
        <Tabs.Screen
          options={{
            title: "Dating",
          }}
          name="datingTab"
          component={Dating}
        />
        <Tabs.Screen
          options={{
            title: "Events",
          }}
          name="eventsTab"
          component={Events}
        />
        <Tabs.Screen
          options={{
            title: "Messages",
          }}
          name="messagesTab"
          component={Messages}
        />
        <Tabs.Screen
          options={{
            title: "Profile",
          }}
          name="profileTab"
          component={Profile}
        />
      </Tabs.Navigator>
    );
  }

  function SettingStack() {
    function SettingAccountStack() {
      function AccountProfileInfoStack() {
        function ChangeEmailStack() {
          return (
            <ChangeEmailAddressStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <ChangeEmailAddressStack.Screen
                name="changeEmail"
                component={ChangeEmail}
              />
              <ChangeEmailAddressStack.Screen
                name="verifyOtp"
                component={SettingsVerifyOtp}
              />
              <ChangeEmailAddressStack.Screen
                name="verifyPassword"
                component={VerifyPassword}
              />
            </ChangeEmailAddressStack.Navigator>
          );
        }

        function ChangePhoneStack() {
          return (
            <ChangePhoneNumberStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <ChangePhoneNumberStack.Screen
                name="changePhoneNumber"
                component={ChangePhoneNumber}
              />
              <ChangePhoneNumberStack.Screen
                name="phoneVerifyOtp"
                component={SettingsVerifyPhoneOtp}
              />
            </ChangePhoneNumberStack.Navigator>
          );
        }

        return (
          <AccountProfileInfo.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <AccountProfileInfo.Screen
              name="profileInfo"
              component={ProfileInformation}
            />

            <AccountProfileInfo.Screen
              name="changeEmailStack"
              component={ChangeEmailStack}
            />
            <AccountProfileInfo.Screen
              name="changePhoneNumber"
              component={ChangePhoneStack}
            />
            <AccountProfileInfo.Screen
              name="forgotPassword"
              component={SettingsForgotPassword}
            />
          </AccountProfileInfo.Navigator>
        );
      }

      return (
        <SettingsAccountStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <SettingsAccountStack.Screen
            name="account"
            component={SettingsAccount}
          />
          <SettingsAccountStack.Screen
            name="profileInfoStack"
            component={AccountProfileInfoStack}
          />
          {/* <SettingsAccountStack.Screen name="privacyPrefrences" component={SettingsAccountStack} /> */}
          {/* <SettingsAccountStack.Screen name="passAndSecurity" component={SettingsPayment} /> */}

          {/* <Main.Screen name="profileInfo" component={ProfileInformation} />
          <Main.Screen name="verifyPassword" component={VerifyPassword} />
          <Main.Screen name="changeEmail" component={ChangeEmail} />
          <Main.Screen name="verifyOtp" component={VerifyOtp} />
          <Main.Screen name="changePhoneNumber" component={ChangePhoneNumber} />
          <Main.Screen name="phoneVerifyOtp" component={PhoneVerifyOtp} /> */}
        </SettingsAccountStack.Navigator>
      );
    }

    return (
      <Settings.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Settings.Screen name="settings" component={SettingsScreen} />
        <Settings.Screen name="accountStack" component={SettingAccountStack} />
        <Settings.Screen name="payments" component={SettingsPayment} />
        <Settings.Screen name="helpSupport" component={SettingsHelpSupport} />
        <Settings.Screen
          name="settingNotification"
          component={SettingsNotification}
        />
      </Settings.Navigator>
    );
  }

  function MainStack() {
    return (
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Main.Screen name="tabs" component={TabStack} />
        <Main.Screen name="notification" component={Notifications} />
        <Main.Screen name="searchHome" component={SearchHome} />
        <Main.Screen name="maps" component={Maps} />
        <Main.Screen name="settingsStack" component={SettingStack} />
        <Main.Screen name="createPost" component={CreatePost} />
      </Main.Navigator>
    );
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="mainStack" component={MainStack} />
      <RootStack.Screen name="authStack" component={AuthStack} />
    </RootStack.Navigator>
  );
};

export default Routing;
