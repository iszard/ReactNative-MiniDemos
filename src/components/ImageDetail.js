/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 30,
  },
});

const ImageDetail = ({ imageSource, title, score }) => (
    <View>
        <Image source={imageSource} />

        <Text style={styles.defaultText}>{title}</Text>
        <Text style={styles.defaultText}>Image Score - {score}</Text>
    </View>
);

export default ImageDetail;
