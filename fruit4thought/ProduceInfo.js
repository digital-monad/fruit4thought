import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function ProduceInfo() {
  return (
    <View style={styles.container}>
      <Text>Contains information about produce and seller. Also option to contacxt seller.</Text>
      <Button title="Buy"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#54B86F',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });