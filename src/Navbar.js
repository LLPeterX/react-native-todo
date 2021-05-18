import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NavBar(props) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#050780',
    alignItems: 'center',
    width: "100%",
    height: 80,
    marginBottom: "10px"
    //justifyContent: 'center',
    //flexDirection: 'column'
  },
  text: {
    color: '#f0f257',
    fontSize: 20,
  }
});