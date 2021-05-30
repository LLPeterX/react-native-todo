import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold'
  }
});

export function AppTextBold(props) {
  let combinedStyle = { ...styles.default, ...props.style };
  return <Text style={combinedStyle}>{props.children}</Text>
}


