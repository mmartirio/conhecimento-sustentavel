import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Header, CardInfo } from '../main';

const VidroScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Vidro" />
      <CardInfo
        title="Separação de Vidro"
        content="Separe os vidros por cor e remova tampas e rótulos. Tenha cuidado ao manusear vidros quebrados e embale-os de forma segura."
      />
      <CardInfo
        title="Tipos de Vidro Reciclável"
        content="Garrafas, potes de alimentos e frascos são recicláveis. Espelhos, vidros temperados e lâmpadas não devem ser reciclados juntos."
      />
      <CardInfo
        title="Benefícios da Reciclagem de Vidro"
        content="Reciclar vidro economiza energia, reduz a necessidade de extração de matérias-primas e pode ser reciclado infinitamente sem perda de qualidade."
      />
      <CardInfo
        title="Produtos Feitos com Vidro Reciclado"
        content="Vidro reciclado pode ser usado para fabricar novas garrafas, potes e materiais de construção, como azulejos."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default VidroScreen;
