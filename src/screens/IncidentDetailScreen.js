import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../context/ThemeContext';

export default function IncidentDetailScreen({ route }) {
  const { incidentId } = route.params;
  const [incident, setIncident] = useState(null);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      const mockIncident = {
        id: incidentId,
        meter_id: 'MTR-001',
        reporter_id: 'user-123',
        description: 'Tamper suspected near 12th Ave',
        media_url: null,
        lat: -33.01,
        lon: 27.91,
        status: 'Pending',
        created_at: new Date().toISOString(),
      };
      setIncident(mockIncident);
      setLoading(false);
    }, 1000);
  }, [incidentId]);

  function handleStatusUpdate(newStatus) {
    setIncident({ ...incident, status: newStatus });
    Alert.alert('Success', `Incident marked as ${newStatus}`);
  }

  function handleAddNotes() {
    setIncident({
      ...incident,
      description: incident.description + `\nResolution Notes: ${notes}`,
    });
    setNotes('');
    Alert.alert('Success', 'Notes added');
  }

  if (loading) return <ActivityIndicator size="large" />;
  if (!incident)
    return <Text style={{ color: colors.text }}>Incident not found</Text>;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Icon name="file-document" size={28} color={colors.primary} />
        <Text
          style={[
            styles.headerText,
            { fontSize: width < 360 ? 16 : 20, color: colors.text },
          ]}>
          Incident Detail
        </Text>
      </View>

      {/* Incident Info */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Incident #{incidentId}
        </Text>
        <Text style={[styles.info, { color: colors.text }]}>
          Description: {incident.description}
        </Text>
        <Text style={[styles.info, { color: colors.text }]}>
          Status: {incident.status}
        </Text>
        <Text style={[styles.info, { color: colors.text }]}>
          Reported At: {incident.created_at}
        </Text>
      </View>

      {/* Evidence */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Evidence
        </Text>
        <Image
          source={require('../../assets/evidence-placeholder.png')}
          style={styles.image}
        />
        <Text style={[styles.info, { color: colors.text }]}>
          Photo evidence uploaded by citizen
        </Text>
      </View>

      {/* Location */}
      <View style={[styles.card, styles.row, { backgroundColor: colors.card }]}>
        <Icon name="map-marker" size={24} color="red" />
        <Text style={[styles.info, { color: colors.text }]}>
          Location: {incident.lat}, {incident.lon}
        </Text>
      </View>

      {/* Resolution Notes */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Resolution Notes
        </Text>
        <TextInput
          value={notes}
          onChangeText={setNotes}
          placeholder="Add notes about resolution..."
          placeholderTextColor={colors.text}
          multiline
          style={[
            styles.input,
            { borderColor: colors.primary, color: colors.text },
          ]}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={handleAddNotes}>
          <Text style={styles.buttonText}>Save Notes</Text>
        </TouchableOpacity>
      </View>

      {/* Status Actions */}
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: 'green' }]}
          onPress={() => handleStatusUpdate('Resolved')}>
          <Text style={styles.buttonText}>Mark Resolved</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: 'red' }]}
          onPress={() => handleStatusUpdate('False Alarm')}>
          <Text style={styles.buttonText}>False Alarm</Text>
        </TouchableOpacity>
      </View>
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
  cardTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 8 },
  info: { marginBottom: 4 },
  image: { width: '100%', height: 160, borderRadius: 8, marginTop: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    height: 100,
    marginTop: 8,
  },
  button: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
});
