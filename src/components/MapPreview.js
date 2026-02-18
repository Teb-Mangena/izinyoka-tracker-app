import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

export default function MapPreview() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Text
        style={[
          styles.title,
          { fontSize: width < 360 ? 14 : 16, color: colors.primary },
        ]}>
        Nearby Hotspots
      </Text>
      <View
        style={[styles.mapContainer, { backgroundColor: colors.background }]}>
        <Image
          source={require('../../assets/map-placeholder.png')}
          style={styles.mapImage}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: colors.primary,
            paddingVertical: width < 360 ? 6 : 8,
          },
        ]}
        onPress={() => navigation.navigate('Map')}>
        <Text style={[styles.buttonText, { fontSize: width < 360 ? 12 : 14 }]}>
          View Map
        </Text>
      </TouchableOpacity>
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
  mapContainer: { height: 120, borderRadius: 8, overflow: 'hidden' },
  mapImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  button: { marginTop: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
