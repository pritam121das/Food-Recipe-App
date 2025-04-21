import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export  function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Tab</Text>
      <Button
        title="Visit Home Again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}