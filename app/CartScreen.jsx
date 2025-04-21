import React, { useState } from "react";
import { 
    View, 
    Text, 
    ScrollView, 
    TouchableOpacity, 
    StyleSheet, 
    ImageBackground, 
    Image, 
    Modal
} from "react-native";
import { useCart } from "./CartContext";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
    const { cart, removeFromCart } = useCart();
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require("../assets/images/cart.jpg")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={() => setModalVisible(true)} 
                    style={styles.openCartButton}
                >
                    <Text style={styles.openCartText}>View Cart</Text>
                </TouchableOpacity>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Your Cart</Text>
                            <ScrollView>
                                {cart.length > 0 ? (
                                    cart.map((item) => (
                                        <View key={item.idMeal} style={styles.cartItem}>
                                            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                                            <Text style={styles.title}>{item.strMeal}</Text>
                                            <TouchableOpacity 
                                                onPress={() => removeFromCart(item.idMeal)} 
                                                style={styles.removeButton}
                                            >
                                                <Text style={styles.removeButtonText}>Remove</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))
                                ) : (
                                    <Text style={styles.emptyText}>Your cart is empty.</Text>
                                )}
                            </ScrollView>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    background: { flex: 1, width: "100%", height: "100%" },
    openCartButton: { backgroundColor: "blue", padding: 10, borderRadius: 5, alignItems: "center" },
    openCartText: { color: "#fff", fontSize: 18 },
    modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" },
    modalContent: { width: "80%", backgroundColor: "white", padding: 20, borderRadius: 10, alignItems: "center" },
    modalTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    cartItem: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10, width: "100%" },
    image: { width: 50, height: 50, borderRadius: 5, marginRight: 10 },
    title: { fontSize: 18, flex: 1 },
    removeButton: { backgroundColor: "red", padding: 5, borderRadius: 5 },
    removeButtonText: { color: "#fff" },
    emptyText: { textAlign: "center", marginTop: 20 },
    closeButton: { marginTop: 20, backgroundColor: "gray", padding: 10, borderRadius: 5 },
    closeButtonText: { color: "#fff" },
});