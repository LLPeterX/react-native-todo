import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {THEME} from '../theme';

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
        <View style={styles.button}><Button title="< Назад" color={THEME.GRAY_COLOR} onPress={onBack}/></View>
        <View style={styles.button}><Button title="Изменить" color={THEME.GREEN_COLOR} /></View>
        <View style={styles.button}><Button title="Удалить" color={THEME.DANGER_COLOR} onPress={removeTodo}/></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "50%",
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  title: {
    fontWeight: 'bold',
    color: THEME.TEXT_COLOR
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
