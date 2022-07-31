import { StatusBar } from 'expo-status-bar';
import {  Text, View} from 'react-native';
import React, {useState} from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';

function ScreenA({navigation}){
    
    const onPressHandler=()=>{
      navigation.navigate('Screen_B')
    }
    
    return(
      <View>
        <Text>Hello?</Text>
    
      </View>
    )
  }

  export default ScreenA;