import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MakeAccountForm from '../components/MakeAccountForm';
import Header from '../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const MakeAccount = () => {
  return (
    <View>
    <KeyboardAwareScrollView>
      <Header title="Make Account" />
      <MakeAccountForm />
    </KeyboardAwareScrollView>
    </View>
  );
}

export default MakeAccount;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 24,
    // paddingHorizontal: 0,
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#fff',
    marginTop: 65,
    // marginBottom: 6,
    // paddingBottom: 30,
  },
  subtitle1: {
    fontSize: 20,
    fontWeight: '500',
    color: '#F3EAED',
  },
  subtitle2: {
    fontSize: 15,
    fontWeight: '500',
    color: '#E1CAD1',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 36,
    backgroundColor: '#E85484',
    height: 200,
  },
  /** Under Header */
  underheader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B0631',
    height: 43,
    // marginBottom: 50,
  },
  explain: {
    paddingHorizontal: 24,
    marginTop: 25,
    marginBottom: 25,
  },
});