import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/components/HomeScreen';
import PapelScreen from './src/components/PapelScreen';
import VidroScreen from './src/components/VidroScreen';
import PlasticoScreen from './src/components/PlasticoScreen';
import MetalScreen from './src/components/MetalScreen';
import EletronicosScreen from './src/components/EletronicosScreen';
import { Footer } from './src/main/';

const Tab = createBottomTabNavigator();

function SplashScreen() {
  const rotation = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false, // Use false para permitir a interpolação de cores
      })
    ).start();
  }, []);

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const colorInterpolation = rotation.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: ['#30CA74', '#F7AC37', '#6D6E72', '#1397E2', '#F85C4D', '#30CA74'],
  });

  return (
    <View style={styles.splashContainer}>
      <Animated.Image
        source={require('./assets/splash.png')}
        style={[
          styles.image,
          {
            transform: [{ rotate: rotateInterpolation }],
            tintColor: colorInterpolation,
          },
        ]}
      />
    </View>
  );
}

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); 
  }, []);

  return isSplashVisible ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="Papel" component={PapelScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="Vidro" component={VidroScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="Plástico" component={PlasticoScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="Metal" component={MetalScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="Eletrônicos" component={EletronicosScreen} options={{ tabBarStyle: { display: 'none' } }} />
      </Tab.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});
