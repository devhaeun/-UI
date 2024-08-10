import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DataInputScreen2({ navigation }) {
  const [medicalHistory, setMedicalHistory] = useState('');
  const [diabetesHistory, setDiabetesHistory] = useState('');
  const [tuberculosisHistory, setTuberculosisHistory] = useState('');
  const [liverDiseaseHistory, setLiverDiseaseHistory] = useState('');
  const [depressionHistory, setDepressionHistory] = useState('');
  const [insomniaHistory, setInsomniaHistory] = useState('');
  const [heartDiseaseHistory, setHeartDiseaseHistory] = useState('');
  const [otherHistory, setOtherHistory] = useState('');
  const [medicationHistory, setMedicationHistory] = useState('');
  const [ocUseYn, setOcUseYn] = useState('');
  const [hrtUseYn, setHrtUseYn] = useState('');

  // 데이터를 다음 화면으로 넘기는 작업 필요
  /*const inputData = {
    medicalHistory: medicalHistory,
    diabetesHistory: diabetesHistory,
    tuberculosisHistory: tuberculosisHistory,
    liverDiseaseHistory: liverDiseaseHistory,
    depressionHistory: depressionHistory,
    insomniaHistory: insomniaHistory,
    heartDiseaseHistory: heartDiseaseHistory,
    otherHistory: otherHistory,
    medicationHistory: medicationHistory
  };
  
  navigation.navigate('Loading', { inputData: inputData });*/

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
      <View style={styles.titlebox}>
        <Text style={styles.title}>Step2. <Text style={{ fontSize: 17 }}>가족력 및 병력 정보 입력</Text></Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>병력 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={medicalHistory}
            onChangeText={setMedicalHistory}
          />
        </View> */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>당뇨 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={diabetesHistory}
            onChangeText={setDiabetesHistory}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>결핵 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={tuberculosisHistory}
            onChangeText={setTuberculosisHistory}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>간질환 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={liverDiseaseHistory}
            onChangeText={setLiverDiseaseHistory}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>우울증 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={depressionHistory}
            onChangeText={setDepressionHistory}
          />
        </View> */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>불면증 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={insomniaHistory}
            onChangeText={setInsomniaHistory}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>고혈압 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={heartDiseaseHistory}
            onChangeText={setHeartDiseaseHistory}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>기타 병력 여부 (천식 등)</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={otherHistory}
            onChangeText={setOtherHistory}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>지참약 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={medicationHistory}
            onChangeText={setMedicationHistory}
            />
          </View> */}
          {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>경구피임약 사용 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={ocUseYn}
            onChangeText={setOcUseYn}
            />
          </View> */}
          {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>HRT 사용 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={hrtUseYn}
            onChangeText={setHrtUseYn}
            />
          </View> */}
        </ScrollView>
        <TouchableOpacity style={styles.behindBox}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DataInput3')}>
          <Text style={styles.buttonText}>다음</Text>
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
  