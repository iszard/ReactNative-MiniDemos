import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

// eslint-disable-next-line react/prop-types
const ColorCounter = ({ color, onIncrease, onDecrease }) => (
    <View>
        <Text style={styles.text} >{color}</Text>
        <Button
            title={`Increase ${color}`}
            onPress={() => onIncrease()}
        />
        <Button
            title={`Decrease ${color}`}
            onPress={() => onDecrease()}
        />
    </View>
);

export default ColorCounter;
