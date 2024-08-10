import { View, SafeAreaView,Image,Text,ScrollView} from 'react-native';
import {viewStyles} from '../components/MainStyle';
import { imageStyles, SightStyles } from "../components/HealthStyle";


export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
          <View style={viewStyles.profile}>
            <View style={{flexDirection:"row", paddingVertical:30, alignItems:'center',}}>
              <View style={{alignItems:'flex-start'}}>
                <Text style={{fontSize: 26, fontWeight: 700, color: '#fff'}}>유방암에 좋은 식단</Text>
              </View>
            </View>
          </View>
      
      <View style={viewStyles.lets}>
        <View style={viewStyles.greyline}>
          <Text style={{fontSize:23, fontWeight: 600, alignSelf:'flex-start',color:'black',}}> 유방암 환자 식단, 이것만은 꼭 피해라 </Text>
        </View>

        <Text style={{fontSize:25,alignSelf:'flex-start',color:'black',paddingTop:10, paddingBottom:10}}> 1. 동물성 지방 </Text>

        <Image
        source={require("../../assets/meat.png")}
        style={imageStyles.image}
        />
        <ScrollView style={SightStyles.rectangleD}>
          <Text style={SightStyles.Detail}>
              {`유방암에 동물성 지방이 안 좋은 이유는 여러 가지입니다.
              \n동물성 지방이 풍부한 식품은 고지방 및 포화 지방이 많아 비만을 촉진할 수 있어 유방암 발생 위험을 증가 시킬 수 있습니다.
              \n또한, 동물성 지방 섭취는 호르몬 수준을 높여 에스트로겐의 과도한 생산을 유도할 수 있어 이는 유방암과 연관이 있습니다. 
              \n따라서 건강한 식습관과 식이 지침을 따르며 유방암환자식단에 동물성 지방을 적절히 조절하는 것이 중요합니다.
              `}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}