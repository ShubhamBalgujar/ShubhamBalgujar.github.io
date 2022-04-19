/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GetFreelancerList } from './src/action/FreelancerAPI';
import FreeLancersComponent from './src/components/FreeLancersComponent';
import ProfileComponent from './src/components/ProfileComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeLancersList: [],
      fetched: false
    };
  }

  componentDidMount() {
    GetFreelancerList().then((response) => {
      this.setState({ freeLancersList: response }, () => {
        console.log('reponse on App', this.state.freeLancersList)
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <SafeAreaProvider style={{ backgroundColor: 'white' }}>
          <Stack.Navigator>
            <Stack.Screen
              name='ListScreen'
              component={FreeLancersComponent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='ProfileScreen'
              component={ProfileComponent}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

