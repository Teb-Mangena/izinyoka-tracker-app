import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "../context/ThemeContext";

export default function AlertsList() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setAlerts([
        {
          id: "a1",
          type: "Tamper",
          message: "Tamper detected near 12th Ave",
          severity: "high",
        },
        {
          id: "a2",
          type: "Consumption",
          message: "Unusual drop in meter MTR-001",
          severity: "medium",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <ActivityIndicator size="small" />;

  return (
    <View style={[styles.card, { backgroundColor: colors.card, padding: width < 360 ? 12 : 16 }]}>
      <Text style={[styles.title, { fontSize: width < 360 ? 14 : 16, color: colors.primary }]}>
        Active Alerts
      </Text>
      {alerts.length === 0 ? (
        <Text style={[styles.noAlerts, { color: colors.text }]}>No alerts nearby</Text>
      ) : (
        alerts.map((alert) => (
          <TouchableOpacity key={alert.id} style={styles.alertRow}>
            <Icon
              name={alert.severity === "high" ? "alert-circle" : "alert"}
              size={width < 360 ? 18 : 22}
              color={alert.severity === "high" ? "red" : "orange"}
            />
            <Text style={[styles.alertText, { fontSize: width < 360 ? 12 : 14, color: colors.text }]}>
              {alert.message}
            </Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, marginBottom: 12, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4 },
  title: { fontWeight: "bold", marginBottom: 8 },
  noAlerts: {},
  alertRow: { flexDirection: "row", alignItems: "center", paddingVertical: 6 },
  alertText: { marginLeft: 10 },
});
