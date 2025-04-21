import React, { useState } from "react";
import {Text,View,Image,TextInput}from "react-native";

const Ex1=()=>{
const [nm,setNm]=useState("");
    return(

        <View>
            <Text> This is my first app</Text>

            <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}
            style={{width:200,height:200}}/>

            <TextInput defaultValue={nm} style={{height:40,borderColor:'gray',borderWidth:1}} onChangeText={nm=>setNm(nm)}/>

                <Text style={{padding:10,fontSize:42}}>Required Result :{nm}</Text>
        </View>
    )
}
export default Ex1;