import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { Button } from 'react-native-web';


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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Text style={styles.text}>You clicked {count} times</Text>
      <Button title='Update State' onPress={onClickHandler}></Button>
      <Button title='Add' onPress={countHandler}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  }
});
