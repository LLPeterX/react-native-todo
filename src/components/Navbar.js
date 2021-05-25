import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {THEME} from '../theme';

export default function NavBar({title}) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: THEME.HEADER_BACKGROUND,
    alignItems: 'center',
    width: "100%",
    height: 40,
    marginBottom: 4,
    justifyContent: 'center',
    marginTop: 20
    
  },
  text: {
    color: THEME.HEADER_COLOR,
    fontSize: 20
  }
});