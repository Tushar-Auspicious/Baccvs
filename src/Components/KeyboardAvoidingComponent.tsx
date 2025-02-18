import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import COLORS from "../Utilities/Colors";

interface KeyboardAvoidingContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  scrollEnabled?: boolean;
}

export function KeyboardAvoidingContainer({
  children,
  style,
  scrollEnabled = true,
}: KeyboardAvoidingContainerProps) {
  const Content = scrollEnabled ? ScrollView : View;
  const Insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      style={[styles.container]}
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={
        Platform.OS === "ios" ? 0 : StatusBar.currentHeight
      }
    >
      <Content
        contentContainerStyle={
          scrollEnabled ? styles.scrollContent : styles.content
        }
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </Content>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
});
