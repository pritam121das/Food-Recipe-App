// import React, { useState } from "react";
// import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import axios from "axios";

// export default function HomeScreen() {
//     const [info, setInfo] = useState([]);
//     const [status, setStatus] = useState(false);
//     const [search, setSearch] = useState("");

//     const check = () => {
//         axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
//             .then((res) => {
//                 const val = res.data.meals;
//                 setInfo(val ? val : []);
//                 setStatus(true);
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setInfo([]);
//                 setStatus(true);
//             });
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.title}>Search your food and enjoy your meal!!</Text>
//             <View style={styles.searchBoxContainer}>
//                 <TextInput
//                     style={styles.searchInput}
//                     value={search}
//                     onChangeText={setSearch}
//                     placeholder="What's in your mind?"
//                 />
//                 <TouchableOpacity onPress={check} style={styles.searchButton}>
//                     <Text style={styles.searchButtonText}>🔍</Text>
//                 </TouchableOpacity>
//             </View>
//             {status && (
//                 info.length > 0 ? (
//                     <FlatList
//                         data={info}
//                         keyExtractor={(item) => item.idMeal}
//                         renderItem={({ item }) => (
//                             <View style={styles.card}>
//                                 <Image source={{ uri: item.strMealThumb }} style={styles.image} />
//                                 <Text style={styles.mealTitle}>{item.strMeal}</Text>
//                                 <Text style={styles.mealCategory}>Category: {item.strCategory}</Text>
//                                 <TouchableOpacity style={styles.button}
//                                    onPress={() => {router.push({pathname : "/DetailsScreen" , params : {destination : item}})}}> 
//                                     <Text style={styles.buttonText}>Know more</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         )}
//                     />
//                 ) : (
//                     <Text style={styles.errorText}>Try again</Text>
//                 )
//             )}
//         </ScrollView>
//     );
// }
import React, { useState } from "react";
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView ,ImageBackground} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const [info, setInfo] = useState([]);
    const [status, setStatus] = useState(false);
    const [search, setSearch] = useState("");
    const navigation = useNavigation();

    const check = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => {
                const val = res.data.meals;
                setInfo(val ? val : []);
                setStatus(true);
            })
            .catch((err) => {
                console.log(err);
                setInfo([]);
                setStatus(true);
            });
    };

    return (
      <ImageBackground 
                  source={require("../assets/images/food01.jpg")}  // Local Image
                  style={styles.background}
                  resizeMode="cover" // Ensures the image covers the entire view
              >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Search your food and enjoy your meal!!</Text>
            <View style={styles.searchBoxContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={search}
                    onChangeText={setSearch}
                    placeholder="What's in your mind?"
                />
                <TouchableOpacity onPress={check} style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>🔍</Text>
                </TouchableOpacity>
            </View>
            {status && (
                info.length > 0 ? (
                    <FlatList
                        data={info}
                        keyExtractor={(item) => item.idMeal}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                                <Text style={styles.mealTitle}>{item.strMeal}</Text>
                                <Text style={styles.mealCategory}>Category: {item.strCategory}</Text>
                                <TouchableOpacity 
    style={styles.button} 
    onPress={() => navigation.navigate("DetailsScreen", { destination: item })}
> 
    <Text style={styles.buttonText}>Know more</Text>
</TouchableOpacity>

                            </View>
                        )}
                    />
                ) : (
                    <Text style={styles.errorText}>Try again</Text>
                )
            )}
        </ScrollView>
        </ImageBackground>
    );
}

// Styles remain the same

const styles = StyleSheet.create({
  background: {
    flex: 1,  // Ensures full-screen background
  },
  scrollContainer: {
    flexGrow: 1,  // Allows content to scroll properly
    minHeight: "100%", // Ensures ScrollView takes the full height
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "transparent", // Ensures transparency over background image
  },
    // container: {
    //     flexGrow: 1,
    //     backgroundColor: "#f8f9fa",
    //     alignItems: "center",
    //     padding: 20,
    // },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20,
    },
    searchBoxContainer: {
        flexDirection: "row",
        backgroundColor: "#e9ecef",
        padding: 10,
        borderRadius: 30,
        width: "90%",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        fontSize: 16,
    },
    searchButton: {
        padding: 10,
        backgroundColor: "#adb5bd",
        borderRadius: 20,
    },
    searchButtonText: {
        fontSize: 20,
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
        width: "90%",
        elevation: 3,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 15,
    },
    mealTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 5,
    },
    mealCategory: {
        fontSize: 16,
        color: "#6c757d",
    },
    button: {
        marginTop: 10,
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    errorText: {
        fontSize: 16,
        color: "red",
        textAlign: "center",
    },
});
