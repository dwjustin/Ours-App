import {  Text, View, StyleSheet} from 'react-native';
import React from 'react';
import { TouchableOpacity  } from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-custom-calendars';
import { ScrollView } from 'react-native-gesture-handler';



function Calender({navigation}){
    
 
    
    return(
        <View>
            <Calendar/>
            <View style={styles.card}>
                <Text style={styles.cardTittle}>Event1</Text>   
                <Text> - Lorem ipsum dolor sit amet</Text>   
                <Text> - Lorem ipsum dolor sit amet</Text>   
                <Text> - Lorem ipsum dolor sit amet</Text>   
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTittle}>Event2</Text>   
                <Text> - Lorem ipsum dolor sit amet</Text>   
                <Text> - Lorem ipsum dolor sit amet</Text>   
                <Text> - Lorem ipsum dolor sit amet</Text>   
            </View>
        </View>
    )
  }

const styles= StyleSheet.create({
    card:{
        backgroundColor: "#FFFFFF",
        borderRadius:10,
        padding:10,
        height:100,
        marginTop:10,
      },
    cardTittle:{
        color:"#808080",
        fontSize:22,
        marginBottom:5,
    },

})

export default Calender;