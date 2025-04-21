import React,{useState,useCallback} from "react";
import {ScrollView,Text,StyleSheet,RefreshControl,Image} from 'react-native';
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
const Refrshcon =()=>{
    const [refreshing,SetRefreshing]=useState(false);
    const test=useCallback(()=>{
        SetRefreshing(true);
        setTimeout(()=>{
        SetRefreshing(false);
        },3000);
    })
    return(
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing}
            onRefresh={test}/>
        }
        >
            <Text>Pull down</Text>
            <Text>Scroll me please</Text>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
            <Image source={logo}/>
        </ScrollView>

    )
}
export default Refrshcon;