import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function TodoScreen({ todo, onBack }) {
  return (
    <View style={styles.container}>
      <Text>{'id:' + todo.id}</Text>
      <Text>{todo.text}</Text>
      <View style={styles.block}>
        <Button title="Назад" onPress={onBack}/>
        <Button title="Редактировать" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    height: "50%",
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  title: {
    fontWeight: 'bold',
    color: '#000'
  },
  block: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 4,
    marginTop: 20
  },

});
