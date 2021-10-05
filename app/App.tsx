/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Navigator from './routes/Dashboard.stack';
import React from 'react'
import { Component } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

interface State{

}

export default abstract class App extends Component<{ }, State> {
  render(){
    return (
      <Navigator/>
    );
  }
};

