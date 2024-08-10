import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DataCompleteScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <View style={styles.topContent}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                의학적 소견이 아닌 데이터를 통해 학습된 <Text style={{ fontWeight: 'bold' }}>AI가 예측한 결과</Text>입니다.
                정확한 진단을 위해서는 의료기관을 방문해주세요!
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Loading')}>
            <Text style={styles.buttonText}>예측 결과보기</Text>
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
        paddingHorizontal: 70,
        borderRadius: 25,
      },
      buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
      },
    });
    