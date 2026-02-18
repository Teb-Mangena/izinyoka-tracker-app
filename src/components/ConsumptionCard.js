import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, useWindowDimensions } from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function ConsumptionCard() {
  const [telemetry, setTelemetry] = useState(null);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setTelemetry({
        id: "t1",
        meter_id: "MTR-001",
        consumption_kwh: 12.4,
        tamper_flags: "Low",
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <ActivityIndicator size="small" />;

  const tamperRisk = telemetry?.tamper_flags || "Low";
  const riskColor = tamperRisk === "High" ? "red" : "green";

  return (
    <View style={[styles.card, { backgroundColor: colors.card, padding: width < 360 ? 12 : 16 }]}>
      <View style={styles.row}>
        <View>
          <Text style={[styles.label, { fontSize: width < 360 ? 12 : 14, color: colors.text }]}>
            Current Consumption
          </Text>
          <Text style={[styles.value, { fontSize: width < 360 ? 18 : 22, color: colors.primary }]}>
            {telemetry?.consumption_kwh} kWh
          </Text>
        </View>
        <View style={[styles.riskBadge, { backgroundColor: riskColor }]}>
          <Text style={[styles.riskText, { fontSize: width < 360 ? 10 : 12 }]}>
            Tamper Risk {tamperRisk}
          </Text>
        </View>
      </View>
      <View style={[styles.chartPlaceholder, { backgroundColor: colors.background }]}>
        <Text style={[styles.chartText, { fontSize: width < 360 ? 12 : 14, color: colors.primary }]}>
          Line chart placeholder
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 12, marginBottom: 12, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 4 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  label: {},
  value: { fontWeight: "bold", marginTop: 4 },
  riskBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  riskText: { color: "#fff", fontWeight: "bold" },
  chartPlaceholder: { marginTop: 12, height: 80, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  chartText: {},
});
