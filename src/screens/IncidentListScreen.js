import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

export default function IncidentListScreen() {
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
          description: 'Tamper suspected near 12th Ave',
          status: 'Pending',
          created_at: new Date().toISOString(),
        },
        {
          id: 'inc-002',
          description: 'Unusual consumption spike',
          status: 'Assigned',
          created_at: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Icon name="file-document" size={28} color={colors.primary} />
        <Text
          style={[
            styles.headerText,
            { fontSize: width < 360 ? 16 : 20, color: colors.text },
          ]}>
          Incidents
        </Text>
      </View>

      {/* Incident List */}
      <FlatList
        data={incidents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card }]}
            onPress={() =>
              navigation.navigate('IncidentDetail', { incidentId: item.id })
            }>
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
          </TouchableOpacity>
        )}
      />
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
});
