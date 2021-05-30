/*
Displays one todo item of list
*/
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {THEME} from '../theme';
import { AppText } from '../components/ui/AppText'

export default function Todo({ todo, onOpen, onDelete }) {
  
  // const pressHandler = () => {
  //   console.log(`Press ${todo.id} - ${todo.text}`)
  // };
  
  return (
     <TouchableOpacity activeOpacity={0.5} 
    onLongPress={onDelete.bind(null, todo.id)}
    onPress={onOpen.bind(null,todo.id)}>
      <View style={styles.todo}>
        <AppText style={styles.text}>{todo.text}</AppText>
      </View>
    </TouchableOpacity>
  );

  
}

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: THEME.GRAY_COLOR,
    borderRadius: 5
  },
  text: {
    fontSize: 16,
    color: THEME.TEXT_COLOR
  }
});
