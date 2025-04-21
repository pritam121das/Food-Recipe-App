import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,Keyboard} from "react-native";
 const Keyboard=()=>{
    const[keyboardStatus,setKeyboardStatus]=useState('');
    useEffect(()=>{
        const showSubscription=Keyboard.addListener('keyboardDidShow',()=>{
            setKeyboardStatus('Keyboard Shown');
        });
        const hideSubscription=Keyboard.addListener('keyboardDidHide',()=>{
            setKeyboardStatus('keyboard Hiden');

        })
        return()=>{
            showSubscription.remove();
            hideSubscription.remove();
        };
    },[])
    return(
        <View style={style.container}>
            <TextInput style={style.input}
            placeholder="click here..."/>
            onsubmitEditing={}
            
        </View>
    )
 }
 const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 36,
    },
    input: {
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 4,
    },
    status: {
      padding: 10,
      textAlign: 'center',
      color:'red',
      fontStyle:'italic'
    },
  });