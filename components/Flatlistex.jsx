import React from "react";
import {View,StyleSheet,FlatList,Text} from "react-native";
const DATA = [
    {
      id: '1',
      title: 'First Item',
      dept: 'computer'
    },
    {
      id: '2',
      title: 'Second Item',
      dept: 'computer'
    },
    {
      id: '3',
      title: 'Third Item',
      dept: 'computer'
    },
    {
        id: '4',
        title: 'Fourth Item',
        dept: 'computer'
      },
      {
        id: '5',
        title: 'Fifth Item',
        dept: 'computer'
      },
  ];
  const Item=({title,dept})=>(
    <View  style={styles.item}>
        <Text>{title}</Text>
        <Text>{dept}</Text>
    </View>
  )
  const Flatlistex=()=>{
return(
    <View style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={({item})=><Item title={item.title} dept={item.dept}/>}
        keyExtractor={item=>item.id}/>
    </View>
)
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  export default Flatlistex;