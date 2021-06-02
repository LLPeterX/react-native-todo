import React, {useState} from 'react';
import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/TodoState'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
 
// for expo-app-loading
async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
}

export default function App() {
  // state for app loading
  const [isReady, setReady] = useState(false);
  
  if(!isReady) {
    return <AppLoading 
      startAsync={loadApplication}
      onError={(err)=>console.log(err)}
      onFinish={()=>setReady(true)}
    />
  }

  return ( 
   <TodoState>
     <MainLayout/>
    </TodoState>
  );
}

