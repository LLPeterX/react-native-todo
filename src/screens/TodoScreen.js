import React, { useState } from 'react';
import { StyleSheet, View, Alert, Dimensions } from 'react-native';
import { EditModal } from '../components/EditModal';
import { THEME } from '../theme';
import { AppText } from '../components/ui/AppText'
import { AppButton } from '../components/ui/AppButton';
import { AntDesign } from '@expo/vector-icons';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export default function TodoScreen() {
  let [modalVisible, setModalVisible] = useState(false);
  const { todos, deleteTodo, changeTodo } = React.useContext(TodoContext);
  const { todoId, changeScreen } = React.useContext(ScreenContext);
  
  const todo =  todos.find(item => item.id === todoId);
  
  const removeTodo = () => {
    Alert.alert('Удаление', // header
      'Вы желаете удалить эту задачу?', // text
      // buttons Yes/No 
      [
        {
          text: 'Да',
          onPress: () => {
            deleteTodo(todoId);
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
    changeTodo(todo.id, text);
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
        <View style={styles.button}>
          <AppButton color={THEME.GRAY_COLOR} onPress={()=>changeScreen(null)} >
            <AntDesign name="stepbackward" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.GREEN_COLOR} onPress={() => setModalVisible(true)}>
            <AntDesign name="edit" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
        <AppButton color={THEME.DANGER_COLOR} onPress={removeTodo}>
          <AntDesign name="delete" size={20} />
        </AppButton>
      </View>
    </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  block: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 4,
    marginTop: 20
  },
  button: {
    //width: '30%'
    width: Dimensions.get('window').width > 400 ? 150 : 100
  },
  text: {
    fontSize: 16
  }

});
