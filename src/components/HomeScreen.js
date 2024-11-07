import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, TouchableOpacity, Linking, Animated } from 'react-native';
import Header from '../main/Header';

const openGoogleMaps = () => {
  const googleMapsUrl = 'https://www.google.com/maps/search/Pontos+de+coleta+perto+de+mim';
  Linking.openURL(googleMapsUrl);  
};

const HomeScreen = ({ navigation }) => {

  const textAnimation = useRef(new Animated.Value(0)).current;
  const descriptionAnimation = useRef(new Animated.Value(0)).current;
  const buttonContainerAnimation = useRef(new Animated.Value(0)).current;
  const mapContainerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.timing(textAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    })
    .start(() => {
      Animated.timing(descriptionAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
      .start(() => {
        Animated.timing(buttonContainerAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
        .start(() => {
          Animated.timing(mapContainerAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        });
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Header title="Conhecimento Sustentável" />
      <Animated.View
        style={[
          styles.content,
          {
            opacity: textAnimation,
            transform: [{ translateX: textAnimation.interpolate({ inputRange: [0, 1], outputRange: [-50, 0] }) }],
          },
        ]}
      >
        <Text style={styles.text}>Bem-vindo!</Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity: descriptionAnimation,
              transform: [{ translateX: descriptionAnimation.interpolate({ inputRange: [0, 1], outputRange: [-50, 0] }) }],
            },
          ]}
        >
          Vamos aprender a reciclar!
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: buttonContainerAnimation,
            transform: [{ translateY: buttonContainerAnimation.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
          },
        ]}
      >
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Papel')}>
          <Image source={require('../../assets/papel.png')} style={styles.btnImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Vidro')}>
          <Image source={require('../../assets/vidro.png')} style={styles.btnImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Plástico')}>
          <Image source={require('../../assets/plastico.png')} style={styles.btnImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Metal')}>
          <Image source={require('../../assets/metal.png')} style={styles.btnImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Eletrônicos')}>
          <Image source={require('../../assets/eletronico.png')} style={styles.btnImage} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          styles.mapContainer,
          {
            opacity: mapContainerAnimation,
            transform: [{ translateY: mapContainerAnimation.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }],
          },
        ]}
      >
        <Text style={styles.mapText}>Encontre os Pontos de coleta próximos de você</Text>
        <TouchableOpacity onPress={openGoogleMaps}>
          <Image source={require('../../assets/map.png')} style={styles.mapImage} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 50,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
  mapContainer: {
    alignItems: 'center',
  },
  mapImage: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 6,
  },
  mapText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  btnImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default HomeScreen;
