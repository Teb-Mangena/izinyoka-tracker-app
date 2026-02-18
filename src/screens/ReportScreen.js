import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../context/ThemeContext';

export default function ReportScreen() {
  const [description, setDescription] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [lat] = useState(-33.0);
  const [lon] = useState(27.9);
  const meterId = 'MTR-001';
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  function handleSubmit() {
    const mockIncident = {
      id: 'inc-001',
      meter_id: meterId,
      description,
      media_url: mediaUrl,
      lat,
      lon,
      status: 'Pending',
      created_at: new Date().toISOString(),
    };
    Alert.alert('Success', `Incident reported with ID: ${mockIncident.id}`);
    setDescription('');
    setMediaUrl('');
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Icon name="alert-circle" size={28} color={colors.primary} />
        <Text
          style={[
            styles.headerText,
            { fontSize: width < 360 ? 16 : 20, color: colors.text },
          ]}>
          Report Incident
        </Text>
      </View>

      {/* Upload placeholder */}
      <View
        style={[styles.card, styles.center, { backgroundColor: colors.card }]}>
        <Icon name="camera" size={40} color={colors.text} />
        <Text style={[styles.info, { color: colors.text }]}>
          Upload photo or video (coming soon)
        </Text>
      </View>

      {/* Description input */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Description
        </Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Describe the suspicious activity..."
          placeholderTextColor={colors.text}
          multiline
          style={[
            styles.input,
            { height: 100, borderColor: colors.primary, color: colors.text },
          ]}
        />
      </View>

      {/* Evidence URL input */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.cardTitle, { color: colors.primary }]}>
          Evidence URL
        </Text>
        <TextInput
          value={mediaUrl}
          onChangeText={setMediaUrl}
          placeholder="Paste photo/video URL..."
          placeholderTextColor={colors.text}
          style={[
            styles.input,
            { borderColor: colors.primary, color: colors.text },
          ]}
        />
      </View>

      {/* Geotag placeholder */}
      <View style={[styles.card, styles.row, { backgroundColor: colors.card }]}>
        <Icon name="map-marker" size={24} color="red" />
        <Text style={[styles.info, { color: colors.text }]}>
          Location auto‑captured (mock)
        </Text>
      </View>

      {/* Submit button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
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
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: { fontWeight: 'bold', marginBottom: 8 },
  info: { fontSize: 12, marginTop: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  center: { alignItems: 'center' },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
