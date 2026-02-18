import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../context/ThemeContext';

import CitizenDashboardScreen from '../screens/CitizenDashboardScreen';
import ReportScreen from '../screens/ReportScreen';
import MapScreen from '../screens/MapScreen';
import IncidentListScreen from '../screens/IncidentListScreen';
import WorkerDashboardScreen from '../screens/WorkerDashboardScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';
import CitizenProfileScreen from '../screens/CitizenProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs({ route }) {
  const { colors } = useTheme();

  // Role can come from navigation params or fallback to mock
  const role = route?.params?.role || 'citizen'; // "citizen", "worker", "admin"

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.card },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      }}>
      {/* Citizen tabs */}
      {role === 'citizen' && (
        <>
          <Tab.Screen
            name="Home"
            component={CitizenDashboardScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Incidents"
            component={IncidentListScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="file-document" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="map" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Reports"
            component={ReportScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="file-document" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={CitizenProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              ),
            }}
          />
        </>
      )}

      {/* Worker tabs */}
      {role === 'worker' && (
        <>
          <Tab.Screen
            name="Worker"
            component={WorkerDashboardScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="account-hard-hat" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Incidents"
            component={IncidentListScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="file-document" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="map" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={CitizenProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              ),
            }}
          />
        </>
      )}

      {/* Admin tabs */}
      {role === 'admin' && (
        <>
          <Tab.Screen
            name="Admin"
            component={AdminDashboardScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="chart-bar" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Incidents"
            component={IncidentListScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="file-document" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="map" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Reports"
            component={ReportScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="file-document" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={CitizenProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="account" color={color} size={size} />
              ),
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}
