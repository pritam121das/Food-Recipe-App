import { Stack,Tabs } from "expo-router";

//import { Stack } from "expo-router";
import { CartProvider } from "./CartContext"; // Ensure correct path

export default function RootLayout() {
  return (
    <CartProvider>
      <Tabs screenOptions={{ headerShown: false }} />
    </CartProvider>
  );
}


