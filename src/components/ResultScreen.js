import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// 텍스트 수정 필요
export default function ResultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.pinkBox}>
        <Text style={styles.topText}>유방암 발병 확률</Text>
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>56 <Text style={{ fontSize: 15,color: 'pink' }}>/ 100</Text></Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.label0}>주의해야 해요</Text>
        <Text style={styles.label2}>유방암 발병 확률이 보통 수준으로 주의해야 합니다. 정기적인 건강 검진과 유방 자가 검사는 계속해서 실시해야 합니다.
        유방 조직의 이상 증상이나 변화를 주시하고, 발견되면 즉시 의료진을 찾아가세요. </Text>
        <Text style={styles.label2}>또한 건강한 생활 습관을 유지하고, 특히 규칙적인 운동과 건강한 식습관을 유지하는 것이 중요합니다.
        금연과 과음을 피하고, 스트레스를 관리하며 충분한 휴식을 취하는 것도 도움이 될 것입니다.</Text>
        <Text style={styles.enter}></Text>
        <Text style={styles.label1}>유방암 관련 정보</Text>
        <Text style={styles.label2}>유방암의 원인은 다양하며, 유전적 요인, 호르몬 수준, 생활 양식, 환경적 요인 등이 영향을 미칠 수 있습니다.
        또한 나이가 들면서 발병 위험이 증가하며, 가족력이 있는 경우에도 유방암 발병 위험이 높아집니다.</Text>
        <Text style={styles.label2}>유방암의 조기 발견은 치료의 성공률을 높일 수 있습니다.
        따라서, 유방암은 인식과 예방이 중요합니다.
        정기적인 건강 검진과 건강한 생활 양식을 유지하는 것은 유방암 발병 위험을 줄이는 데 도움이 될 수 있습니다.
        또한 가족력이 있는 경우에는 유전 상담을 받아야 하며, 유방암과 관련된 모든 의심되는 증상에 대해 즉시 의료진을 찾아가는 것이 중요합니다.</Text>

      </ScrollView>
      <View style={styles.behindBox}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Start')}>
          <Text style={styles.buttonText}>종료하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pinkBox: {
    width: '100%',
    height: '45%',
    backgroundColor: 'pink',
    marginBottom: 20,
  },
  topText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 120,
  },
  label0: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4970',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 30,
  },
  label1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 30,
  },
  label2: {
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 30,
    marginRight:30,
  },
  resultBox: {
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 40,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 30,
    color: '#ff69b4',
    fontWeight: 'bold',
  },
  behindBox: {
    backgroundColor: '#fff',
    width: '100%',
    height: '12%',
    alignItems: 'center',
    verticalAlign:'middle',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#E85484',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});