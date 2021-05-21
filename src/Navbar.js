import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NavBar({title}) {
  console.log('navbar title=',title);
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#050780',
    alignItems: 'center',
    width: "100%",
    height: 40,
    marginBottom: "4px",
    justifyContent: 'center',
    //flexDirection: 'column'
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});