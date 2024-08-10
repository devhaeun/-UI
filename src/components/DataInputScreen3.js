import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DataInputScreen2({ navigation }) {
  const [otherCancer, setOtherCancer] = useState('');
  const [hormoneTreatmentDays, setHormoneTreatmentDays] = useState('');
  const [erTestResult, setErTestResult] = useState('');
  const [prTestResult, setPrTestResult] = useState('');
  const [arTestResult, setArTestResult] = useState('');
  const [brca1Pathogenic, setBrca1Pathogenic] = useState('');
  const [brca1Unclassified, setBrca1Unclassified] = useState('');
  const [brca2Pathogenic, setBrca2Pathogenic] = useState('');
  const [brca2Unclassified, setBrca2Unclassified] = useState('');

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
      <View style={styles.titlebox}>
        <Text style={styles.title}>Step3. <Text style={{ fontSize: 17 }}>진단 및 치료 정보 입력 </Text></Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>방사선 치료 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={otherCancer}
            onChangeText={setOtherCancer}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>호르몬 치료 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={otherCancer}
            onChangeText={setOtherCancer}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>호르몬치료기간일수</Text>
          <TextInput
            style={styles.input}
            placeholder="일수를 입력해주세요"
            keyboardType="numeric"
            value={hormoneTreatmentDays}
            onChangeText={setHormoneTreatmentDays}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>호르몬치료목적</Text>
          <TextInput
            style={styles.input}
            placeholder="항암치료 목적은 1, 기타는 99를 입력해주세요"
            keyboardType="numeric"
            value={hormoneTreatmentDays}
            onChangeText={setHormoneTreatmentDays}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>면역병리 ER 검사결과코드</Text>
          <TextInput
            style={styles.input}
            placeholder="음성은 1, 양성은 2를 입력해주세요"
            keyboardType="numeric"
            value={erTestResult}
            onChangeText={setErTestResult}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>면역병리 PR 검사결과코드</Text>
          <TextInput
            style={styles.input}
            placeholder="모른다면 99를 입력해주세요"
            keyboardType="numeric"
            value={prTestResult}
            onChangeText={setPrTestResult}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>면역병리 AR 검사결과코드</Text>
          <TextInput
            style={styles.input}
            placeholder="모른다면 99를 입력해주세요"
            keyboardType="numeric"
            value={arTestResult}
            onChangeText={setArTestResult}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>BRCA1 Pathogenic variant 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0, 모른다면 99를 입력해주세요"
            keyboardType="numeric"
            value={brca1Pathogenic}
            onChangeText={setBrca1Pathogenic}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>BRCA1 Unclassified variation 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0, 모른다면 99를 입력해주세요"
            keyboardType="numeric"
            value={brca1Unclassified}
            onChangeText={setBrca1Unclassified}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>BRCA2 Pathogenic variant 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0, 모른다면 99를 입력해주세요"
            keyboardType="numeric"
            value={brca2Pathogenic}
            onChangeText={setBrca2Pathogenic}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>BRCA2 Unclassified variation 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0, 모른다면 99를 입력해주세요"
            keyboardType="numeric"
            value={brca2Unclassified}
            onChangeText={setBrca2Unclassified}
          />
        </View> */}
      </ScrollView>
      <TouchableOpacity style={styles.behindBox}></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Complete')}>
        <Text style={styles.buttonText}>완료</Text>
      </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  behindBox: {
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 100,
  },
  titlebox: {
    backgroundColor: "pink",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    color: '#555',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: '#E85484',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});