import React,{useState} from "react";
import{View,Switch,StyleSheet,Text} from 'react-native';
const Switchex =()=>{
 const [isEnabled,setIsEnabled]=useState(false);
 const toggleSwitch=()=> setIsEnabled(isEnabled=>!isEnabled);
  return(
    <View style={styles.container}>
        <Switch 
        trackColor={{false:'grey',true:'green'}}
        thumbColor={isEnabled?'brown':'yellow'}
        value={isEnabled}
        onValueChange={toggleSwitch}/>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Switchex;