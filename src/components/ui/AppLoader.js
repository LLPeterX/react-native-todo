import React from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native'
import { THEME } from '../../theme'

export const AppLoader = () => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color={THEME.HEADER_BACKGROUND} />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});