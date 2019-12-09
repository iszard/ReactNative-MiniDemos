import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonViewStyle: {
    height: 50,
    width: 50,
  },
  viewOneStyle: {
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    backgroundColor: 'green',
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end',
  },
  viewThreeStyle: {
    backgroundColor: 'blue',
  },
});

const BoxScreen = () => (
  <View style={styles.parentStyle} >
    <View style={[styles.commonViewStyle, styles.viewOneStyle]} />
    <View style={[styles.viewTwoParent]}>
      <View style={[styles.commonViewStyle, styles.viewTwoStyle]} />
    </View>
    <View style={[styles.commonViewStyle, styles.viewThreeStyle]} />
  </View>
);

export default BoxScreen;
