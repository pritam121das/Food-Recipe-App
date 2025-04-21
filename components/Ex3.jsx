import React, { useState } from "react";
import{View,Text,Button,TextInput} from "react-native";
import { Picker } from '@react-native-picker/picker';
const Ex3=()=>{
    const[nm,setNm]=useState("");
    const[price,setPrice]=useState(0);
    const[quantity,setQuantity]=useState(0);
    const[totalvalue,setTotalvalue]=useState(0)
    const[info,setInfo]=useState([]);
   const totalprice=()=>{

    const val=(price*quantity);
    setTotalvalue(val);
    setInfo([...info,{nm,totalvalue:val}]);
    setNm(""); 
    setPrice(0); 
    setQuantity(0);
   }
 
    return(
     <View>
           <Text  style={{
                 height: 40,
                 borderColor: 'gray',
                 borderWidth: 1,
               }}>Enter Name :</Text> 
           <TextInput 
              style={{
                 height: 40,
                 borderColor: 'gray',
                 borderWidth: 1,
               }} 
               value={nm} 
               onChangeText={nm=>setNm(nm)}
           /> 
           <Text  style={{
                 height: 40,
                 borderColor: 'gray',
                 borderWidth: 1,
               }}>Enter Price :</Text> 
           <TextInput 
              style={{
                 height: 40,
                 borderColor: 'gray',
                 borderWidth: 1,
               }} 
               value={price} 
               onChangeText={price=>setPrice(price)}
           /> 
            <Text style={{
                 height: 40,
                 borderColor: 'gray',
                 borderWidth: 1,
               }} >Selected: {quantity}</Text>
                <Picker
                quantity={quantity}
                onValueChange={(itemValue) =>setQuantity(parseInt(itemValue))}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}
            >
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                </Picker>     
           <Button 
             title="ADD" 
             onPress={totalprice}
           /> 
           {
             (info.length>0)?info.map((v)=>{
             return <Text style={{color:'red',fontStyle:'italic'}}>Item name:{v.nm} Total Price:{v.totalvalue}</Text>
             })
             :<Text>No items to show.....</Text>
           }
     </View>
    )
 }
export default Ex3;