import React, { useState } from "react";
import { Text, View, Modal, FlatList, TextInput, Button, TouchableOpacity } from "react-native";

const Test3 = () => {
    const [nm, setNm] = useState("");
    const [email, setEmail] = useState("");
    const [dept, setDept] = useState("");
    const [loc, setLoc] = useState("");
    const [info, setInfo] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const valadd = () => {
        if (nm && email && loc && dept) {
            const updt = { id: info.length.toString(), nm, email, loc, dept };
            setInfo([...info, updt]);
            setNm("");
            setEmail("");
            setLoc("");
            setDept("");
            setModalVisible(true); 
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Enter Name:</Text>
            <TextInput value={nm} onChangeText={(text) => setNm(text)} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
            
            <Text>Enter Email:</Text>
            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
            
            <Text>Enter Department:</Text>
            <TextInput value={dept} onChangeText={(text) => setDept(text)} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
            
            <Text>Enter Location:</Text>
            <TextInput value={loc} onChangeText={(text) => setLoc(text)} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />

            <Button title="ADD" onPress={valadd} />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <View style={{ width: 300, backgroundColor: "white", padding: 20, borderRadius: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Employee List</Text>
                        
                        <FlatList
                            data={info}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
                                    <Text>Name: {item.nm}</Text>
                                    <Text>Email: {item.email}</Text>
                                    <Text>Department: {item.dept}</Text>
                                    <Text>Location: {item.loc}</Text>
                                </View>
                            )}
                        />
                        
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20, backgroundColor: "red", padding: 10, alignItems: "center", borderRadius: 5 }}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Test3;
