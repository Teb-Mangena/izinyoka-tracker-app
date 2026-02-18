import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../context/ThemeContext';

export default function MeterLookup() {
  const [meter, setMeter] = useState('');
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  async function onSearch() {
    const mockTelemetry = {
      id: 't1',
      meter_id: meter || 'MTR-001',
      consumption_kwh: 15.7,
      tamper_flags: 'Low',
      recorded_at: new Date().toISOString(),
    };
    Alert.alert('Meter Data', JSON.stringify(mockTelemetry, null, 2));
  }

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text
        style={[
          styles.title,
          { fontSize: width < 360 ? 14 : 16, color: colors.primary },
        ]}>
        Meter Lookup
      </Text>
      <View style={styles.row}>
        <TextInput
          value={meter}
          onChangeText={setMeter}
          placeholder="Enter meter ID (UUID)"
          placeholderTextColor={colors.text}
          style={[
            styles.input,
            {
              fontSize: width < 360 ? 12 : 14,
              borderColor: colors.background,
              color: colors.text,
            },
          ]}
        />
        <TouchableOpacity
          style={[styles.searchButton, { backgroundColor: colors.primary }]}
          onPress={onSearch}>
          <Icon name="magnify" size={width < 360 ? 18 : 22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: { fontWeight: 'bold', marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center' },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
  },
  searchButton: { padding: 8, borderRadius: 8 },
});
