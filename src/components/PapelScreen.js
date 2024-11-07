import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, CardInfo } from '../main';

const PapelScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Papel" />
      <CardInfo
        title="Separação de Papel"
        content="Para separar o papel para a reciclagem, certifique-se de remover grampos, clipes e não misturar com papéis engordurados ou contaminados."
      />
      <CardInfo
        title="Tipos de Papel Reciclável"
        content="Papéis que podem ser reciclados incluem jornais, revistas, caixas de papelão e folhas de caderno. Papéis plastificados ou contaminados não são recicláveis."
      />
      <CardInfo
        title="Benefícios da Reciclagem de Papel"
        content="A reciclagem de papel ajuda a reduzir o desmatamento, economiza água e reduz a emissão de gases de efeito estufa."
      />
      <CardInfo
        title="Produtos Feitos com Papel Reciclado"
        content="Com o papel reciclado, é possível produzir novos cadernos, embalagens de papelão, toalhas de papel e muito mais."
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

export default PapelScreen;
