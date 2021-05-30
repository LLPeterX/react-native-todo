import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { EditModal } from '../components/EditModal';
import { THEME } from '../theme';
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton';
import { AntDesign } from '@expo/vector-icons';

export default function TodoScreen({ todo, onBack, onDelete, onSave }) {
  let [modalVisible, setModalVisible] = useState(false);

  const removeTodo = () => {
    Alert.alert('Удаление', // header
      'Вы желаете удалить эту задачу?', // text
      // buttons Yes/No
      [
        {
          text: 'Да',
          onPress: () => {
            onDelete(todo.id);
            onBack();
          }
        },
        {
          text: 'Нет'
        }
      ],
      // options
      {
        cancelable: true
      }
    );
  }

  const onSaveTodo = (text) => {
    onSave(todo.id, text);
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <EditModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={onSaveTodo}
        value={todo.text}
      />
      <AppText style={styles.text}>{todo.text}</AppText>
      <View style={styles.block}>
        <AppButton color={THEME.GRAY_COLOR} onPress={onBack} >
          <AntDesign name="stepbackward" size={24} /></AppButton>
        <AppButton color={THEME.GREEN_COLOR} onPress={() => setModalVisible(true)}>
          <AntDesign name="edit" size={24} />
        </AppButton>
        <AppButton color={THEME.DANGER_COLOR} onPress={removeTodo}>
          <AntDesign name="delete" size={24} />
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  title: {
    fontWeight: 'bold',
    color: THEME.TEXT_COLOR
  },
  block: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 4,
    marginTop: 20
  },
  button: {
    width: '30%'
  },
  text: {
    fontSize: 16
  }

});
