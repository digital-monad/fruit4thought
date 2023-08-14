import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as React from 'react';

export default function Results() {
  return (
    <View style={styles.container}>
        <Text>Map of vendors</Text>
        {/* List holds information about vendors including profile pic, produce pic, name, distance, and price */}
        <FlatList
        data={[
          {key: 'Alice'},
          {key: 'Bob'},
          {key: 'Charlie'},
          {key: 'David'},
          {key: 'Edith'},
          {key: 'Foster'},
          {key: 'Graham'},
          {key: 'Harry'},
          {key: 'Isla'},
          {key: 'Jacob'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
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