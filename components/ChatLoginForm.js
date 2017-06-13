import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

export default class ChatLoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="paddinng" style={styles.ChatLoginFormContainer}>
        <TextInput
        placeholder="username or email"
        placeholderTextColor="rgba(255,255,255,0.6)"
          style={styles.input}
        />
        <TextInput
        placeholder="password"
        placeholderTextColor="rgba(255,255,255,0.6)"
        secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginButtonConntainer}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  ChatLoginFormContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  loginButtonConntainer: {
    backgroundColor: "#f15a28",
    paddingVertical: 15,
    flex: 1,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
