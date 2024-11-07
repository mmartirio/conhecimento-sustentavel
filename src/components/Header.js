import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
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
  },
  headerText: {
    color: '#FFFFFF', 
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
