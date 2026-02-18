import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function CitizenProfileScreen() {
  const { darkMode, colors, toggleTheme } = useTheme();

  const [profile, setProfile] = useState({
    name: "Kamvelihle Bavuma",
    email: "kamvelihlebavuma@email.com",
    phone: "+27 71 234 5678",
    address: "123 Main Street, East London",
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    language: "English",
  });

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const togglePreference = (field) => {
    setPreferences({ ...preferences, [field]: !preferences[field] });
  };

  const handleSave = () => {
    console.log("Profile saved:", profile);
    console.log("Preferences saved:", { ...preferences, darkMode });
    alert("Profile & preferences updated successfully!");
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.primary }]}>Citizen Profile</Text>

      {/* Profile Section */}
      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Full Name</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          value={profile.name}
          onChangeText={(text) => handleChange("name", text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Email</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          value={profile.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChange("email", text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Phone</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          value={profile.phone}
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange("phone", text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Address</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          value={profile.address}
          multiline
          onChangeText={(text) => handleChange("address", text)}
        />
      </View>

      {/* Preferences Section */}
      <Text style={[styles.sectionHeader, { color: colors.primary }]}>Preferences</Text>

      <View style={styles.preferenceRow}>
        <Text style={[styles.label, { color: colors.text }]}>Enable Notifications</Text>
        <Switch
          value={preferences.notifications}
          onValueChange={() => togglePreference("notifications")}
        />
      </View>

      <View style={styles.preferenceRow}>
        <Text style={[styles.label, { color: colors.text }]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleTheme} />
      </View>

      <View style={styles.formGroup}>
        <Text style={[styles.label, { color: colors.text }]}>Language</Text>
        <TextInput
          style={[styles.input, { backgroundColor: colors.card, color: colors.text }]}
          value={preferences.language}
          onChangeText={(text) =>
            setPreferences({ ...preferences, language: text })
          }
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: colors.primary }]}
        onPress={handleSave}
      >
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginVertical: 12 },
  formGroup: { marginBottom: 16 },
  label: { fontSize: 14, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  preferenceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  saveButton: {
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
