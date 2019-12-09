import React from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 12 },
    { name: 'Friend #2', age: 35 },
    { name: 'Friend #3', age: 78 },
    { name: 'Friend #4', age: 45 },
    { name: 'Friend #5', age: 27 },
    { name: 'Friend #6', age: 95 },
    { name: 'Friend #7', age: 33 },
    { name: 'Friend #8', age: 44 },
    { name: 'Friend #9', age: 67 },
    { name: 'Friend #10', age: 35 },
    { name: 'Friend #11', age: 82 },
    { name: 'Friend #12', age: 19 },
    { name: 'Friend #13', age: 14 },
    { name: 'Friend #14', age: 85 },
  ];

  return (
    <FlatList
        keyExtractor={(friend) => friend.name }
        data={friends}
        renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        )}
    />
  );
};

export default ListScreen;
