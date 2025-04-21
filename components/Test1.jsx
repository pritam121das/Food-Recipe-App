import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

const Test1 = () => {
  const [empdata, setEmpdata] = useState([
    { Id: "1", name: "Pritam", loc: "Barasat", dept: "Developer", gen: "Male", desig: "Junior Developer" },
    { Id: "2", name: "Tapo", loc: "Kolkata", dept: "Senior Developer", gen: "Male", desig: "Associate" },
    { Id: "3", name: "Ankur", loc: "Pune", dept: "Tester", gen: "Male", desig: "Executive" },
  ]);

  const [loc, setLoc] = useState("");
  const [desig, setDesig] = useState("");
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);

  const search = () => {
    const filteredData = empdata.filter(
      (val) => val.loc == loc && val.desig == desig
    );
    if (filteredData.length > 0) {
      setData(filteredData);
      setMsg("We found your location and designation.");
    } else {
      setData([]);
      setMsg("No match found for the given location and designation.");
    }
  };

  return (
    <View >
      <Text>Enter The Location</Text>
      <TextInput
        placeholder="Search Location"
        onChangeText={(text) => setLoc(text)}
        
      />
      <Text>Enter The Designation</Text>
      <TextInput
        placeholder="Designation"
        onChangeText={(text) => setDesig(text)}
       
      />
      <Button title="Search" onPress={search} />

      <Text>{msg}</Text>

      {data.map((val) => (
        <View key={val.Id}>
          <Text>Name: {val.name}</Text>
          <Text>Location: {val.loc}</Text>
          <Text>Department: {val.dept}</Text>
          <Text>Designation: {val.desig}</Text>
        </View>
      ))}
    </View>
  );
};

export default Test1;
