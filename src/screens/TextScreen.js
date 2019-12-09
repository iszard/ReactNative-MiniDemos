import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
  },
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
  },
});

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
        <Text style={styles.headerText} >Enter Password:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
};

export default TextScreen;
