import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabBar from "../Components/BottomTabBar";
import {
  AuthStackParams,
  BottomTabParams,
  MainStackParams,
  RootStackParams,
} from "../Typings/route";
import OnBoarding from "../Screens/OnBoarding";
import Home from "../Screens/Home";
import Dating from "../Screens/Dating";
import Events from "../Screens/Events";
import Profile from "../Screens/Profile";
import Messages from "../Screens/Messages";

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
        <Auth.Screen name="referral" component={OnBoarding} />
        <Auth.Screen name="register" component={OnBoarding} />
        <Auth.Screen name="welcome" component={OnBoarding} />
        <Auth.Screen name="signIn" component={OnBoarding} />
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
      </Main.Navigator>
    );
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="authStack" component={AuthStack} />
      <RootStack.Screen name="mainStack" component={MainStack} />
    </RootStack.Navigator>
  );
};

export default Routing;
