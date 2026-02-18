import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ElectricianAtPanel from '../components/ElectricianAtPanel';

export default function RoleToggleScreen({ navigation }) {
  const [role, setRole] = useState('citizen');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { colors } = useTheme();

  function handleLogin(selectedRole) {
    setRole(selectedRole);
    navigation.replace('BottomTabs', { role: selectedRole });
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.eskomLight }]}>
      {/* Header Illustration */}
      <View style={styles.illustration}>
        <ElectricianAtPanel width={180} height={200} color={colors.eskomBlue} />
        <Text style={[styles.title, { color: colors.eskomBlue }]}>
          Izinyoka Tracker
        </Text>
        <Text style={[styles.subtitle, { color: colors.eskomGray }]}>
          Welcome back, proceed to Login
        </Text>
      </View>

      {/* Login Form */}
      <View style={[styles.card, { backgroundColor: '#fff' }]}>
        <TextInput
          style={[
            styles.input,
            { borderColor: colors.eskomBlue, color: colors.eskomGray },
          ]}
          placeholder="Email"
          placeholderTextColor={colors.eskomGray}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: colors.eskomBlue, color: colors.eskomGray },
          ]}
          placeholder="Password"
          placeholderTextColor={colors.eskomGray}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Remember Me + Forgot Password */}
        <View style={styles.row}>
          <View style={styles.rememberRow}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              thumbColor={rememberMe ? colors.eskomBlue : '#ccc'}
            />
            <Text style={{ color: colors.eskomGray, marginLeft: 6 }}>
              Remember Me
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: colors.eskomOrange, fontWeight: 'bold' }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Role Selection */}
       {/* Role Selection */}
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>
        Select Role
      </Text>
      <View style={styles.roleRow}>
        <TouchableOpacity
          style={[styles.roleButton, { backgroundColor: colors.primary }]}
          onPress={() => handleLogin('citizen')}>
          <Icon name="account" size={20} color="#fff" />
          <Text style={styles.buttonText}>Citizen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, { backgroundColor: 'green' }]}
          onPress={() => handleLogin('worker')}>
          <Icon name="account-hard-hat" size={20} color="#fff" />
          <Text style={styles.buttonText}>Worker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, { backgroundColor: 'orange' }]}
          onPress={() => handleLogin('admin')}>
          <Icon name="chart-bar" size={20} color="#fff" />
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  illustration: { alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  subtitle: { fontSize: 14, marginTop: 4, textAlign: 'center' },
  card: {
    width: '100%',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberRow: { flexDirection: 'row', alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  roleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  roleButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14, // increased padding for visibility
    borderRadius: 8,
    marginHorizontal: 6, // more spacing between buttons
    minWidth: 90, // ensure buttons have visible width
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
    fontSize: 14,
  },
});
