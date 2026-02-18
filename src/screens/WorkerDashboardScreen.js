import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

export default function WorkerDashboardScreen() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setIncidents([
        {
          id: 'inc-001',
          meter_id: 'MTR-001',
          reporter_id: 'user-123',
          description: 'Tamper suspected near 12th Ave',
          status: 'Pending',
          created_at: new Date().toISOString(),
        },
        {
          id: 'inc-002',
          meter_id: 'MTR-002',
          reporter_id: 'user-456',
          description: 'Unusual consumption spike',
          status: 'Assigned',
          created_at: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  function handleStatusUpdate(id, newStatus) {
    setIncidents((prev) =>
      prev.map((inc) => (inc.id === id ? { ...inc, status: newStatus } : inc))
    );
    Alert.alert('Success', `Incident ${id} marked as ${newStatus}`);
  }

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Icon name="account-hard-hat" size={28} color={colors.primary} />
        <Text
          style={[
            styles.headerText,
            { fontSize: width < 360 ? 16 : 20, color: colors.text },
          ]}>
          Worker Dashboard
        </Text>
      </View>

      {/* Incident List */}
      <FlatList
        data={incidents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.cardTitle, { color: colors.primary }]}>
              Incident #{item.id}
            </Text>
            <Text style={[styles.info, { color: colors.text }]}>
              Description: {item.description}
            </Text>
            <Text style={[styles.info, { color: colors.text }]}>
              Status: {item.status}
            </Text>
            <Text style={[styles.info, { color: colors.text }]}>
              Reported At: {item.created_at}
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: 'green' }]}
                onPress={() => handleStatusUpdate(item.id, 'Resolved')}>
                <Text style={styles.buttonText}>Resolve</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, { backgroundColor: 'red' }]}
                onPress={() => handleStatusUpdate(item.id, 'False Alarm')}>
                <Text style={styles.buttonText}>False Alarm</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.primary }]}
              onPress={() =>
                navigation.navigate('IncidentDetail', { incidentId: item.id })
              }>
              <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Switch Role Button */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors.primary, marginTop: 20 },
        ]}
        onPress={() => navigation.replace('RoleToggle')}>
        <Text style={styles.buttonText}>Switch Role</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  headerText: { marginLeft: 8, fontWeight: 'bold' },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: { fontWeight: 'bold', marginBottom: 4 },
  info: { fontSize: 12 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  button: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
});
