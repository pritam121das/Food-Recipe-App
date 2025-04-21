import React from "react";

import {View,Text,StyleSheet,ImageBackground} from "react-native"
const Imageback=()=>{
    return(

        <View>
            <ImageBackground
                source={{uri:'https://legacy.reactjs.org/logo-og.png'}}
                resizeMode="cover" style={styles.image}>
                    <Text>Welcome to my react channel</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });
  export default Imageback;