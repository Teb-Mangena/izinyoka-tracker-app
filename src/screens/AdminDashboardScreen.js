import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

export default function AdminDashboardScreen() {
  const [overview, setOverview] = useState(null);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setOverview({ total: 12, resolved: 7, false_alarms: 2, pending: 3 });
      setTrends([
        { day: '2026-02-01', count: 2 },
        { day: '2026-02-02', count: 1 },
        { day: '2026-02-03', count: 3 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <ActivityIndicator size="large" color={colors.primary} />;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Icon name="chart-bar" size={28} color={colors.primary} />
        <Text
          style={[
            styles.headerText,
            { fontSize: width < 360 ? 16 : 20, color: colors.text },
          ]}>
          Admin Dashboard
        </Text>
      </View>

      {/* Stats Overview */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          System Overview
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: colors.primary }]}>
              {overview.total}
            </Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>
              Total Incidents
            </Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: colors.eskomGreen }]}>
              {overview.resolved}
            </Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>
              Resolved
            </Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: colors.eskomRed }]}>
              {overview.false_alarms}
            </Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>
              False Alarms
            </Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statValue, { color: colors.eskomOrange }]}>
              {overview.pending}
            </Text>
            <Text style={[styles.statLabel, { color: colors.text }]}>
              Pending
            </Text>
          </View>
        </View>
      </View>

      {/* Incident Trends */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Incident Trends (last 14 days)
        </Text>
        <FlatList
          data={trends}
          keyExtractor={(item) => item.day}
          renderItem={({ item }) => (
            <Text style={{ color: colors.text }}>
              {item.day}: {item.count} incidents
            </Text>
          )}
        />
      </View>

      {/* Chart Placeholder */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Incident Trends Chart
        </Text>
        <View
          style={[
            styles.chartPlaceholder,
            { backgroundColor: colors.background },
          ]}>
          <Text style={{ color: colors.primary }}>Chart placeholder</Text>
        </View>
      </View>

      {/* User Management */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          User Management
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}>
          <Text style={styles.buttonText}>View Field Workers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}>
          <Text style={styles.buttonText}>Manage Citizens</Text>
        </TouchableOpacity>
      </View>

      {/* Export Reports */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Reports
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.eskomGreen }]}>
          <Text
            style={[
              styles.title,
              { fontSize: width < 360 ? 14 : 16, color: colors.primary },
            ]}>
            Export Report
          </Text>
        </TouchableOpacity>
      </View>

      {/* Switch Role Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors.primary, marginTop: 20 },
        ]}
        onPress={() => navigation.replace('RoleToggle')}>
        <Text style={styles.buttonText}>Switch Role</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  headerText: { marginLeft: 8, fontWeight: 'bold' },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: { fontWeight: 'bold', marginBottom: 8 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  statBox: { flex: 1, alignItems: 'center' },
  statValue: { fontWeight: 'bold', fontSize: 18 },
  statLabel: { fontSize: 12 },
  chartPlaceholder: {
    height: 120,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  title: { fontWeight: 'bold', marginBottom: 8 },
});
