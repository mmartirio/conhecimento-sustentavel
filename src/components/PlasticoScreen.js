import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, CardInfo } from '../main';

const PlasticoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Plástico" />
      <CardInfo
        title="Separação de Plástico"
        content="Separe os plásticos por tipo (PET, PEAD, etc.) e remova resíduos de alimentos ou líquidos antes de enviar para a reciclagem."
      />
      <CardInfo
        title="Tipos de Plástico Reciclável"
        content="Garrafas PET, embalagens de produtos de limpeza e sacolas plásticas são recicláveis. Plásticos contaminados e certos tipos de plásticos compostos não são."
      />
      <CardInfo
        title="Benefícios da Reciclagem de Plástico"
        content="A reciclagem de plástico ajuda a reduzir o volume de resíduos nos aterros, economiza petróleo e diminui a poluição ambiental."
      />
      <CardInfo
        title="Produtos Feitos com Plástico Reciclado"
        content="Plástico reciclado pode ser usado para fabricar novos recipientes, tecidos sintéticos e materiais de construção como telhas plásticas."
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

export default PlasticoScreen;
