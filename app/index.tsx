// import { Text, View } from "react-native";
// // import Ex1 from "../components/Ex1";
// import 'react-native-gesture-handler';

// import Ex2 from "../components/Ex2";
// import Ex3 from "../components/Ex3";
// import Counter from "../components/Counter";
// import Flatlistex from "../components/Flatlistex";
// import Activity from "../components/Activity";
// import Axios from "../components/Axios";
// import Imageback from "../components/Imageback";
// import Touchbutton from "../components/Touchbutton";
// import Toast from "../components/Toast";
// import Modalex from "../components/Modalex";
// import Refrshcon from "../components/Refrshcon";
// import Switchex from "../components/Switchex";
// import Datetime from "../components/DateTime";
// import Shareex from "../components/Shareex";
// import Test1 from"../components/Test1";
// import Test2 from "../components/Test2";
// import Test3 from "../components/Test3";
// import Rules from "../components/Nav/Rules";
// import Asyns from "../components/Asyns";
// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {/* <Text>Edit app/index.tsx to edit this screen pritam's screen 001.</Text> */}
//       {/* <Ex1/> */}
//       {/* <Ex2/> */}
//       {/* <Ex3/> */}
//       {/* <Counter/> */}
//       {/* <Flatlistex/> */}
//       {/* <Activity/> */}
//       {/* <Axios/> */}
//       {/* <Imageback/> */}
//       {/* <Touchbutton/> */}
//       {/* <Toast/> */}
//       {/* <Modalex/> */}
//       {/* <Refrshcon/> */}
//       {/* <Switchex/> */}
//       {/* <Datetime/> */}
//       {/* <Shareex/> */}
//       {/* <Test1/> */}
//       {/* <Test2/> */}
//       {/* <Test3/> */}
     
//       <Rules />
//       {/* <Asyns/> */}
    
//     </View>
//   );
// }
import { Text, View ,Button,ImageBackground,StyleSheet} from "react-native"; 
//import HomeScreen from "./HomeScreen";
import { CartProvider } from "./CartContext";
export default function Index() {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
      <ImageBackground 
            source={require("../assets/images/food.jpg")}  // Local Image
            style={styles.background}
            resizeMode="cover" // Ensures the image covers the entire view
        >
            <View style={styles.overlay}>
            <Text style={styles.text}> Heyy,welcome to  </Text>
            <Text style={styles.text}> Food Reciepe App</Text>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
  background: {
      flex: 1,  // Makes sure it takes full screen
      justifyContent: "center",
      alignItems: "center",
  },
  overlay: {
      // Optional: Adds a dark overlay
      padding: 20,
      borderRadius: 10,
      marginLeft:5
  },
  text: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
  }
});
    //    <Text>Edit app/index.tsx to edit this screen.</Text>
    //   <Text>Index Tab</Text> 
    //   {/* <HomeScreen/> */}
    // </View>
//   );
// }
