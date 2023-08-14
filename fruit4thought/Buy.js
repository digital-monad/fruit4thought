import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import * as React from 'react';
import Results from './Results';

export default function Buy({ navigation}) {
  return (
    <View style={styles.container}>
        <Text>Distance to Current Location</Text>
      <FlatList
        data={[
          {key: 'Apples'},
          {key: 'Lemons'},
          {key: 'Peppers'},
          {key: 'Courgettes'},
          {key: 'Carrots'},
          {key: 'Basil'},
          {key: 'Parsley'},
          {key: 'Chillies'},
          {key: 'Tomatoes'},
          {key: 'Lettuce'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Button title="Search" onPress={() => navigation.navigate("Results")} />
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