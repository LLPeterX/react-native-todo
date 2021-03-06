import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import {THEME} from '../theme';
import {AppTextBold} from '../components/ui/AppTextBold'

export default function NavBar({title}) {
  return (
    <View style={{...styles.navbar, ...Platform.select({
        ios: styles.navbarIOS,
        android: styles.navbarAndroid
        })}}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
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
    fontSize: 18
  },
  navbarAndroid: {
    backgroundColor: THEME.HEADER_BACKGROUND
  },
  navbarIOS: {
    backgroundColor: THEME.GRAY_COLOR,
    marginBottom: 4
  }
});