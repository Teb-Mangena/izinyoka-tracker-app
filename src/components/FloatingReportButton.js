import React from "react";
import { TouchableOpacity, Text, Alert, StyleSheet, useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../context/ThemeContext";

export default function FloatingReportButton() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  async function handleReport() {
    Alert.alert("Reported", "Incident submitted successfully!");
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors.primary,
          paddingHorizontal: width < 360 ? 12 : 16,
          paddingVertical: width < 360 ? 8 : 12,
        },
      ]}
      onPress={handleReport}
    >
      <Icon name="camera" size={width < 360 ? 18 : 22} color="#fff" />
      <Text style={[styles.text, { fontSize: width < 360 ? 12 : 14 }]}>Report Issue</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 64,
    right: 16,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  text: { color: "#fff", fontWeight: "bold", marginLeft: 8 },
});
