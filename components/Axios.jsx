import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from "react-native";
import axios from "axios";

const Item = ({ title, body }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{body}</Text>
  </View>
);

const Axios = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
          setInfo(res.data.slice(0, 10)); 
          setLoading(false);  
        }, 5000); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="red" style={styles.loader} />
      ) : (
        <FlatList
          data={info}
          renderItem={({ item }) => <Item title={item.title} body={item.body} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Axios;
