import React from "react";
import{View,Text,Button,ToastAndroid} from "react-native"

const Toast=()=>{
 const showToast=()=>{
    ToastAndroid.show('hi,thank you all!',ToastAndroid.SHORT);
 }
 const showToastWithGravity=()=>{
    ToastAndroid.showWithGravity(
        'all the best with gravity!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
    )
 }
 const showToastWithGravityAndOffset=()=>{
    ToastAndroid.showWithGravityAndOffset(
        'Message with gravity and Offset',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
    )
 }
    return(
        <View>
            <Button title="Toggle Toast" onpress={()=>showToast()}/>
            <Button title="Toggle Toast With Gravity" onpress={()=>showToastWithGravity()}/>
            <Button title="Toggle Toast With Gravity & offset" onpress={()=>showToastWithGravityAndOffset()}/>
        </View>
    )
}
export default Toast;