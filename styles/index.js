import draper from 'Draper';

import {StyleSheet} from 'react-native';

export const iconSize = 40;

export const robotSize = 32;

const stylesheet = StyleSheet.create({
  // more flex
  selfStretch: { alignSelf: 'stretch' },

  // colors
  base: { color: '#f15a28' },
  bgBase: { backgroundColor: '#f15a28' },
  royalBlue: { color: 'royalblue' },

  // other
  stackTrace: {
    color: 'red',
    fontFamily: 'Courier',
    fontSize: 10,
  },
  container: {
    flex:1,
    backgroundColor: '#252525',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default {
  iconSize,
  robotSize,
  ...draper(),
  ...stylesheet,
};
