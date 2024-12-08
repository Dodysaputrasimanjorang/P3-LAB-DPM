import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TodoItem({ task }) {
  return (
    <View style={styles.item}>
      <Text>{task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
});
