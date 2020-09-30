import React from 'react';
import { StyleSheet, Text, View, ListItem, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

import MyHeader from '../components/MyHeader';

import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <MyHeader title="Stick To Your Plan" />

        <TouchableOpacity style={[styles.button, { marginTop: 70 }]} onPress={() => { this.props.navigation.navigate("Step1") }} >
          <Text style={styles.buttonText} >Step 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("Step2") }} >
          <Text style={styles.buttonText} >Step 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("Step3") }} >
          <Text style={styles.buttonText} >Step 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate("Step4") }} >
          <Text style={styles.buttonText} >Step 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#00adb5', width: '20%', height: RFValue(25), marginTop: 30 }]}
          onPress={() => { this.props.navigation.navigate("Go") }}
        >
          <Text style={[styles.buttonText, { fontSize: RFValue(15) }]} >Go !!</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    width: '85%',
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(25),
    backgroundColor: '#f47b9d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    marginBottom: RFValue(10),
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    alignSelf: 'center'
  },

  buttonText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },

});

