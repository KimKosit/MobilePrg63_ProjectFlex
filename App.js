import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.detailedContainer}>
        <View style={styles.boxOne}>
          <Text>1</Text>
        </View>
        <View style={styles.boxTwo}>
          <Text>2</Text>
        </View>
        <View style={styles.boxThree}>
          <Text>3</Text>
        </View>
      </View>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailedContainer: {
    padding: 50,
    width: "80%",
    height: 300,
    flexDirection: 'column',
  },
  boxOne:{
    backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  boxTwo:{
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
  },
  boxThree:{
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
  },
  logo:{
    position: "absolute",
    alignSelf: 'flex-end',
    right: 10,
    bottom: 10,
    width: 89.3,
    height: 74.4,
  },
});
