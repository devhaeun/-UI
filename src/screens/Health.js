import { View, SafeAreaView,Image,Text,TouchableOpacity} from 'react-native';
import {imageStyles,viewStyles} from '../components/MainStyle';
import {MainImages} from '../components/image';


export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
          <View style={viewStyles.profile}>
            <View style={{flexDirection:"row", alignItems:'center',}}>
              <View style={{alignItems:'flex-start'}}>
                <Text style={{fontSize: 26, fontWeight: 700, color: '#fff'}}>오늘의 유방 건강 지식</Text>
              </View>
            </View>
          </View>
      
      <View style={viewStyles.lets}>

        <TouchableOpacity onPress={()=>navigation.navigate('Diet')}>     
          <View style={{paddingTop:25}}>
            <Image source={MainImages.letsdiet} style={imageStyles.title}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Exercise')}>     
          <View style={{paddingTop:25}}>
            <Image source={MainImages.letsexercise} style={imageStyles.title}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Knowledge')}>     
          <View style={{paddingTop:25}}>
            <Image source={MainImages.letsknowledge} style={imageStyles.title}/>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}