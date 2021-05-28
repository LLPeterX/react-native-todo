import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { THEME } from '../theme';


export function EditModal({ visible, onClose, onSave }) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
      transparent={false}
    >
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          multiline={false}
          autoCorrect={false}
          autoCapitalize='none'
          autoFocus={true}
          clearButtonMode='always'
          maxLength={78}
        />
        <View style={styles.buttonsBlock}>
          <Button title="Отмена" color={THEME.GRAY_COLOR} onPress={onClose} />
          <Button title="Сохранить" color={THEME.GREEN_COLOR}/>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    padding: 10,
    borderBottomColor: THEME.GRAY_COLOR,
    borderBottomWidth: 2,
  },
  buttonsBlock: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-around",
    padding: 4,
    marginTop: 20
  },

});