import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TodoScreen({todo}) {
  console.log('Show',todo);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.id}</Text>
      <Text>{todo.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 2,
   height: "50%",
   marginTop: 50,
   borderWidth: 2,
   borderColor: '#0a13bd',
   flexDirection: 'column',
   alignItems: 'flex-start'
 },
 title: {
   fontWeight: 'bold',
   color: '#000'
 }
});
