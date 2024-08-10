import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            해당 서비스는 <Text style={{ fontWeight: 'bold' }}>유방암 관련 건강정보</Text>를 분석하여 유방암 발병 확률을 예측하는 서비스입니다!
          </Text>
        </View>
        <TouchableOpacity style={styles.infoBox}>
          <Text style={styles.infoText}>이런 사람을 대상으로 해요!</Text>
          <Text style={styles.infoText2}>1.평소에 유방암을 걱정하는 여성</Text>
          <Text style={styles.infoText2}>2.유방암 예방을 위한 계획이 필요한 여성</Text>
          <Text style={styles.infoText2}>3.유방암 자가진단을 원하는 여성</Text>
        </TouchableOpacity>
        <Text style={styles.aiText}>입력한 정보들을 AI가 학습하고 있어요</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DataInput')}>
        <Text style={styles.buttonText}>유방암 발병 예측 시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  topContent: {
    alignItems: 'center',
    marginBottom: 60,
  },
  headingContainer: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    color: '#333',
    textAlign: 'left',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  infoText2: {
    fontSize: 13,
    color: '#555',
    marginBottom: 10,
  },
  aiText: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#E85484',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});