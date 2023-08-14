import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Fruit4Thought</Text>
      <Button title="Buy" onPress={() => navigation.navigate("Buy")} />
      <Button title="Sell" onPress={() => navigation.navigate("Sell")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#54B86F",
    alignItems: "center",
    justifyContent: "center",
  },
});
