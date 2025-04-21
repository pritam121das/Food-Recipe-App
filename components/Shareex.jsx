import React from "react";
import {View,Share,Alert,Button} from 'react-native';
const Shareeex =()=>{
    const onShare=async()=>{
        try{
            const result=await Share.share({
                message:"https://picsum.photos/seed/picsum/536/354"
            })
            if(result.action===Share.sharedAction)
            {
                if(result.activityType){

                }
                else{
                    Alert.alert("sorry")
                }
            }
            else if(result.action===Share.dismissedAction){
Alert.alert("hffgf");
            }
        }
        catch(err){
            Alert.alert("error");
        }
    }
    return(
        <View style={{marginTop:50}}>
            <Button title="Sharenow" onPress={onShare}/>
        </View>
    )
    
}
export default Shareeex;