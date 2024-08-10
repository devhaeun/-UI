import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const MakeAccountForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });
  const isSame = form.password === form.passwordCheck;
  const isValid = form.name !== '' && form.email !== '';
    return (
        <View style={{marginTop:30}}>
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.inputLabel}>name</Text>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        // keyboardType="email-address"
                        onChangeText={name => setForm({ ...form, name })}
                        placeholder="이름"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        value={form.name} />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputLabel}>email</Text>

                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        keyboardType="email-address"
                        onChangeText={email => setForm({ ...form, email })}
                        placeholder="이메일 주소"
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
                        placeholder="비밀번호"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        secureTextEntry={true}
                        value={form.password} />
                </View>

                <View style={styles.input}>
                    <Text style={styles.inputLabel}>Password</Text>

                    <TextInput
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        onChangeText={passwordCheck => setForm({ ...form, passwordCheck })}
                        placeholder="비밀번호 확인"
                        placeholderTextColor="#6b7280"
                        style={styles.inputControl}
                        secureTextEntry={true}
                        value={form.passwordCheck} />
                </View>

                <View style={styles.formAction}>
                    <TouchableOpacity
                        onPress={() => {
                        // handle onPress
                            if (!isValid) return alert("입력 사항을 모두 기입해주세요!");
                            if (!isSame)  return alert("비밀번호를 다시 확인해주세요!");
                            else {
                                // 회원가입 완료
                            }
                        }}>
                        <View style={styles.btn}>
                        <Text style={styles.btnText}>Make Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </KeyboardAwareScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    /** Form */
    form: {
      marginBottom: 24,
      paddingHorizontal: 24,
      // flexGrow: 1,
      // flexShrink: 1,
      // flexBasis: 0,
    },
    formAction: {
      marginTop: 10,
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
      bottom: -150,
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
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: '600',
      color: '#fff',
    },
  });

  export default MakeAccountForm;