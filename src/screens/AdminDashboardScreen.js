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
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';

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

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={{ paddingBottom: 80 }}>
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
      {/* ... existing content ... */}

      {/* Export Reports */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Reports
        </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}>
          <Text style={styles.buttonText}>Export Analytics</Text>
        </TouchableOpacity>
      </View>

      {/* Logout / Switch Role */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
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
  button: {
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
