import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function Sell() {
  return (
    <View style={styles.container}>
      <Text>Sell Produce</Text>
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