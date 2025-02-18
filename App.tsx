import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Appearance, LogBox, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./src/Redux/store";
import Routing from "./src/Routes";
import Splash from "./src/Screens/Splash";
import COLORS from "./src/Utilities/Colors";

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
      <Provider store={store}>
        <SafeAreaProvider>
          <StatusBar
            backgroundColor={COLORS.appBackground}
            barStyle={"light-content"}
          />
          <NavigationContainer>
            {isReady ? <Routing /> : <Splash />}
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
      <Toast />
    </>
  );
};

export default App;
