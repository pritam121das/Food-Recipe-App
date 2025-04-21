import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
const Touchbutton=()=>{
    const[data,setData]=useState(0);
    const inc=()=>{
        setData(data+1)
    }
    const dec=()=>{
        setData(data-1)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.countContainer}>
                count value:{count}
            </Text>
            <TouchableOpacity style={styles.button} onPress={inc}>
            <Text>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={dec}>
            <Text>-1</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
    },
    countContainer: {
      alignItems: 'center',
      padding: 10,
    },
  });
export default Touchbutton;