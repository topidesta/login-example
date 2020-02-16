import React, {Component} from 'react';
import {View, TextInput, Text, Button, TouchableHighlight} from 'react-native';
import styles from './styles';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Ingresar datos:</Text>
        <Text style={styles.textForInput}>Nombre:</Text>
        <TextInput style={styles.input} testID="name" />
        <Text style={styles.textForInput}>Apellido:</Text>
        <TextInput style={styles.input} testID="lastName" />

        <TouchableHighlight
          style={{
            height: 40,
            width: 160,
            borderRadius: 10,
            backgroundColor: 'yellow',
            marginTop: 20,
          }}>
          <Button
            onPress={this._onPressButton}
            accessibilityLabel="Learn more about this button"
            title={'Crear cuenta'}
            onPress={butttonClicked}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const butttonClicked = () => {
  alert('Has pulsado!!!');
};

export default Home;

// npx react-native run-ios
