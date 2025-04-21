import React from "react";
import {View,StyleSheet,ActivityIndicator} from "react-native"
const Activity=()=>{
    return(
        <View>
            <ActivityIndicator/>
            <ActivityIndicator size="small" color="green"/>
            <ActivityIndicator size="large" color="red"/>
        </View>
    )
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//     },
//     horizontal: {
//       flexDirection: 'row',
//       justifyContent: 'space-around',
//       padding: 10,
//     },
//   });
  export default Activity;