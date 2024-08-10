import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import LoginForm from './components/LoginForm';
// import MakeAccountForm from './components/MakeAccountForm';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Header = (props) => {
  return (
    // <SafeAreaView>
      <View style={styles.container}>
        {/* <KeyboardAwareScrollView> */}
          <View style={styles.header}>
            <Text style={styles.title}>
              My Breast Care
            </Text>
          </View>
          <View style={styles.underheader}>
              <Text style={styles.subtitle1}>
                {props.title}
              </Text>
            </View>
          {/* <View style={styles.explain}>
            <Text style={{fontWeight:30, fontSize:16}}>
              Welcome
            </Text>
          </View> */}
          {/* <LoginForm /> */}
          {/* <MakeAccountForm /> */}
        {/* // </SafeAreaView> */}
      </View>
  );
}

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
    marginTop: 15,
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
    height: 160,
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

export default Header;