import React, {Component, PropTypes} from 'react';

import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import ChatLoginForm from './ChatLoginForm';


import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles';

export class ChatLogin extends Component {
  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.rounded, styles.selfCenter, styles.p2, styles.bgBase, styles.loginContainer]}
          activeOpacity={0.5}
          onPress={props.onSubmit}>
          <View style={[styles.flxRow]}>
            <Icon name="vpn-key" size={25} color="white" />
            <Text style={[styles.white, styles.f3, styles.ml1]}>Login with GitHub</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <ChatLoginForm />
        </View>
      </View>
    );
  }
}
