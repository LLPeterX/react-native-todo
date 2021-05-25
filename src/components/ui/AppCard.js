import React from 'react';
import { StyleSheet, View } from 'react-native';
import {THEME} from '../../theme'

export default function AppCard (props) {
   return (
     <View style={styles.default}></View>
   );
}

const styles = StyleSheet.create({
  // default: {
  //   width: "100%",
  //   flexDirection: 'row',
  //   justifyContent: "space-between",
  //   padding: 4,
  //   marginTop: 20
  // }
  default: {
    padding: 20,
    borderWidth: 2,
    boderColor: THEME.GRAY_COLOR
  }
});