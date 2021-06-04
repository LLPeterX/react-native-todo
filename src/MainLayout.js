import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from './components/Navbar';
import { ScreenContext } from './context/screen/screenContext';
import MainScreen from './screens/MainScreen'
import TodoScreen from './screens/TodoScreen'


export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={styles.container}>
      <NavBar title="Список моих задач!" />
      {todoId ? <TodoScreen/> : <MainScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});
