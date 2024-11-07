import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importando hooks de navegação

const Header = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute();

  // Condicional para verificar se estamos na tela 'HomeScreen'
  const showHomeButton = route.name !== 'Home'; // O botão só será exibido se não estivermos na tela Home

  return (
    <View style={styles.headerContainer}>
      <View style={showHomeButton ? styles.textContainerWithButton : styles.textContainerWithoutButton}>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Mostrar o botão de "Home" apenas se não estiver na tela Home */}
      {showHomeButton && (
        <TouchableOpacity 
          style={styles.homeButton} 
          onPress={() => navigation.navigate('Home')} // Navega para a tela Home
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, 
    flexDirection: 'row',  
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
  },
  textContainerWithButton: {
    flex: 1, 
    alignItems: 'flex-start', 
  },
  textContainerWithoutButton: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  homeButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
