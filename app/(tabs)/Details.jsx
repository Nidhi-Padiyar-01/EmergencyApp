// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Details = () => {
    const route=useRoute();
  const { topic, info } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{topic}</Text>
      <Text style={styles.infoText}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Details;
