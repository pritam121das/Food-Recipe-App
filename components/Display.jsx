import React from "react";
import {View,Text,Button} from "react-native";
const Display=(props)=>{
return(
    <View>
<Text style={{color:'green'}}>Count:{props.c}</Text>
<Button title="+" onPress={props.funinc}/>
<Button title="-" onPress={props.fundec}/>
    </View>
)
}
export default Display;