import { View, SafeAreaView,Image,Text,TouchableOpacity} from 'react-native';
import {imageStyles,viewStyles} from '../components/MainStyle';
import {MainImages} from '../components/image';

export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
          <View style={viewStyles.profile}>
            <View style={{flexDirection:"row", alignItems:'center',}}>
              <View style={{alignItems:'flex-start'}}>
                <Text style={{fontSize: 26, fontWeight: 700, color: '#fff', marginTop: 15}}>My Breast Care</Text>
                {/* <Text style={{fontSize:15, textAlign:'center', color:'white', paddingRight:15, paddingLeft:45, paddingTop:10, paddingHorizontal:15}}>welcome Ewha </Text> */}
              </View>
            </View>
          </View>

      <View style={viewStyles.todaywalk}>
        <Text style={{fontSize:18, color:'white', marginRight: 60}}>⁕  오늘 나의 유방 건강 점수</Text>
        <Text style={{fontSize:18, color:'white'}}>100/100 점</Text>
      </View>
      
      <View style={viewStyles.lets}>
        
        
        <View style={viewStyles.greyline}>
          <Text style={{fontSize:20,alignSelf:'flex-start',color:'black',}}> Get start </Text>
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Start')}>     
          <View style={{paddingTop:25}}>
            <Image source={MainImages.letswalk} style={imageStyles.title}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Health')}>     
          <View style={{paddingTop:25}}>
            <Image source={MainImages.letstour} style={imageStyles.title}/>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}