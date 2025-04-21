import React from "react";
import {View,Text,Button} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Asyns=()=>{
    const value={
        name:"Indsac",
        job:"Software Developer",
        loc:"Bengaluru",
        dept:"Frontend"
    };
    const city={
        city:"Kolkata",
        weather:"Average"
    }
    const storeUser= async()=>{
        try{
            await AsyncStorage.setItem("user",JSON.stringify(value),()=>{
                console.log("data is stored")
            });
        }
        catch(error){
            console.log(error);
        }
    }
    const getUser=async()=>{
        try{
            let user=await AsyncStorage.getItem("user");
            console.log(JSON.parse(user));
        }
        catch(err){
            console.log(err);
        }
    }
    const storeCity= async()=>{
try{
    await AsyncStorage.setItem("cityinfo",JSON.stringify(city),()=>{
        console.log("city is added");
    })
}
    }
    return(
        <View>
            <Button title="Store" onPress={storeUser}/>
            <Button title="Get" onPress={getUser}/>
        </View>
    )

}
export default Asyns;