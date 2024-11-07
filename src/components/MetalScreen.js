import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, CardInfo } from '../main';

const MetalScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Metal" />
      <CardInfo
        title="Separação de Metal"
        content="Separe os metais por tipo (ferrosos e não ferrosos) e limpe resíduos de alimentos. Latas de alumínio devem ser amassadas para facilitar o transporte."
      />
      <CardInfo
        title="Tipos de Metal Reciclável"
        content="Latas de alumínio, embalagens de aço e cobre são recicláveis. Certos metais contaminados ou materiais como latas de tinta podem exigir cuidados especiais."
      />
      <CardInfo
        title="Benefícios da Reciclagem de Metal"
        content="A reciclagem de metais economiza energia, reduz a poluição da água e do ar e diminui a necessidade de extração mineral."
      />
      <CardInfo
        title="Produtos Feitos com Metal Reciclado"
        content="Metais reciclados podem ser usados para fabricar novas latas, peças automotivas e materiais de construção."
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

export default MetalScreen;
