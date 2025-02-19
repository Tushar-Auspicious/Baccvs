import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabBar from "../Components/BottomTabBar";
import CreatePost from "../Screens/CreatePost";
import Dating from "../Screens/Dating";
import Events from "../Screens/Events";
import Home from "../Screens/Home";
import Maps from "../Screens/Maps";
import Messages from "../Screens/Messages";
import Notifications from "../Screens/Notifications";
import OnBoarding from "../Screens/OnBoarding";
import Profile from "../Screens/Profile";
import Referral from "../Screens/Referral";
import Register from "../Screens/Register";
import SearchHome from "../Screens/SearchHome";
import SettingsAccount from "../Screens/SettingsAccount";
import SettingsAddPaymentMethod from "../Screens/SettingsAddPaymentMethod";
import SettingsBillingHistory from "../Screens/SettingsBillingHistory";
import SettingsChangeEmail from "../Screens/SettingsChangeEmail";
import SettingsChangePhoneNumber from "../Screens/SettingsChangePhoneNumber";
import SettingsForgotPassword from "../Screens/SettingsForgotPassword";
import SettingsHelpSupport from "../Screens/SettingsHelpSupport";
import SettingsNotification from "../Screens/SettingsNotification";
import SettingsPayment from "../Screens/SettingsPayment";
import SettingsPaymentMethod from "../Screens/SettingsPaymentMethod";
import SettingsProfileInfo from "../Screens/SettingsProfileInfo";
import SettingsRecieptDetail from "../Screens/SettingsRecieptDetail";
import SettingsScreen from "../Screens/SettingsScreen";
import SettingsSubscriptions from "../Screens/SettingsSubscriptions";
import { default as SettingsVerifyOtp } from "../Screens/SettingsVerifyEmailOTP";
import SettingsVerifyPassword from "../Screens/SettingsVerifyPassword";
import SettingsVerifyPhoneOtp from "../Screens/SettingsVerifyPhoneOtp";
import SignIn from "../Screens/SignIn";
import StartExploring from "../Screens/StartExploring";
import Welcome from "../Screens/Welcome";
import {
  AuthStackParams,
  BillinhHistoryStackParams,
  BottomTabParams,
  ChangeEmailStackParams,
  ChangePhoneNumberStackParams,
  MainStackParams,
  PaymentMethodStackParams,
  RootStackParams,
  SettingsAccountStackParams,
  SettingsPaymentStackParams,
  SettingsProfileInfoStackParams,
  SettingsStackParams,
} from "../Typings/route";
import CreateEvent from "../Screens/CreateEvent";
import EventDetails from "../Screens/EventDetails";

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
const PaymentStack = createNativeStackNavigator<SettingsPaymentStackParams>();
const PaymentMethodStack =
  createNativeStackNavigator<PaymentMethodStackParams>();
const BillingStack = createNativeStackNavigator<BillinhHistoryStackParams>();

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
                component={SettingsChangeEmail}
              />
              <ChangeEmailAddressStack.Screen
                name="verifyOtp"
                component={SettingsVerifyOtp}
              />
              <ChangeEmailAddressStack.Screen
                name="verifyPassword"
                component={SettingsVerifyPassword}
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
                component={SettingsChangePhoneNumber}
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
              component={SettingsProfileInfo}
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
        </SettingsAccountStack.Navigator>
      );
    }

    function PaymentsStack() {
      function PaymentMethodstack() {
        return (
          <PaymentMethodStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <PaymentMethodStack.Screen
              name="paymentMethod"
              component={SettingsPaymentMethod}
            />
            <PaymentMethodStack.Screen
              name="addPaymentMethod"
              component={SettingsAddPaymentMethod}
            />
          </PaymentMethodStack.Navigator>
        );
      }

      function BillingHistoryStack() {
        return (
          <BillingStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <BillingStack.Screen
              name="billingHistory"
              component={SettingsBillingHistory}
            />
            <BillingStack.Screen
              name="recieptDetail"
              component={SettingsRecieptDetail}
            />
          </BillingStack.Navigator>
        );
      }

      return (
        <PaymentStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <PaymentStack.Screen name="payment" component={SettingsPayment} />
          <PaymentStack.Screen
            name="paymentMethodStack"
            component={PaymentMethodstack}
          />
          <PaymentStack.Screen
            name="billingHistoryStack"
            component={BillingHistoryStack}
          />
          <PaymentStack.Screen
            name="subscriptionManagement"
            component={SettingsSubscriptions}
          />
        </PaymentStack.Navigator>
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
        <Settings.Screen name="paymentsStack" component={PaymentsStack} />
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
        <Main.Screen name="createEvent" component={CreateEvent} />
        <Main.Screen name="eventDetail" component={EventDetails} />
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
