import React, { useEffect, useState } from "react";
import{View,Text,Button} from "react-native";
const Ex2=()=>{
const [sms,setSms]=useState("welcome to react native class");
const[status,setStatus]=useState(false);
// useEffect(()=>{
//     setTimeout(()=>{
//         setSms("Thank you for visiting Again..!");
//     },5000)
// },[])
return(
    <View>
        <Text>{sms}</Text>
        <Button title="CHECK"
         onPress={()=>{setStatus(true)}}/>
            {
                (status)?<Text>Hello this is react native</Text>:null
            }
    </View>
)
}
export default Ex2;