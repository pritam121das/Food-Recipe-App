import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

const Test2 = () => {
  const [nm, setNm] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [info, setInfo] = useState([]);

  const valadd = () => {
    const updt={nm,desc,cat};
    setInfo([...info,updt]);
    setNm("");
    setDesc("");
    setCat("");
  };

  const addelete = (id) => {
    info.splice(id, 1);
    setInfo([...info] );

  };

  return (
    <View>
      <Text>Enter Task Name :</Text>
      <TextInput value={nm} onChangeText={(nm) => setNm(nm)} />
      <Text>Enter Task Description :</Text>
      <TextInput value={desc} onChangeText={(desc) => setDesc(desc)} />
      <Text>Enter Task Category :</Text>
      <TextInput value={cat} onChangeText={(cat) => setCat(cat)} />
      <Button title="ADD" onPress={valadd} />
      {info.length > 0 ? (
        info.map((v, index) => (
          <View key={index}>
            <Text>
              Task Name: {v.nm} Task Description: {v.desc} Task Category: {v.cat}
            </Text>
            <Button title="Delete" onPress={() => addelete(index)} />

          </View>
        ))
      ) : (
        <Text>No items to show.....</Text>
      )}
    </View>
  );
};

export default Test2;
