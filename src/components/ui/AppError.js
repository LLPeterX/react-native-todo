import React from 'react'
import {Button, StyleSheet, View} from 'react-native'
import { THEME } from '../../theme'
import {AppText} from './AppText'

export const AppError = ({error, reload}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.error}>{error}</AppText>
      <Button title="Повторить" onPress={reload}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    fontFamily: 'roboto-bold',
    color: THEME.DANGER_COLOR,
    marginBottom: 30
  }
});