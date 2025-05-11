import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import screens
import CaseSheetForm from './components/CaseSheetForm';
import CasesList from './components/CasesList'; // Dummy or real case list screen

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="New Case"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'New Case') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            } else if (route.name === 'Cases') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007aff',
          tabBarInactiveTintColor: 'gray',
          headerShown: true,
        })}
      >
        <Tab.Screen name="New Case" component={CaseSheetForm} />
        <Tab.Screen name="Cases" component={CasesList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
