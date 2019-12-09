import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

const ComponentsScreen = () => {
  const devName = 'Gavyn';

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with react native!</Text>
      <Text style={styles.textStyle}>My name is {devName}</Text>
    </View>
  );
};

export default ComponentsScreen;
