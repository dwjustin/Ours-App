import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Pressable } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function App() {
  
  const [name, setName]=useState('Justin')
  const [session, setSession]=useState({number: 6, title: 'state'})
  const [current, setCurrent]=useState(true)
  const [count, setCount]=useState(0)

  const onClickHandler=()=>{
    setName('Programming with Justin')
    setSession({number:7, title: 'Style'})
    setCurrent(false)
    
    
  }

  const countHandler=()=>{
    setCount(count+1)
  }

  const Tab= createBottomTabNavigator();
  




  return (
    
    <NavigationContainer>
    {/* <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title='Update State' onPress={onClickHandler}></Button>
      <Button title='Add' onPress={countHandler}></Button>
      <StatusBar style="auto" />
    </View> */}
    <Tab.Navigator>
      <Tab.Screen name="Screen_A" component={ScreenA} options={{
        header: ()=>null
      }}/>
      <Tab.Screen name='Screen_B' component={ScreenB} options={{
        header: ()=>null
      }}/>
    </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 40,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});
