import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabBar from "../Components/BottomTabBar";
import AccountScreen from "../Screens/AccountScreen";
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
import PhoneVerifyOtp from "../Screens/PhoneVerifyOtp";
import Profile from "../Screens/Profile";
import ProfileInformation from "../Screens/ProfileInformation";
import Referral from "../Screens/Referral";
import Register from "../Screens/Register";
import SearchHome from "../Screens/SearchHome";
import SettingsScreen from "../Screens/SettingsScreen";
import SignIn from "../Screens/SignIn";
import StartExploring from "../Screens/StartExploring";
import VerifyOtp from "../Screens/VerifyOtp";
import VerifyPassword from "../Screens/VerifyPassword";
import Welcome from "../Screens/Welcome";
import {
  AuthStackParams,
  BottomTabParams,
  MainStackParams,
  RootStackParams,
} from "../Typings/route";

const RootStack = createNativeStackNavigator<RootStackParams>();
const Auth = createNativeStackNavigator<AuthStackParams>();
const Main = createNativeStackNavigator<MainStackParams>();
const Tabs = createBottomTabNavigator<BottomTabParams>();

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
        <Main.Screen name="settingsScreen" component={SettingsScreen} />
        <Main.Screen name="account" component={AccountScreen} />
        <Main.Screen name="profileInfo" component={ProfileInformation} />
        <Main.Screen name="verifyPassword" component={VerifyPassword} />
        <Main.Screen name="changeEmail" component={ChangeEmail} />
        <Main.Screen name="verifyOtp" component={VerifyOtp} />
        <Main.Screen name="changePhoneNumber" component={ChangePhoneNumber} />
        <Main.Screen name="phoneVerifyOtp" component={PhoneVerifyOtp} />
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
