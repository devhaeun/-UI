import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <View>
    <KeyboardAwareScrollView>
      <Header title="Login"/>
        <View style={{marginTop:50}}>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>email</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        keyboardType="email-address"
                        onChangeText={email => setForm({ ...form, email })}
                        placeholder="capstone@ewha.ac.kr"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        value={form.email} />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Password</Text>

                    <TextInput
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        onChangeText={password => setForm({ ...form, password })}
                        placeholder="********"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        secureTextEntry={true}
                        value={form.password} />
                </View>

                <View style={styles.formAction}>
                    <TouchableOpacity
                        onPress={() => {
                          if (form.email === '') return alert("이메일을 입력해 주세요!");
                          else if (form.password === '') return alert("비밀번호를 입력해 주세요!");
                          else {
                            // 페이지 전환
                            navigation.navigate('Main');
                          }
                        }}>
                        <View style={styles.btn}>
                        <Text style={styles.btnText}>Sign in</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* <Text style={styles.formLink}>Forgot password?</Text> */}
            </View>

            <TouchableOpacity
            onPress={() => {
                // handle link
                navigation.navigate('MakeAccount');
            }}
            // style={{ marginTop: 'auto' }}
            >
                <Text style={styles.formFooter}>
                    Don't have an account?{' '}
                    <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                </Text>
            </TouchableOpacity>
        </View>
      {/* <LoginForm prop={{navigation}} /> */}
    </KeyboardAwareScrollView>
    </View>
  );
}

export default Login;

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
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: '600',
    // color: '#D5216C',
    textAlign: 'center',
  },
  formFooter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
    position: 'relative',
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#FBD6E2',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#FBD6E2',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#D5216C',
    borderColor: '#D5216C',
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});