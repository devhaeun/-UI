import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DataInputScreen({ navigation }) {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [menarcheAge, setMenarcheAge] = useState('');
  const [menoYn, setMenoYn] = useState('');
  const [delvYn, setDelvYn] = useState('');
  const [menopauseAge, setMenopauseAge] = useState('');
  const [pregnancyAge, setPregnancyAge] = useState('');
  const [numChildren, setNumChildren] = useState('');
  const [isSmoker, setIsSmoker] = useState('');
  const [startSmokingAge, setStartSmokingAge] = useState('');
  const [dailyCigarettes, setDailyCigarettes] = useState('');
  const [alcoholType, setAlcoholType] = useState('');

  //해당 화면에서 입력 받은 데이터를 다음 화면으로 넘기는 작업 필요
  /*const inputData = {
    age: age,
    height: height,
    weight: weight,
    menarcheAge: menarcheAge,
    menopauseAge: menopauseAge,
    pregnancyAge: pregnancyAge,
    numChildren: numChildren,
    isSmoker: isSmoker,
    startSmokingAge: startSmokingAge,
    dailyCigarettes: dailyCigarettes,
    alcoholType: alcoholType
  };
  
  navigation.navigate('Loading', { inputData: inputData });*/


  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
      <View style={styles.titlebox}>
      <Text style={styles.title}>Step1.  <Text style={{ fontSize:17 }}>신체 및 건강 정보 입력</Text></Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>나이</Text>
          <TextInput
            style={styles.input}
            placeholder="나이를 입력하세요"
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>성별</Text>
          <TextInput
            style={styles.input}
            placeholder="여성은 1, 남성은 0을 입력해주세요"
            keyboardType="numeric"
            value={sex}
            onChangeText={setSex}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>키</Text>
          <TextInput
            style={styles.input}
            placeholder="키를 입력하세요"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>체중</Text>
          <TextInput
            style={styles.input}
            placeholder="체중을 입력하세요"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
        </View> */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>초경연령</Text>
          <TextInput
            style={styles.input}
            placeholder="초경연령을 입력하세요"
            keyboardType="numeric"
            value={menarcheAge}
            onChangeText={setMenarcheAge}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>폐경여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={menoYn}
            onChangeText={setMenoYn}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>폐경연령</Text>
          <TextInput
            style={styles.input}
            placeholder="폐경연령을 입력하세요"
            keyboardType="numeric"
            value={menopauseAge}
            onChangeText={setMenopauseAge}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>결혼여부</Text>
          <TextInput
            style={styles.input}
            placeholder="대상은 1, 비대상은 0을 입력해주세요"
            keyboardType="numeric"
            value={delvYn}
            onChangeText={setDelvYn}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>초산연령</Text>
          <TextInput
            style={styles.input}
            placeholder="초산연령을 입력하세요"
            keyboardType="numeric"
            value={pregnancyAge}
            onChangeText={setPregnancyAge}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>출산자녀수</Text>
          <TextInput
            style={styles.input}
            placeholder="출산자녀수를 입력하세요"
            keyboardType="numeric"
            value={numChildren}
            onChangeText={setNumChildren}
          />
        </View> */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>흡연 여부</Text>
          <TextInput
            style={styles.input}
            placeholder="흡연자는 1, 비흡연자는 0을 입력해주세요."
            keyboardType="numeric"
            value={isSmoker}
            onChangeText={setIsSmoker}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>흡연 시작 연령</Text>
          <TextInput
            style={styles.input}
            placeholder="흡연 시작 연령을 입력하세요"
            keyboardType="numeric"
            value={startSmokingAge}
            onChangeText={setStartSmokingAge}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>흡연 기간</Text>
          <TextInput
            style={styles.input}
            placeholder="흡연 기간(연 단위)를 입력하세요"
            keyboardType="numeric"
            value={startSmokingAge}
            onChangeText={setStartSmokingAge}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>하루 평균 흡연량</Text>
          <TextInput
            style={styles.input}
            placeholder="하루 평균 흡연량을 입력하세요"
            keyboardType="numeric"
            value={dailyCigarettes}
            onChangeText={setDailyCigarettes}
          />
        </View>
        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>자주 마시는 음주 종류</Text>
          <TextInput
            style={styles.input}
            placeholder="소주:1, 맥주:2, 양주:3, 미음주:4, 해당없음: 0"
            keyboardType="numeric"
            value={alcoholType}
            onChangeText={setAlcoholType}
          />
        </View> */}
      </ScrollView>
      <TouchableOpacity style={styles.behindBox}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DataInput2')}>
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
    marginBottom: 10
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