import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { useTheme } from '../context/ThemeContext';

export default function MapScreen() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { colors } = useTheme();

  const API = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:4000',
  });

  API.interceptors.request.use((config) => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) config.headers.Authorization = `Bearer ${token}`;
    } catch (err) {
      console.error('Error loading token:', err);
    }
    return config;
  });

  API.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401 || error.response?.status === 403) {
        console.warn('Authentication error, redirecting to login...');
      }
      return Promise.reject(error);
    }
  );

  async function getAlerts(lat, lon) {
    const res = await API.get(`/alerts?lat=${lat}&lon=${lon}`);
    return res.data;
  }

  useEffect(() => {
    async function loadAlerts() {
      try {
        const lat = -33.0;
        const lon = 27.9;
        const alertsData = await getAlerts(lat, lon);
        setAlerts(alertsData);
      } catch (err) {
        console.error('Error loading alerts:', err);
      } finally {
        setLoading(false);
      }
    }
    loadAlerts();
  });

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -33.0,
          longitude: 27.9,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}>
        {alerts.map((item) => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.lat, longitude: item.lon }}
            title={item.type}
            description={`${item.severity} - ${item.message}`}
            pinColor={item.severity === 'high' ? 'red' : 'orange'}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
