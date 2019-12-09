/* eslint-disable react/prop-types */
import React from 'react';
import {
  Text, StyleSheet, View, Button,
} from 'react-native';

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '40%',
    minWidth: 250,
    height: 40,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: '40%',
    minWidth: 250,
    height: 40,
    marginBottom: 10,
  },
});

// eslint-disable-next-line react/prop-types
const HomeScreen = ({ navigation }) => {
  const title = "Gavyn's Demos";

  return (
    <View style={styles.rootView} >
      <Text style={styles.text} >{title}</Text>
      <View style={styles.button} >
        <Button
          title="Go to Components Demo"
          onPress={() => navigation.navigate('Components')}
        />
      </View>
      <View style={styles.button} >
        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
        />
      </View>
      <View style={styles.button} >
        <Button
          title="Go to Image Demo"
          onPress={() => navigation.navigate('Image')}
        />
      </View>
      <View style={styles.button} >
        <Button
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}
        />
      </View>
      <View style={styles.button} >
        <Button
          title="Go to Color Demo"
          onPress={() => navigation.navigate('Color')}
        />
      </View>
      <View style={styles.button} >
        <Button
          title="Go to Color Square Demo"
          onPress={() => navigation.navigate('Square')}
        />
      </View>
      <View style={styles.button} >
        <Button
          title="Go to Text Input Demo"
          onPress={() => navigation.navigate('Text')}
        />
      </View>
      <View style={styles.button} >
        <Button
          title="Go to Box Layout Demo"
          onPress={() => navigation.navigate('Box')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
