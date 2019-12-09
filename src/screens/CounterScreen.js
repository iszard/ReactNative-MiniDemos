import React, { useReducer } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 30,
  },
});

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  // state === { counter: number }
  // action === { type: 'increase' || 'decrease', payload: number }

  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [{ counter }, dispatch] = useReducer(reducer, { counter: 0 });

  return (
        <View>
            <Button title="Increase" onPress={() => {
              dispatch({ type: 'increase', payload: COUNTER_INCREMENT });
            }} />
            <Button title="Decrease" onPress={() => {
              dispatch({ type: 'decrease', payload: COUNTER_INCREMENT });
            }} />
            <Text style={styles.defaultText}>Counter Screen: {counter}</Text>
        </View>
  );
};

export default CounterScreen;
