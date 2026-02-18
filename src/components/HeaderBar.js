import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function HeaderBar() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View style={styles.row}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View>
          <Text
            style={[
              styles.title,
              { fontSize: width < 360 ? 14 : 18, color: '#fff' },
            ]}>
            Eskom Connect
          </Text>
          <Text
            style={[
              styles.subtitle,
              { fontSize: width < 360 ? 10 : 12, color: colors.text },
            ]}>
            Monitor your household usage
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 12 },
  row: { flexDirection: 'row', alignItems: 'center' },
  logo: {
    width: 44,
    height: 44,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: { fontWeight: 'bold' },
  subtitle: {},
});
