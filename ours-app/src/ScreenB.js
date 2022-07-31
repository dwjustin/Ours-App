import {  Text, View} from 'react-native';
import React from 'react';
import { TouchableOpacity  } from 'react-native';

function ScreenB({navigation}){
    
    const onPressHandler=()=>{
      navigation.navigate('Screen_A')
    }
    
    return(
        <View>
            <Text>This is Screen B</Text>
        </View>
    )
  }

export default ScreenB;