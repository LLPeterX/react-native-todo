import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Alert } from 'react-native';
import { THEME } from '../theme';
import { AppButton } from './ui/AppButton';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export function EditModal({ visible, onClose, value, onSave }) {
  let [todoText, setTodoText] = useState(value);

  function saveHandler() {
    if (todoText && todoText.length) {
      onSave(todoText);
    } else {
      Alert.alert("Ошибка", "Не заполнен текст");
    }

  }
  return (
    <Modal
      visible={visible}
      animationType='fade'
      transparent={false}
      onRequestClose={onClose}
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
          value={todoText}
          onChangeText={setTodoText}
        />
        <View style={styles.buttonsBlock}>
          {/* <Button title="Отмена" color={THEME.GRAY_COLOR} onPress={onClose} /> */}
          <AppButton color={THEME.GRAY_COLOR} onPress={onClose}>
          <AntDesign name="stepbackward" size={24} />
          </AppButton>
          {/* <Button title="Сохранить" color={THEME.GREEN_COLOR} onPress={saveHandler}/> */}
          <AppButton color={THEME.GREEN_COLOR} onPress={saveHandler}>
            <AntDesign name="save" size={24}/>
          </AppButton>
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
    borderBottomWidth: 2
  },
  buttonsBlock: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-around",
    padding: 4,
    marginTop: 20
  },

});