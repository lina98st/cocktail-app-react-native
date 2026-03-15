import { StatusBar } from 'expo-status-bar';
import { NavigationContainer  } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './screens/MainComponent';

export default function App() {
  return (
    <Provider store={store}> 
        <NavigationContainer>
        <Main />
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
