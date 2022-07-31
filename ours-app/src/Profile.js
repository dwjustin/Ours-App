
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';



function Profile(){
    const [name, setName]=useState('호랭이')
    const [age, setAge]=useState('220')
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.profileCard]}> 
            <Image style={styles.avatar} source={require('../assets/tiger.png')} />
            <Text  style={styles.name}>{name}</Text>
          </View> 

          <View style={styles.card}>
            <Text style={styles.cardTittle}></Text>   
            <Text style={styles.state}> Birth 2021.07.08</Text>   
            <Text style={styles.state}> 오늘 {age}일째!</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>내 짝꿍</Text>   
            <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />  
  
          </View>

          <View style={styles.photosCard}>
            <Text style={styles.cardTittle}>추억사진함</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }


  const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:10,
      backgroundColor : "#DCDCDC"
    },
    cardTittle:{
      color:"#808080",
      fontSize:22,
      marginBottom:5,
    },
    avatar:{
      width:150,
      height:150,
    },
    card:{
      backgroundColor: "#FFFFFF",
      borderRadius:10,
      padding:10,
      height:200,
      marginTop:10,
    },
    profileCard:{
      height:200,
      alignItems: 'center',
      marginTop:20,
    },
    name:{
      marginTop:10,
      fontSize:22,
      color:"#808080",
    },
    photosContainer:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: 'auto',
    },
    photosCard:{
      marginTop:10,
    },
    photo:{
      width:113,
      height:113,
      marginTop:5,
      marginRight:5,
    },
    state:{
      marginTop: 20,
      fontSize: 22,
      color: 'black'
    }
  });

  export default Profile;

