import React from "react";
import{View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HealthScore=()=>{
    const navigation=useNavigation();
    
    return(
        <View style={Styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("Main",{screen:'Main'})} style={Styles.NextBottom}>
                <Text style={Styles.BottomText}>메인화면으로</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HealthScore;

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    HomeText:{
        fontSize:30,
        textAlign:'center',
    },
    NextBottom:{
        backgroundColor:"#D9418D",
        padding:10,
        marginTop:"20%",
        width:"50%",
        alignSelf:"center",
        borderRadius:10,
    },
    BottomText:{
        fontSize:15,
        color:'white',
        textAlign:"center",
    }
})