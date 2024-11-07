import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Conhecimento Verde. Todos os direitos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#2a9d8f',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Footer;
