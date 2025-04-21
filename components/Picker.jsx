import React from "react";
import {View,StyleSheet,Text} from "react-native";
import {Picker} from "@react-native-picker/picker";
 const Picker=()=>{
    const[Enable,setEnable]=useState(" ");
    return(
        <View style={styles.container}>
            <Picker  selectedValue={Enable} style={{
                height:50,width:250,backgroundColor:'yellow'
            }}
            mode={"dialog"}
            onValueChange={(itemValue)}>
           
            </Picker>

        </View>
    )
 }