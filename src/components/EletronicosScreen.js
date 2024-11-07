import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, CardInfo } from '../main';

const EletronicosScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Eletrônicos" />
      <CardInfo
        title="Separação de Eletrônicos"
        content="Antes de reciclar dispositivos eletrônicos, remova dados pessoais e desconecte cabos. Separe os eletrônicos por tipo, como celulares, computadores e eletrodomésticos."
      />
      <CardInfo
        title="Tipos de Eletrônicos Recicláveis"
        content="Celulares, baterias, computadores, televisores e eletrodomésticos podem ser reciclados. Evite descartar esses itens no lixo comum, pois contêm materiais tóxicos."
      />
      <CardInfo
        title="Benefícios da Reciclagem de Eletrônicos"
        content="A reciclagem de eletrônicos ajuda a recuperar metais preciosos, reduz o lixo eletrônico e previne a contaminação ambiental por substâncias perigosas como mercúrio e chumbo."
      />
      <CardInfo
        title="Produtos Feitos com Eletrônicos Reciclados"
        content="Materiais reciclados de eletrônicos podem ser usados para fabricar novos dispositivos, painéis solares e componentes de carros elétricos."
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

export default EletronicosScreen;
