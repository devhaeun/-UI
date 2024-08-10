import { View, SafeAreaView,Image,Text,ScrollView} from 'react-native';
import {viewStyles} from '../components/MainStyle';
import { imageStyles, SightStyles } from "../components/HealthStyle";


export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
          <View style={viewStyles.profile}>
            <View style={{flexDirection:"row", paddingVertical:30, alignItems:'center',}}>
              <View style={{alignItems:'flex-start'}}>
                <Text style={{fontSize: 26, fontWeight: 700, color: '#fff'}}>유방암에 좋은 운동</Text>
              </View>
            </View>
          </View>
      
      <View style={viewStyles.lets}>
        <View style={viewStyles.greyline}>
          <Text style={{fontSize:23, fontWeight: 600, alignSelf:'flex-start',color:'black',}}> 기간별 유방암 수술 후 운동 프로그램 </Text>
        </View>

        <Text style={{fontSize:25,alignSelf:'flex-start',color:'black',paddingTop:10, paddingBottom:10}}> 1. 수술 후 일주일 까지 </Text>

        <Image
        source={require("../../assets/exer.png")}
        style={imageStyles.image}
      />
      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
            {`본격적인 재활운동이 들어가는 단계가 아닌 home rehabilitation이 먼저 진행되어야 합니다. 
            \n수술 후 2일째부터 적절하게 걸어주세요. 그래야 배액관을 통해 잔류 염증물질들이 좀 더 잘 배액이 되어 수술 부위 고름이 적게 생기고 좀 더 빨리 회복 가능합니다. 
            \n수술 후 3일째부터 팔과 어깨 주위를 조심스럽게 조금씩 스트레칭 해주시고 걷기 위주 운동을 많이 해주셔서 혈액순환이 잘 될 수 있도록 해주세요. 
            \n이후 심호흡, 자세 운동, 절개부 통증관리 프로그램이 진행됩니다. 
            `}
        </Text>
      </ScrollView>

      </View>
    </SafeAreaView>
  );
}