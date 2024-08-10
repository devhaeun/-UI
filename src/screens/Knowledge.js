import { View, SafeAreaView,Image,Text,ScrollView} from 'react-native';
import {viewStyles} from '../components/MainStyle';
import { imageStyles, SightStyles } from "../components/HealthStyle";


export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
          <View style={viewStyles.profile}>
            <View style={{flexDirection:"row", paddingVertical:30, alignItems:'center',}}>
              <View style={{alignItems:'flex-start'}}>
                <Text style={{fontSize: 26, fontWeight: 700, color: '#fff'}}>유방암에 좋은 지식</Text>
              </View>
            </View>
          </View>
      
      <View style={viewStyles.lets}>
        <View style={viewStyles.greyline}>
          <Text style={{fontSize:23, fontWeight: 600, alignSelf:'flex-start',color:'black',}}> 가슴 성형수술이 유방암 일으킨다? </Text>
        </View>

        <Text style={{fontSize:23,alignSelf:'flex-start',color:'black',paddingTop:10, paddingBottom:10}}> 1. 유방암에 관한 정확한 정보 </Text>

        <Image
        source={require("../../assets/pink.png")}
        style={imageStyles.image}
      />
      <ScrollView style={SightStyles.rectangleD}>
        <Text style={SightStyles.Detail}>
            {`유방암은 전체 여성암의 24.5%를 차지하고, 사망률 또한 15.5%로 높다.  
            \n암 발병률이 높았지만, 최근 갑상선암은 치료나 관리가 과거에 비해 힘들지는 않게 되었다. 언론 매체에서도 많은 정보를 공유해 실제 환자들의 걱정은 이전보다 많이 줄어들었다. 그에 반해, 유방암은 아직까지도 공포를 유발하는 암으로 여겨지고 있다.
            \n건강보험심사평가원의 통계에 따르면 유방암 환자수는 2021년 약 25만 3천 명에서 2022년 약 27만 명으로 약 6.8% 증가했으며, 매년 꾸준히 늘어나는 추세이다. 40~50대 여성에게 발병률이 가장 높은 암이기에, 갱년기에 접어드는 시점과 겹쳐 더 큰 불안과 두려움을 안겨 준다.
            `}
        </Text>
      </ScrollView>

      </View>
    </SafeAreaView>
  );
}