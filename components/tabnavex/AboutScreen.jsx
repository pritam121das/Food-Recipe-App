import React, { Component } from "react";
import { Button, View, Text } from "react-native";
export default function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Tab</Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
}