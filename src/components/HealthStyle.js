import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export const imageStyles=StyleSheet.create({
    character:{
        resizeMode:'cover',
        width: Width-280,
        height: 100,
    },
    character2:{
        resizeMode:'contain',
        width: Width-350,
        height: 80,
    },
    image:{
        resizeMode:'cover',
        width: Width-50,
        height: 200,
        borderColor: '#99004C',
        borderWidth:2,
    },
    image2:{
        resizeMode:'contain',
        width: Width-50,
        height: 300,
        borderColor: '#E7E7E7',
        borderWidth:5,
    },
    image3:{
        resizeMode:'contain',
        width: Width-50,
        height: 350,
        borderColor: '#E7E7E7',
        borderWidth: 2,
    },
});

export const SightStyles=StyleSheet.create({
    rectangleN:{
        width: Width-50,
        padding: 16,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#E7E7E7',  
    },
    rectangleD: {
        width: Width-50,
        marginTop: 15,
        backgroundColor: '#FFD9E7', 
        marginBottom: -155,
    },
    name:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
    },
    Detail:{
        padding: 20,
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 32,
        letterSpacing: 0.25,
        color: 'black',
    }
});