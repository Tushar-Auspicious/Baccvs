import { SafeAreaProvider } from "react-native-safe-area-context";
import { Appearance, LogBox } from "react-native";
import Toast from "react-native-toast-message";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Splash from "./src/Screens/Splash";
import Routing from "./src/Routes";
import OnBoarding from "./src/Screens/OnBoarding";
import OnBoardingSlides from "./src/Seeds/OnBoardingSeeds";

LogBox.ignoreAllLogs();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Appearance.setColorScheme("light");

    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          {isReady ? <Routing /> : <Splash />}
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </>
  );
};

export default App;
