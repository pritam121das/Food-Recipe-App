import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Text,Modal, FlatList,Button} from 'react-native';
import axios from "axios";

const Item = ({ title, body }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{body}</Text>
  </View>
);
const Modalex=()=>{
    const [info, setInfo] = useState([]);
    const [active , setactive] = useState(false);  

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
    

    return(
        <View style={styles.container}>
            <Modal 
                animationType="fade"
                transparent={true} 
                visible={active} 
                onRequestClose={() => { 
                console.warn("closed"); 
                }} 
                > 
                <View style={styles.container}> 
                <View style={styles.View}> 
               <FlatList
                         data={info}
                         renderItem={({ item }) => <Item title={item.title} body={item.body} />}
                         keyExtractor={(item) => item.id.toString()}
                       /> 
                <Button title="close"  onPress={()=>{setactive(!active)}}/> 
                </View> 
                 </View> 
             </Modal>
             <Button title={"click"}  onPress={()=>{setactive(!active)}} /> 
        </View>
    )

}

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor : "black", 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    View : { 
        backgroundColor : "white" , 
        height : 550 , 
        width : 350, 
        borderRadius : 15, 
        alignItems : "center", 
        justifyContent : "center", 
        borderColor : "black", 
        borderWidth:2, 
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
    text : { 
        fontSize : 20, 
        color : "green", 
        marginBottom:20 
    }, 
    button : { 
        margin : 20, 
        width:200, 
    } 
    }); 

export default Modalex