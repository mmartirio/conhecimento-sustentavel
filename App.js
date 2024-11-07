import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import HomeScreen from './src/components/HomeScreen';
import PapelScreen from './src/components/PapelScreen';
import VidroScreen from './src/components/VidroScreen';
import PlasticoScreen from './src/components/PlasticoScreen';
import MetalScreen from './src/components/MetalScreen';
import EletronicosScreen from './src/components/EletronicosScreen';

import { Footer } from './src/main/';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarStyle: { display: 'none' },
          }} 
        />
        <Tab.Screen 
          name="Papel" 
          component={PapelScreen} 
          options={{
            tabBarStyle: { display: 'none' },
          }} 
        />
        <Tab.Screen 
          name="Vidro" 
          component={VidroScreen} 
          options={{
            tabBarStyle: { display: 'none' },
          }} 
        />
        <Tab.Screen 
          name="Plástico" 
          component={PlasticoScreen} 
          options={{
            tabBarStyle: { display: 'none' },
          }} 
        />
        <Tab.Screen 
          name="Metal" 
          component={MetalScreen} 
          options={{
            tabBarStyle: { display: 'none' },
          }} 
        />
        <Tab.Screen 
          name="Eletrônicos" 
          component={EletronicosScreen} 
          options={{
            tabBarStyle: { display: 'none' }, 
          }} 
        />
      </Tab.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
