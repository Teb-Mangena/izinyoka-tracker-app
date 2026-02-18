import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import HeaderBar from "../components/HeaderBar";
import ConsumptionCard from "../components/ConsumptionCard";
import AlertsList from "../components/AlertsList";
import MapPreview from "../components/MapPreview";
import MeterLookup from "../components/MeterLookup";
import FloatingReportButton from "../components/FloatingReportButton";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

export default function CitizenDashboardScreen() {
  const [telemetry, setTelemetry] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setTelemetry([{ id: "t1", meter_id: "MTR-001", consumption_kwh: 12.4, tamper_flags: "Low", recorded_at: new Date().toISOString() }]);
      setAlerts([
        { id: "a1", type: "Tamper", message: "Tamper detected near 12th Ave", severity: "high", lat: -33.01, lon: 27.91, created_at: new Date().toISOString() },
        { id: "a2", type: "Consumption", message: "Unusual drop in meter MTR-001", severity: "medium", lat: -33.02, lon: 27.92, created_at: new Date().toISOString() },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderBar />
      <View style={styles.section}>
        <Text style={[styles.title, { fontSize: width < 360 ? 16 : 18, color: colors.primary }]}>
          Citizen Dashboard
        </Text>

        {/* ... existing content ... */}

        {/* Switch Role Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary, marginTop: 20 }]}
          onPress={() => navigation.replace("RoleToggle")}
        >
          <Text style={styles.buttonText}>Switch Role</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} style={styles.scroll}>
        <MeterLookup />
        <ConsumptionCard />
        <AlertsList />
        <MapPreview />
      </ScrollView>

      <FloatingReportButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: { padding: 20 },
  title: { marginBottom: 10, fontWeight: "bold" },
  scroll: { paddingHorizontal: 16 },
  button: { paddingVertical: 10, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
