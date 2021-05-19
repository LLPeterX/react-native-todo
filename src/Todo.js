/*
Displays one todo item
*/
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Todo({todo}) {
  return (
    <View style={styles.todo}>
      <Text>{todo.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    width: "100%",
    alignItems: 'center',
    flexDirection: 'row',
    padding: "15px",
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: '5px'
  },
  text: {
    fontSize: 26
  }
});
