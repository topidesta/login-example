import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Login to the app:</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />

        <Button title={'Log in'} onPress={butttonClicked} />
      </View>
    );
  }
}

const butttonClicked = () => {
  alert('Has pulsado!!!');
};

export default Home;

// npx react-native run-ios