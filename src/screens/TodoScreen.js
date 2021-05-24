import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function TodoScreen({ todo, onBack, onDelete }) {
  const removeTodo = () => {
    onDelete(todo.id);
    onBack();
  }
  return (
    <View style={styles.container}>
      <Text>{'id:' + todo.id}</Text>
      <Text>{todo.text}</Text>
      <View style={styles.block}>
        <View style={styles.button}><Button title="< Назад" color='#757575' onPress={onBack}/></View>
        <View style={styles.button}><Button title="Изменить" color='#00AA00' /></View>
        <View style={styles.button}><Button title="Удалить" color='#e53935' onPress={removeTodo}/></View>
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
  button: {
    width: '30%'
  }

});
