import React, { useState } from "react";
import {View,Text} from "react-native";
import Display from "./Display";
const Counter=()=>{
const[count,setCount]=useState(0);
const inccnt=()=>{
setCount(count+1);
}
const deccnt=()=>{
    setCount(count-1);
}
return(
<View>
<Text>Props Passing Example</Text>
<Display c={count} funinc={inccnt} fundec={deccnt}/>
</View>
    )
}
export default Counter;