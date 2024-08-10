import { StyleSheet,Dimensions } from "react-native";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const viewStyles=StyleSheet.create({
    whole:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
    },
    todaywalk:{
        flexDirection:"row",
        backgroundColor:'#8B0631',
        width:width,
        justifyContent:'center',
        height:40,
        paddingVertical:10,
        paddingHorizontal:10,        
    },
    profile:{
        backgroundColor:'#E85484',
        width:width,
        height:height-720,
        alignItems:'center',
        justifyContent:'center',
    },
    lets:{
        height:'60%',
        alignItems:'center',
        paddingVertical:30,
    },
    greyline:{
        borderBottomColor: '#8B0631',
        borderBottomWidth: 3,
        width:width-30,
        paddingVertical:10,
    }
});

export const imageStyles=StyleSheet.create({
    title:{
        alignSelf:'center',
        height:120,
        width:width-30,
    },
});

export const textStyles=StyleSheet.create({
    title:{
        fontSize:35,
        alignSelf:'center',
        justifyContent:'center',
        color:'white',
        fontWeight: 'bold',
        paddingTop:30,
        paddingBottom:10,        
    },
    subtitle:{
        fontSize:26,
        color:'white',
        fontWeight:'bold'
    },
    halfText:{
        width:width*0.4,
        textAlign:'center',
        color:'white',
        fontSize:20,
    },
})