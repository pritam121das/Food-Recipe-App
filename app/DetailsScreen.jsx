import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useCart } from "./CartContext";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for cart icon

export default function DetailsScreen() {
    const navigation = useNavigation();
    const { addToCart, cart } = useCart(); // Access addToCart and cart
    const [showModal, setShowModal] = useState(false);
    const [currentInstructions, setCurrentInstructions] = useState("");
    const route = useRoute();
    const destination = route.params?.destination;

    if (!destination) {
        return <Text style={styles.errorText}>Error: No Data Passed</Text>;
    }

    const openModal = (instructions) => {
        setCurrentInstructions(instructions);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentInstructions("");
    };

    return (
        <ImageBackground 
            source={require("../assets/images/food02.jpg")}  
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                {/* Cart Icon in Top Corner */}
                <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate("CartScreen")}>
                    <Ionicons name="cart" size={30} color="white" />
                    {cart.length > 0 && (
                        <View style={styles.cartBadge}>
                            <Text style={styles.cartBadgeText}>{cart.length}</Text>
                        </View>
                    )}
                </TouchableOpacity>

                <ScrollView>
                    <View style={styles.card}>
                        <Image source={{ uri: destination.strMealThumb }} style={styles.image} />
                        <Text style={styles.title}>Name: {destination.strMeal}</Text>
                        <Text style={styles.text}>Category: {destination.strCategory}</Text>
                        <Text style={styles.text}>Area: {destination.strArea}</Text>
                        
                        <TouchableOpacity onPress={() => openModal(destination.strInstructions)}>
                            <Text style={styles.link}>See Instructions</Text>
                        </TouchableOpacity>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => addToCart(destination)} style={styles.cartButton}>
                                <Text style={styles.cartButtonText}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>

            {/* Modal for Instructions */}
            <Modal visible={showModal} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Instructions</Text>
                        <ScrollView style={styles.modalScroll}>
                            <Text style={styles.modalText}>{currentInstructions}</Text>
                        </ScrollView>
                        <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    );
}

// Styles
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(92, 85, 85, 0.8)", 
        padding: 10,
    },
    cartIcon: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 10,
    },
    cartBadge: {
        position: "absolute",
        top: -5,
        right: -5,
        backgroundColor: "red",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    cartBadgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginTop: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        marginTop: 5,
    },
    link: {
        fontSize: 16,
        color: "blue",
        marginTop: 10,
        textDecorationLine: "underline",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        flex: 1,
        marginRight: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    cartButton: {
        backgroundColor: "#28a745",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        flex: 1,
        marginLeft: 5,
    },
    cartButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    errorText: {
        fontSize: 16,
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        alignItems: "center",
        elevation: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalScroll: {
        maxHeight: 300,
    },
    modalText: {
        fontSize: 16,
        textAlign: "center",
    },
    modalButton: {
        marginTop: 10,
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});