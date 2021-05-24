import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NavBar({title}) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#0a13bd',
    alignItems: 'center',
    width: "100%",
    height: 40,
    marginBottom: 4,
    justifyContent: 'center',
    marginTop: 20
    
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});